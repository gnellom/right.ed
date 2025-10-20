# Vercel Deployment Guide for right.ed

## Project Structure
```
landingpageupdated/
├── public/
│   └── app.html          # Dashboard (static HTML)
├── src/                  # React landing page
├── vercel.json          # Vercel configuration
├── vite.config.ts       # Build configuration
└── package.json         # Dependencies
```

## Deployment Steps

### 1. Prerequisites
- Node.js 18+ installed
- Vercel CLI installed: `npm i -g vercel`
- GitHub account (recommended)

### 2. Local Testing
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test locally (optional)
npx serve build
```

### 3. Deploy to Vercel

#### Option A: Vercel CLI
```bash
# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name: right-ed-landing
# - Directory: ./
# - Override settings? No
```

#### Option B: GitHub Integration
1. Push code to GitHub repository
2. Connect repository to Vercel at vercel.com
3. Vercel will auto-deploy on every push

### 4. Configuration

The project is configured with:
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Static Files**: `public/app.html` → `/app.html`
- **React App**: Root path `/`

### 5. URLs After Deployment
- **Landing Page**: `https://your-project.vercel.app/`
- **Dashboard**: `https://your-project.vercel.app/app.html`

### 6. Environment Variables (if needed)
If your dashboard needs environment variables:
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add any required variables (e.g., API endpoints)

### 7. Custom Domain (optional)
1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Configure DNS as instructed

## Troubleshooting

### Build Issues
- Ensure all dependencies are in `package.json`
- Check that `public/app.html` exists
- Verify Vite configuration

### Routing Issues
- The `vercel.json` handles routing for `/app.html`
- React Router is not needed for this setup

### Static Assets
- All files in `public/` are copied to build root
- CSS and JS are bundled by Vite

## File Structure After Build
```
build/
├── index.html           # React landing page
├── app.html            # Dashboard (copied from public/)
├── assets/             # Bundled CSS/JS
└── ...                 # Other static assets
```
