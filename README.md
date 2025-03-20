# PhantomTech Landing Page

A modern landing page for PhantomTech built with Next.js and deployed as a static site.

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the site for production:

```bash
npm run build
```

This will generate a static export in the `out` directory that can be deployed to any static web hosting service.

## Deploying the Static Site

The static site is exported to the `out` directory and can be deployed to any web server or static hosting service:

### Option 1: Deploy to any standard web server

1. Copy all files from the `out` directory to your web server's root directory
2. No special server configuration is needed since this is a fully static site

### Option 2: Deploy to GitHub Pages

1. Push the `out` directory to a GitHub repository
2. Enable GitHub Pages in the repository settings, using the root of the repository as the source

### Option 3: Deploy to Netlify, Vercel, or similar services

1. Connect your repository to the hosting service
2. Set the build command to `npm run build`
3. Set the publish directory to `out`

## Features

- Responsive design for all device sizes
- Interactive animations with Framer Motion
- Mobile-friendly with optimized navigation
- Fast loading static assets

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript
