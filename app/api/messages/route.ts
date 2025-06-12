import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

// Initialize Prisma Client as a singleton
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Handle connection
prisma.$connect()

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(messages)
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { message: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { message: 'Message ID is required' },
        { status: 400 }
      )
    }

    await prisma.contactMessage.delete({
      where: {
        id: id
      }
    })

    return NextResponse.json({ message: 'Message deleted successfully' })
  } catch (error) {
    console.error('Error deleting message:', error)
    return NextResponse.json(
      { message: 'Failed to delete message' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received data:', JSON.stringify(body, null, 2))

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      console.log('Missing fields:', {
        name: !body.name,
        email: !body.email,
        subject: !body.subject,
        message: !body.message
      })
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message
      }
    })

    console.log('Successfully created message:', contactMessage)
    return NextResponse.json(contactMessage)
  } catch (error) {
    console.error('Error creating message:', error)
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    }
    return NextResponse.json(
      { message: 'Failed to create message', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 