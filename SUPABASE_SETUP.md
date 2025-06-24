# Supabase Setup Guide (5 minutes)

## What This Solves

✅ **No file downloads/uploads** - Data saves automatically  
✅ **Works across all devices** - Same data everywhere instantly  
✅ **No manual JSON management** - Everything is automatic  
✅ **Free forever** - Supabase free tier is generous  
✅ **Keeps your UI** - Same design, better backend  

## Quick Setup

### Step 1: Create Supabase Account
1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign up with GitHub (free)
4. Create a new project

### Step 2: Create Database Tables
1. In your Supabase project, go to **SQL Editor**
2. Run these commands:

```sql
-- Create projects table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  link TEXT NOT NULL,
  desc TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create achievements table  
CREATE TABLE achievements (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  desc TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Step 3: Get Your API Keys
1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://abc123.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

### Step 4: Update Your Code
1. Open `api.js`
2. Replace these lines:

```javascript
// Replace these with your actual values from Supabase
this.SUPABASE_URL = 'https://your-project.supabase.co'; // Your Project URL
this.SUPABASE_ANON_KEY = 'your-anon-key'; // Your anon public key
```

### Step 5: Test It
1. Open your website
2. Add a project/achievement
3. Check console - should say "Saved to Supabase"
4. Open on another device - same data!

## How It Works

- **Add content** → Automatically saved to cloud
- **Refresh page** → Data loads from cloud (no reset!)
- **Different device** → Same data instantly
- **No file management** → Everything automatic

## Benefits

- **No more file downloads** when adding content
- **No more file uploads** to sync data
- **No more data loss** when refreshing
- **Works offline** - falls back to localStorage
- **Free forever** - Supabase free tier is generous

## Troubleshooting

### "Supabase not initialized" error?
- Check your URL and API key are correct
- Make sure you created the database tables
- Check browser console for detailed errors

### Data not syncing between devices?
- Verify your Supabase project is active
- Check that the tables were created successfully
- Make sure you're using the correct API keys

### Want to backup your data?
- Use the export buttons to download JSON files
- Data is also safely stored in Supabase cloud

## Alternative: Local Only

If you don't want to set up Supabase:
- The system will automatically fall back to localStorage
- Data will work locally but won't sync across devices
- You can still use export/import for manual sync

## Need Help?

- Check browser console (F12) for error messages
- Verify your Supabase project is active
- Make sure all API keys are correct
- Try refreshing the page after setup

This solution gives you exactly what you wanted - server-side storage that works like JSON but can be modified automatically! 