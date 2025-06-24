# Setup Guide for Cross-Device Data Storage

## How It Works

This solution works exactly as you requested! Here's the workflow:

1. **Add/Remove Content**: When you add or remove projects/achievements, a JSON file is automatically downloaded
2. **Upload to Hosted Folder**: You upload the downloaded JSON file to your hosted `data/` folder
3. **Instant Sync**: Since it's hosted, everyone sees the same data instantly

## Quick Start

### Step 1: Test Locally
1. Open `project.html` or `achievement.html` in your browser
2. Add some content using passcode `add`
3. Notice that a JSON file gets downloaded automatically
4. The data is stored locally and works immediately

### Step 2: Deploy to Hosting
1. Upload your entire `web2` folder to any static hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting
   - Any web server

2. Your website will be accessible at your hosting URL

### Step 3: Sync Across Devices
1. When you add/remove content, a JSON file downloads automatically
2. Upload the downloaded JSON file to your hosted `data/` folder
3. All devices will see the updated data instantly

## Detailed Workflow

### Adding Content
1. Fill out the form and click "Add Project/Achievement"
2. A JSON file (e.g., `projects.json`) downloads automatically
3. Upload this file to your hosted `data/` folder
4. All visitors will see the new content

### Removing Content
1. Click the delete button and enter passcode `delete`
2. A JSON file downloads with the updated data
3. Upload this file to your hosted `data/` folder
4. All visitors will see the updated content

### Manual Export/Import
- **Export**: Click "📤 Export" to download current data
- **Import**: Click "📥 Import" to load data from a JSON file
- **Refresh**: Click "🔄 Refresh" to load latest data from hosted files

## File Structure

```
web2/
├── data/                 # Your hosted JSON files
│   ├── projects.json     # Upload exported projects here
│   └── achievements.json # Upload exported achievements here
├── api.js               # Data handling functions
├── project.html         # Projects page with sync controls
├── project.js           # Projects functionality
├── achievement.html     # Achievements page with sync controls
├── achievement.js       # Achievements functionality
└── ... (other files)
```

## Deployment Options

### GitHub Pages (Recommended)
1. Create a GitHub repository
2. Upload your `web2` folder contents
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be at `https://username.github.io/repository-name`

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `web2` folder
3. Your site is live instantly

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your repository
3. Deploy automatically

## Security

- **Passcode Protection**: Adding and deleting requires passcodes
- **Default Passcodes**:
  - Add: `add`
  - Delete: `delete`
- **Change Passcodes**: Edit the values in `project.js` and `achievement.js`

## Benefits

✅ **Exactly what you wanted** - JSON files get modified  
✅ **Hosted sync** - Same data everywhere instantly  
✅ **No server required** - Works with static hosting  
✅ **Simple workflow** - Add content → Download JSON → Upload to hosted folder  
✅ **Offline capability** - Works without internet  
✅ **Manual control** - You control when to sync  

## Troubleshooting

### JSON file not downloading?
- Check browser console for errors (F12)
- Make sure JavaScript is enabled
- Try refreshing the page

### Data not syncing between devices?
- Make sure you uploaded the JSON file to the hosted `data/` folder
- Check that the file path is correct: `yourdomain.com/data/projects.json`
- Try clicking "🔄 Refresh" to reload from hosted files

### Passcodes not working?
- Default passcodes are: `add` for adding, `delete` for deleting
- You can change these in the JavaScript files

### Want to backup your data?
- Use the export buttons to download JSON files
- Keep these files as backups
- You can import them anytime

## Example Workflow

1. **Add a project**: Fill form → Click "Add Project" → `projects.json` downloads
2. **Upload to hosting**: Upload `projects.json` to your hosted `data/` folder
3. **Check other devices**: Open your website on any device → See the new project
4. **Delete a project**: Click delete → Enter passcode → `projects.json` downloads
5. **Upload again**: Upload the new `projects.json` → All devices updated

This is exactly the workflow you wanted - JSON files get modified and everything stays in sync because it's hosted! 