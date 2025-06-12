import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json();
    const id = params.id;

    await sql`
      UPDATE contacts
      SET status = ${status}
      WHERE id = ${id}
    `;

    return NextResponse.json(
      { message: 'Contact message updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating contact message:', error);
    return NextResponse.json(
      { error: 'Failed to update contact message' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    await sql`
      DELETE FROM contacts
      WHERE id = ${id}
    `;

    return NextResponse.json(
      { message: 'Contact message deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting contact message:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact message' },
      { status: 500 }
    );
  }
} 