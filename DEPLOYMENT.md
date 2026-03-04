# 🚀 Deployment Guide

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Deploy to your platform
```

## Deployment Platforms

### 1. Netlify (Recommended - Free & Easy)

**Option A: Automatic Deployment**
```bash
# Push to GitHub, then:
# 1. Go to netlify.com
# 2. Click "New site from Git"
# 3. Select your GitHub repo
# 4. Build command: npm run build
# 5. Publish directory: dist
# 6. Deploy!
```

**Option B: Manual Deployment**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### 2. Vercel (Free & Easy)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or connect to GitHub for auto-deploy:
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. It auto-detects Vite settings
# 4. Deploy!
```

### 3. GitHub Pages

```bash
# 1. Update package.json with your repo name
# "homepage": "https://username.github.io/jenkins-learning"

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# 4. Deploy
npm run deploy

# 5. Go to GitHub repo settings → Pages → Enable GitHub Pages
```

### 4. Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build and run Docker
docker build -t jenkins-learning .
docker run -p 80:80 jenkins-learning
```

### 5. AWS S3 + CloudFront

```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name/

# Create CloudFront distribution pointing to S3
# (Use AWS Console or CLI)
```

### 6. DigitalOcean App Platform

1. Push to GitHub
2. Go to DigitalOcean App Platform
3. Click "Create App"
4. Select your GitHub repo
5. Set build command: `npm run build`
6. Set output directory: `dist`
7. Deploy!

## Environment Configuration

### Production Environment Variables

Create `.env.production`:
```
VITE_APP_TITLE=Jenkins Learning Platform
VITE_API_URL=https://api.yourdomain.com
```

### Custom Domain

**Netlify:**
- Site settings → Domain management → Add custom domain

**Vercel:**
- Project settings → Domains → Add domain

**GitHub Pages:**
- Repository settings → Pages → Custom domain

## Performance Optimization

### Pre-deployment Checklist

```bash
# 1. Build and check bundle size
npm run build
# Check dist/ folder size

# 2. Test production build locally
npm run preview

# 3. Run lighthouse (if you add it)
npm install -g lighthouse
lighthouse http://localhost:4173
```

### Caching Strategy

Add to `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})
```

### Compress Assets

Most deployment platforms compress assets automatically. For manual:

```bash
npm install -g brotli
brotli dist/**/*.js
```

## SEO Optimization

Update `index.html`:
```html
<meta name="description" content="Master Jenkins from zero to expert with interactive lessons, labs, and quizzes">
<meta name="keywords" content="Jenkins, CI/CD, DevOps, Learning Platform">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="Jenkins Learning Platform">
<meta property="og:description" content="Comprehensive Jenkins learning platform">
<meta property="og:image" content="your-image-url">
```

## Monitoring & Analytics

### Add Google Analytics

1. Get GA ID from Google Analytics
2. Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Add Error Tracking (Sentry)

```bash
npm install @sentry/react

# In src/main.tsx:
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR-SENTRY-DSN",
  environment: "production"
});
```

## CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: 'deploy --prod --dir=dist'
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3001
```

### Deploy Fails
- Check console output for errors
- Verify all dependencies in package.json
- Ensure build artifacts in dist/ folder
- Check platform-specific build settings

## Monitoring Deployed Site

### Health Checks
```bash
# Test deployed site
curl https://your-site.com

# Check status code (should be 200)
curl -I https://your-site.com
```

### Performance Monitoring
- Use Netlify/Vercel analytics dashboards
- Monitor Core Web Vitals
- Track error rates

## Scaling

As traffic grows:
1. Use CDN (automatic on Netlify/Vercel)
2. Enable caching headers
3. Monitor and optimize performance
4. Consider upgrading plan if needed

## Rollback

If deployment has issues:

**Netlify/Vercel:**
- Go to Deployments
- Click "Rollback" on previous version

**Manual:**
```bash
# Deploy specific commit
git checkout <commit-hash>
npm run build
npm run deploy
```

## Support

For issues:
- Check platform documentation
- Review build logs
- Test locally with `npm run preview`
- Check GitHub issues

---

**Your site is now live! 🎉**

Share your learning platform and help others master Jenkins!
