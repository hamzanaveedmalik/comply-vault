# Quick Setup Guide: Staging Environment with Preview Deployments

## Prerequisites
- Vercel account connected to your GitHub repo
- Domain access for DNS configuration

## Step-by-Step Setup

### 1. Create Staging Branch
```bash
git checkout -b staging
git push origin staging
```

### 2. Configure Vercel Project

#### A. Set Production Branch
1. Go to Vercel Dashboard → Your Project → Settings → Git
2. Set **Production Branch** to `main`
3. Save

#### B. Add Staging Domain
1. Go to Settings → Domains
2. Click "Add Domain"
3. Enter: `staging.complyvault.co`
4. Follow DNS setup instructions (add CNAME record)

#### C. Assign Domain to Staging Branch
**Method 1: Via Vercel Dashboard** (if available)
- In domain settings, look for "Branch" or "Assign to Branch"
- Select `staging` branch

**Method 2: Via Vercel CLI**
```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Login
vercel login

# Link project (if not already linked)
vercel link

# Assign domain to staging branch
vercel domains add staging.complyvault.co
# Then in Vercel dashboard, assign to staging branch
```

**Method 3: Manual Promotion** (fallback)
- Each time you deploy staging, manually promote it to `staging.complyvault.co`
- Go to Deployments → Find staging deployment → "Promote to Production" → Select `staging.complyvault.co`

### 3. Set Environment Variables

Go to **Settings → Environment Variables**:

**For Production (main branch):**
```
NEXT_PUBLIC_APP_URL = https://app.complyvault.co
Environment: Production ✅
```

**For Preview/Staging (staging branch):**
```
NEXT_PUBLIC_APP_URL = https://app-staging.complyvault.co
Environment: Preview ✅
```

### 4. Test Deployment

```bash
# Make a test change
git checkout staging
echo "# Test" >> README.md
git commit -m "Test staging deployment"
git push origin staging
```

Check Vercel dashboard - staging should deploy automatically.

## URLs After Setup

- **Production**: `https://www.complyvault.co` (from `main` branch)
- **Staging**: `https://staging.complyvault.co` (from `staging` branch)
- **Feature branches**: Auto-generated preview URLs (e.g., `feature-xyz-abc123.vercel.app`)

## Workflow

```bash
# 1. Develop on feature branch
git checkout -b feature/new-feature
# ... make changes ...
git push origin feature/new-feature
# → Gets preview URL automatically

# 2. Merge to staging for testing
git checkout staging
git merge feature/new-feature
git push origin staging
# → Deploys to staging.complyvault.co

# 3. When ready, merge to production
git checkout main
git merge staging
git push origin main
# → Deploys to www.complyvault.co
```

## Troubleshooting

### Staging domain not working?
- Check DNS: `staging.complyvault.co` should point to Vercel
- Verify domain is assigned to staging branch in Vercel dashboard
- Wait a few minutes for DNS propagation

### Environment variables not working?
- Make sure variables are set for "Preview" environment
- Redeploy staging branch after adding variables
- Check variable names match exactly (case-sensitive)

### Staging shows production content?
- Verify `NEXT_PUBLIC_APP_URL` is set correctly for Preview environment
- Check that staging branch is deploying (not main)
- Clear browser cache
