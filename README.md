# T3 Technologies Software Solutions - Website

A premium, modern, responsive website for T3 Technologies built with pure HTML, CSS, and JavaScript.

## 📁 Files Included

1. **index.html** - Complete website with all HTML, CSS, and JavaScript embedded (All-in-One)
2. **styles.css** - Separate CSS file (for organized structure)
3. **script.js** - Separate JavaScript file (for organized structure)

## 🚀 Quick Start

### Option 1: Using the All-in-One HTML File (Recommended)
Simply open `index.html` in your web browser. No additional setup required!

```bash
# Just double-click index.html or open it in your browser
```

### Option 2: Using Separate Files
If you prefer organized file structure:

1. Create a new folder for your project
2. Copy `index.html`, `styles.css`, and `script.js` into the same folder
3. Update the `index.html` to link the external files:

Add these lines in the `<head>` section:
```html
<link rel="stylesheet" href="styles.css">
```

Add this line before closing `</body>` tag:
```html
<script src="script.js"></script>
```

Then remove the `<style>` and `<script>` tags from the HTML.

## 📋 Sections Included

✅ **Navigation** - Sticky header with dark mode toggle and mobile menu
✅ **Hero Section** - Animated background with CTA buttons and statistics
✅ **About Section** - Mission and vision statements
✅ **Services** - 16 comprehensive service cards
✅ **Why Choose Us** - 6 feature highlights
✅ **Portfolio** - 8 project showcases
✅ **Technologies** - 12 tech stack logos
✅ **Process** - 7-step development workflow
✅ **Testimonials** - 3 client reviews with star ratings
✅ **Blog** - 6 article previews
✅ **CTA Section** - Call-to-action banner
✅ **Contact** - Contact form and information
✅ **Careers** - Team recruitment section
✅ **Footer** - Links, newsletter, and copyright

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: #0A2540 (Dark Blue)
  - Secondary: #2563EB (Bright Blue)
  - Accent: #00C2A8 (Cyan)
  - Background: #F8FAFC (Light)

- **Typography**:
  - Headings: Poppins (bold, modern)
  - Body: Inter (clean, readable)

- **Effects**:
  - Glassmorphism cards with blur effects
  - Animated blob background
  - Smooth scroll behavior
  - Dark/Light mode toggle
  - Hover animations
  - Responsive gradients

## 🌓 Dark Mode

The website includes a fully functional dark mode toggle:
- Click the moon icon (🌙) in the navigation to toggle
- User preference is saved in browser localStorage
- Smooth transitions between themes

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (below 768px)

All elements adapt gracefully to different screen sizes.

## ⚡ Features

✨ **Smooth Scrolling** - All navigation links use smooth scroll behavior
✨ **Scroll Progress Bar** - Visual indicator at the top shows scroll position
✨ **Back to Top Button** - Appears when scrolling down, smoothly scrolls to top
✨ **WhatsApp Button** - Fixed floating button for direct WhatsApp contact
✨ **Animated Counters** - Statistics animate when scrolling to hero section
✨ **Gradient Effects** - Modern gradient buttons and text effects
✨ **Mobile Navigation** - Hamburger menu for mobile devices
✨ **Contact Form** - Working contact form with validation
✨ **Newsletter Signup** - Email subscription in footer
✨ **Social Media Links** - Quick access to social profiles

## 🔧 Customization

### Change Colors
Open `styles.css` and modify these values:
```css
/* Primary Colors */
#2563EB - Bright Blue
#00C2A8 - Cyan
#0A2540 - Dark Blue
#F8FAFC - Light Background
```

### Change Content
Edit text, images, and links directly in `index.html`:
- Update company name
- Change service descriptions
- Modify contact information
- Update testimonials
- Add/remove portfolio items

### Add Images
Replace emoji icons with actual images:
```html
<!-- Instead of emoji -->
<div class="service-icon">💻</div>

<!-- Use image -->
<img src="path/to/image.png" alt="Service Icon" class="service-icon">
```

## 📞 Contact Information

Update these in the contact section:
- **Phone**: +91 (555) 123-4567
- **Email**: info@t3technologies.com
- **Address**: 123 Tech Street, Innovation Hub, Delhi, India 110001
- **WhatsApp**: https://wa.me/91555123456

## 🔐 Security Notes

- Contact form currently shows an alert (connect to backend for email)
- Newsletter form shows confirmation (connect to email service)
- Links are placeholder (update with actual pages)

## 🚀 Deployment

To deploy your website:

### Option 1: Free Hosting (GitHub Pages)
1. Create a GitHub repository
2. Upload `index.html`, `styles.css`, `script.js`
3. Enable GitHub Pages in repository settings
4. Your site is live!

### Option 2: Netlify
1. Drag and drop your folder to Netlify.com
2. Automatic deployment
3. Get a free domain

### Option 3: Vercel
1. Connect your GitHub repository
2. Deploy automatically
3. Free hosting with custom domain

### Option 4: Traditional Hosting
1. Upload files via FTP to your hosting provider
2. Access via your domain
3. No build process needed

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags and viewport configuration
- Proper heading hierarchy
- Image alt text
- Fast loading (minimal dependencies)
- Mobile-first design

Add more meta tags to `<head>`:
```html
<meta name="description" content="Your company description">
<meta name="keywords" content="web development, software, IT services">
<meta name="author" content="T3 Technologies">
```

## 🐛 Browser Compatibility

Works on:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

None! This website uses:
- Pure HTML
- Pure CSS (no preprocessor needed)
- Pure JavaScript (no frameworks)

No npm packages, no build tools, no dependencies to install.

## 📄 License

Free to use and modify for personal or commercial projects.

## 💡 Tips for Best Results

1. **Mobile First**: Test on mobile devices during customization
2. **Images**: Use optimized images for better performance
3. **Content**: Keep text concise and engaging
4. **Colors**: Maintain the color scheme for brand consistency
5. **Links**: Update all placeholder links to real pages
6. **Forms**: Connect to backend for actual form submission
7. **Analytics**: Add Google Analytics for tracking

## 🎓 Learning Resources

To modify and improve this website, learn:
- HTML basics for structure
- CSS for styling and animations
- JavaScript for interactivity
- CSS Grid/Flexbox for layout
- Media queries for responsive design

## 📞 Support

For issues or questions:
1. Check the code comments in HTML, CSS, and JS
2. Refer to web development tutorials
3. Test in browser developer tools
4. Validate HTML with W3C validator

---

**Happy coding! Your T3 Technologies website is ready to go! 🚀**
