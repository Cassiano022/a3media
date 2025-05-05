# A3 Media Landing Page Templates

This project replicates two landing page templates using Astro and TinaCMS. These templates are based on:

1. **Template 1**: Flow Empower - https://getflowempower.com/ps/pscollins01
2. **Template 2**: Glucose Control Guide - https://glucosecontrolguide.com/fb/sgs/vsl3/prn-ca1/h1l1/

## Project Structure

- `src/components/`: Contains the Astro components for each template
- `src/pages/`: Contains the dynamic routes for generating pages using data from TinaCMS
- `src/layouts/`: Contains the main layout used by all pages
- `tina/`: TinaCMS configuration
- `content/`: (Generated) Contains the markdown files with content for each page
- `public/`: Static assets and placeholder images
- `scripts/`: Utility scripts for generating content

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install 
# or
yarn
```

3. Generate sample content:

```bash
node scripts/generate-content.js 10
```

This will create 10 pages for each template with unique content generated using faker-js.

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start both Astro and TinaCMS in development mode. Visit http://localhost:4321 to see the site, and http://localhost:4321/admin for the TinaCMS admin interface.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Features

- Two landing page templates matching the reference pages
- Dynamic page generation using TinaCMS as the content source
- Faker-js integration for generating unique content
- Responsive design for all screen sizes
- Clean URL structure following the required pattern:
  - Template 1: `/paginatemplate1/{id}`
  - Template 2: `/paginatemplate2/{id}`

## TinaCMS Integration

This project uses TinaCMS for content management with two collections:

1. **Empower Template**: For "Flow Empower" style pages
2. **Glucose Template**: For "Glucose Control Guide" style pages

You can create, edit, and manage content through the TinaCMS admin interface at `/admin`.

## Customizing Content

To customize content:

1. Open the TinaCMS admin interface
2. Navigate to the collection you want to edit
3. Create a new document or edit an existing one
4. Save your changes
5. The site will automatically update with the new content

## Generating More Pages

To generate more pages with fake content:

```bash
node scripts/generate-content.js <number>
```

Replace `<number>` with the number of pages you want to generate for each template.

## Technology Stack

- [Astro](https://astro.build/) - Fast, modern static site generator
- [TinaCMS](https://tina.io/) - Headless content management system
- [Faker-js](https://fakerjs.dev/) - Generate fake data for testing and development