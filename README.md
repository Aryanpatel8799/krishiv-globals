# Krishiv Globals - Corporate Website

A professional, modern, and fully responsive corporate website for "Krishiv Globals" built with React.js and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, white background with green highlights reflecting nature and sustainability
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Comprehensive meta tags and semantic HTML structure
- **Professional UI**: Premium layout with smooth hover states and modern typography

## 🚀 Tech Stack

- **Frontend Framework**: React.js 19
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📱 Pages & Sections

### 1. Home Page
- Hero section with company tagline
- Feature highlights (USP) with 4 animated cards
- Statistics section
- Call-to-action sections

### 2. About Us
- Company overview and story
- Core values
- Company statistics

### 3. Products Page
- Product showcase (Moringa Powder, Leaves, Oil)
- Product benefits
- Quality features

### 4. Product Detail Pages
- Detailed product information
- Nutritional profiles
- Wellness benefits
- Applications and certifications

### 5. Contact Us
- Contact form with validation
- Business information
- Contact details

## 🎨 Design System

- **Primary Colors**: Green (#2e7d32, #4caf50)
- **Typography**: Inter, Poppins, Nunito
- **Spacing**: Consistent section padding and margins
- **Components**: Reusable button styles and card components

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd krishiv-globals
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx     # Navigation component
│   └── Footer.jsx     # Footer component
├── pages/              # Page components
│   ├── Home.jsx       # Home page
│   ├── About.jsx      # About page
│   ├── Products.jsx   # Products listing
│   ├── ProductDetail.jsx # Individual product page
│   └── Contact.jsx    # Contact page
├── App.jsx            # Main app component with routing
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Key Components

### Navbar
- Sticky navigation with smooth scroll
- Mobile-responsive menu
- Active page indicators

### Footer
- Company information
- Quick navigation links
- Social media integration
- Newsletter signup

### Animations
- Fade-in effects on scroll
- Staggered animations for lists
- Smooth hover transitions
- Loading states

## 🌐 Deployment

The website is built with Vite and can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Configure in repository settings
- **AWS S3**: Upload build folder to S3 bucket

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#4caf50',  // Main green
    600: '#2e7d32',  // Darker green
  }
}
```

### Typography
Font families are configured in `tailwind.config.js` and imported in `index.css`.

### Animations
Animation variants are defined in `tailwind.config.js` and used throughout components.

## 📞 Contact Information

- **Address**: Plot no 40A Bhandara Road, opposite Lakadganj Police station, Lakadganj, Nagpur 440008
- **Phone**: +91 9420255477
- **Email**: krishivglobal@gmail.com

## 📄 License

This project is proprietary to Krishiv Globals.

## 🤝 Contributing

For internal development and updates, please follow the established coding standards and component structure.

---

Built with ❤️ for Krishiv Globals - Your Partner in Global Wellness Trade
# krishiv-globals
