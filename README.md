# 📱 Mobile News Reader Web App

A responsive mobile web application that fetches and displays the latest news from **Al Jazeera** and **Al Arabiya** using their RSS feeds.

![News Reader App](https://img.shields.io/badge/Platform-Web-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)

## ✨ Features

- **📱 Mobile-First Design**: Optimized for smartphones and tablets
- **📰 Dual News Sources**: Real-time news from Al Jazeera and Al Arabiya
- **🔍 Source Filtering**: Switch between sources or view all news
- **🔄 Auto-Refresh**: Updates every 5 minutes automatically
- **🎨 Modern UI**: Clean, card-based interface with smooth animations
- **⚡ Fast Performance**: Pure HTML/CSS/JS with no heavy frameworks
- **🌐 CORS Handling**: Built-in proxy to bypass cross-origin restrictions
- **📱 PWA Ready**: Can be installed as a Progressive Web App

## 🚀 Live Demo

**[Click here to view the live demo](https://thaibanai.github.io/News/)** - The app is deployed and live on GitHub Pages!

## 📸 Screenshots

*(Add screenshots here)*

## 🛠️ Installation

### Option 1: Direct File (Simplest)
```bash
# Clone the repository
git clone https://github.com/yourusername/news-reader-app.git

# Open index.html in any browser
open index.html
```

### Option 2: Local Server
```bash
# Navigate to project directory
cd news-reader-app

# Install dependencies (optional)
npm install

# Start the server
npm start

# Open http://localhost:3000 in your browser
```

### Option 3: Deploy to GitHub Pages
1. Push to GitHub repository
2. Go to Repository Settings → Pages
3. Select "main" branch and "/ (root)" folder
4. Save - Your app will be available at `https://yourusername.github.io/news-reader-app`

## 📖 Usage

1. **Open the app** in your mobile or desktop browser
2. **Wait for loading** - News will automatically fetch from both sources
3. **Filter news** using the buttons:
   - 🔵 **Al Jazeera**: International news coverage
   - 🔴 **Al Arabiya**: Middle Eastern focus
   - 🌐 **All News**: Combined view from both sources
4. **Refresh manually** using the refresh button
5. **Click any news card** to read the full article

## 🏗️ Project Structure

```
news-reader-app/
├── index.html          # Main application file
├── README.md          # This documentation
├── server.js          # Node.js server for local testing
├── package.json       # Node.js dependencies
└── .gitignore        # Git ignore rules
```

## 🔧 Technical Details

### RSS Feeds Used
- **Al Jazeera**: `https://www.aljazeera.com/xml/rss/all.xml`
- **Al Arabiya**: `https://www.alarabiya.net/ar/feed`

### Technologies
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **RSS Parsing**: DOMParser API
- **CORS Proxy**: api.allorigins.win
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Icons**: Font Awesome 6
- **Responsive Design**: Mobile-first approach

### Key Functions
- `fetchNews()`: Fetches and parses RSS feeds
- `displayNews()`: Renders news cards to the DOM
- `formatDate()`: Converts dates to relative time
- `loadAllNews()`: Main function to load all news sources

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- iOS Safari 11+
- Chrome for Android 60+

## 📱 PWA Installation

This app can be installed as a Progressive Web App:

1. Open the app in Chrome/Edge
2. Click the "Install" button in the address bar
3. Or use "Add to Home Screen" on mobile

## 🔄 API & Data Sources

The app uses:
1. **Al Jazeera RSS Feed**: International news in English
2. **Al Arabiya RSS Feed**: Middle Eastern news in Arabic
3. **CORS Proxy**: To bypass browser security restrictions

## 🚧 Limitations

1. **CORS Dependency**: Requires third-party proxy for RSS feeds
2. **RSS Structure Changes**: May break if news sites change their feed format
3. **Image Availability**: Some articles may not have images
4. **Arabic Content**: Al Arabiya content is displayed in Arabic

## 🚀 Future Enhancements

- [ ] Add more news sources (BBC, CNN, etc.)
- [ ] Implement search functionality
- [ ] Add dark/light theme toggle
- [ ] Implement offline caching with Service Workers
- [ ] Add bookmarking/saving articles
- [ ] Implement push notifications
- [ ] Add language translation
- [ ] Implement user preferences

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Al Jazeera](https://www.aljazeera.com/) for their RSS feed
- [Al Arabiya](https://www.alarabiya.net/) for their RSS feed
- [AllOrigins](https://allorigins.win/) for CORS proxy
- [Font Awesome](https://fontawesome.com/) for icons
- [Unsplash](https://unsplash.com/) for fallback images

## 📞 Support

For support, please:
1. Check the [Issues](https://github.com/yourusername/news-reader-app/issues) page
2. Create a new issue if your problem isn't already reported

---

Made with ❤️ by [ThaibanAI](https://github.com/ThaibanAI) - Your AI assistant built on OpenClaw