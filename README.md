# Code & Canvas Portfolio
visit: https://snehaportfolio-cznulxxj0-snehas-projects-43b75972.vercel.app

A modern, artistic portfolio website built with Next.js, TailwindCSS, and Framer Motion.

## Features

- 🎨 Artistic design with canvas-inspired elements
- ⚡ Fast and responsive with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 Modern UI with TailwindCSS
- 📱 Fully responsive design
- 🌙 Dark/Light mode support

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/code-canvas-portfolio.git
cd code-canvas-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
code-canvas-portfolio/
├── app/
│   ├── components/     # Reusable components
│   ├── sections/       # Page sections
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/            # Static assets
├── styles/           # Additional styles
└── package.json      # Dependencies
```

## Customization

1. Update personal information in `app/page.tsx`
2. Modify colors in `tailwind.config.js`
3. Add your projects in the projects section
4. Customize animations in components

## Technologies Used

- Next.js 14
- React 18
- TailwindCSS
- Framer Motion
- TypeScript
- React Icons

## License

MIT License - feel free to use this template for your own portfolio!

## Deployment on Vercel

### Prerequisites
- A Vercel account
- A MySQL database (e.g., PlanetScale, Railway, or any MySQL-compatible database)
- Git repository with your code

### Deployment Steps

1. **Prepare Your Database**
   - Set up a MySQL database in your preferred provider
   - Get your database connection URL
   - Make sure your database is accessible from Vercel's servers

2. **Deploy to Vercel**
   - Push your code to GitHub
   - Import your repository in Vercel
   - Configure the following environment variables in Vercel:
     - `DATABASE_URL`: Your MySQL database connection string
     - `NEXT_PUBLIC_SITE_URL`: Your Vercel deployment URL

3. **Environment Variables**
   Create a `.env` file locally with the following variables:
   ```
   DATABASE_URL="mysql://user:password@host:port/database"
   NEXT_PUBLIC_SITE_URL="https://your-site-url.vercel.app"
   ```

4. **Local Development**
   ```bash
   # Install dependencies
   npm install

   # Run development server
   npm run dev

   # Build for production
   npm run build
   ```

5. **Database Migrations**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run migrations
   npx prisma migrate deploy
   ```

### Important Notes
- Never commit your `.env` file or `DB_URL.txt`
- Always use environment variables for sensitive information
- Make sure your database connection string is properly formatted
- Test your database connection before deploying 
