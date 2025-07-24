# AI Framework

A Jekyll-based web application that provides an interactive framework for visualising AI considerations across different organisational layers and value chain stages. The framework helps organisations understand cost, risk, and ROI considerations on their AI journey.

## Overview

This project creates an interactive grid-based visualisation that displays AI-related considerations organised by:

- **Organisational Layers** (vertical): Corporate Governance, Business, Technology Governance, Technology
- **Value Chain Stages** (horizontal): Foundation Model, Applications, Usage, Stakeholders
- **Perspective Filters**: All, Product, Operations, People

## Project Structure

```
ai-framework/
├── _config.yml                 # Jekyll configuration
├── _data/
│   └── framework.yml           # Framework data structure and content
├── _includes/
│   ├── framework.html          # Main framework template
│   ├── header.html             # Site header
│   ├── footer.html             # Site footer
│   └── head.html               # HTML head section
├── _layouts/
│   ├── default.html            # Base layout
│   └── page.html               # Page layout
├── assets/
│   └── css/
│       ├── input.css           # Tailwind CSS input file
│       └── tailwind.css        # Generated CSS output
├── pages/                      # Site pages
├── package.json                # Node.js dependencies and scripts
├── Gemfile                     # Ruby dependencies
└── tailwind.config.js          # Tailwind CSS configuration
```

## Technology Stack

- **Jekyll** - Static site generator
- **Ruby** - Jekyll runtime
- **Node.js** - Build tools and dependencies
- **Tailwind CSS** - Utility-first CSS framework
- **YAML** - Data configuration format
- **Liquid** - Template engine

## Prerequisites

- Ruby (version 2.7+)
- Node.js (version 16+)
- Bundler gem (`gem install bundler`)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-framework
   ```

2. **Install Ruby dependencies**
   ```bash
   bundle install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

## Development

### Running the Development Server

Start the development environment with live reloading:

```bash
npm run dev
```

This command:
- Starts Tailwind CSS in watch mode to rebuild styles automatically
- Runs Jekyll with live reload enabled
- Serves the site at `http://localhost:4000`

### Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build production-ready site
- `npm run build-css` - Build CSS in watch mode
- `npm run build-css-prod` - Build minified CSS for production

## Build Process

### Development Build

```bash
npm run dev
```

1. **Tailwind CSS Processing**: Processes `assets/css/input.css` and generates `assets/css/tailwind.css`
2. **Jekyll Build**: Compiles Jekyll site with live reload
3. **Concurrent Execution**: Both processes run simultaneously with file watching

### Production Build

```bash
npm run build
```

1. **CSS Minification**: Builds and minifies Tailwind CSS
2. **Jekyll Production Build**: Generates optimized static site in `_site/` directory

## Framework Configuration

The framework content and structure are defined in `_data/framework.yml`. This file contains:

### Value Chain Definition

```yaml
value_chain:
  foundation_model: &foundation_model
    name: 'Foundation Model'
    column: 1
  # ... additional stages
```

- Defines the horizontal columns (1-4 from left to right)
- Uses YAML anchors for reusability throughout the file

### Layer Structure

```yaml
layers:
  - title: Corporate Governance
    class: corporate-governance
    considerations:
      - title: Sustainability/ Responsibility
        value_chain: *foundation_model
        value_chain_end: *stakeholders
        type: all
        path: /considerations/sustainability-responsibility
```

Each layer contains:
- **title**: Display name for the layer
- **class**: CSS class for styling
- **considerations**: Array of items within the layer

### Consideration Properties

Each consideration has:
- **title**: Display text
- **value_chain**: Starting column (references anchor)
- **value_chain_end**: Ending column (optional, for spanning)
- **type**: Filter category (`all`, `product`, `operations`, `people`)
- **path** Path to page detail 

## Framework Template Engine

The `_includes/framework.html` template processes the YAML data:

### Grid System

- Uses Tailwind CSS Grid with 5 columns (1 for layer titles + 4 for value chain)
- Dynamically positions considerations based on `column` values
- Supports spanning multiple columns using `col-start-X col-end-Y` classes

### Filtering System

JavaScript filtering system allows users to:
- View all considerations (`all`)
- Filter by perspective (`product`, `operations`, `people`)
- Toggle filters with visual button states

### Responsive Design

- Built with Tailwind CSS utilities
- Supports dark mode with `dark:` prefixes
- Mobile-responsive grid layout

## Customization

### Adding New Layers

1. Add a new layer object to `framework.yml`:
   ```yaml
   - title: New Layer
     class: new-layer
     considerations:
       - title: New Consideration
         value_chain: *usage
         type: operations
   ```

2. Add CSS styling for the new layer class in your CSS file

### Styling Customization

- Modify `assets/css/input.css` for custom Tailwind styles
- Update `tailwind.config.js` for theme configuration
- Layer-specific styles can be added using the `class` property

## Deployment

### Static Site Generation

```bash
npm run build
```

The built site will be in the `_site/` directory, ready for deployment to any static hosting service.

## File Watching and Live Reload

During development:
- **Tailwind CSS**: Watches `assets/css/input.css` and rebuilds on changes
- **Jekyll**: Watches all Jekyll files and rebuilds on changes
- **Browser**: Automatically refreshes when files change

## Performance Considerations

- CSS is minified in production builds
- Jekyll optimizes HTML output
- Static site generation provides fast loading times
- Tailwind CSS purges unused styles in production

## Browser Compatibility

- Modern browsers with CSS Grid support
- JavaScript ES6+ features
- Responsive design for mobile devices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes to `_data/framework.yml` or templates
4. Test with `npm run dev`
5. Build with `npm run build` to verify production build
6. Submit a pull request

## License

[Add your license information here]

## Support

[Add support/contact information here]