# Portfolio Website

A personal portfolio website with projects and achievements that can be accessed from any device using cloud storage.

## Features

- **Cross-device data persistence**: Projects and achievements are stored in the cloud and accessible from any device
- **Offline support**: Data is cached locally for offline access
- **Secure access**: Passcode-protected adding and deleting of content
- **Responsive design**: Works on desktop and mobile devices
- **No server required**: Uses JSONBin.io for cloud storage

## Quick Start

### Option 1: Use JSONBin.io (Recommended - 5 minutes)

1. **Follow the setup guide**: See `SETUP.md` for detailed instructions
2. **Open the website**: Simply open any HTML file in your browser
3. **Add content**: Use the passcodes to add projects and achievements

### Option 2: Local Only

1. **Open the website**: Open any HTML file in your browser
2. **Add content**: Data will be stored locally on each device
3. **Manual sync**: Export/import JSON files to share data between devices

## File Structure

```
web2/
├── data/                 # JSON data files (for manual updates)
│   ├── projects.json
│   └── achievements.json
├── api.js               # API functions for data handling
├── project.html         # Projects page
├── project.js           # Projects functionality
├── achievement.html     # Achievements page
├── achievement.js       # Achievements functionality
├── profile.html         # Profile page
├── index.html           # Home page
├── style.css            # Styling
├── SETUP.md             # Setup instructions for JSONBin.io
└── README.md            # This file
```

## How It Works

1. **Cloud Storage**: Data is stored on JSONBin.io servers (free service)
2. **Local Cache**: Data is also cached in localStorage for offline access
3. **Real-time Sync**: Changes are immediately available across all devices
4. **Fallback System**: If cloud is unavailable, it uses localStorage

## Security

- **Passcode Protection**: Adding and deleting content requires a passcode
- **Default Passcodes**:
  - Add: `add`
  - Delete: `delete`

## Deployment Options

### Static Hosting (Recommended)
- **GitHub Pages**: Free hosting for static websites
- **Netlify**: Free hosting with drag-and-drop deployment
- **Vercel**: Free hosting with automatic deployments
- **Firebase Hosting**: Google's free hosting service

### Setup for GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

## Customization

- **Change Passcodes**: Modify the passcode checks in `project.js` and `achievement.js`
- **Styling**: Edit `style.css` to customize the appearance
- **Content**: Update the HTML files to change static content
- **Data Storage**: Follow `SETUP.md` to set up JSONBin.io for cross-device sync

## Troubleshooting

- **Data not syncing**: Check `SETUP.md` for JSONBin.io configuration
- **Passcodes not working**: Verify the passcode values in the JavaScript files
- **Styling issues**: Check that `style.css` is in the same directory as HTML files
- **Console errors**: Check browser console for detailed error messages

## Support

- **Setup issues**: See `SETUP.md` for detailed instructions
- **JSONBin.io help**: Visit [jsonbin.io](https://jsonbin.io) for documentation
- **Browser console**: Press F12 to see error messages and debug information

## Benefits of This Approach

✅ **No server setup required**  
✅ **Free cloud storage**  
✅ **Cross-device synchronization**  
✅ **Offline capability**  
✅ **Easy deployment**  
✅ **Secure data storage**  
✅ **Real-time updates** 