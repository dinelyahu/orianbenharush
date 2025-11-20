
#  ORIAN BEN HARUSH – Bridal & Evening Dresses  
Premium Fashion Website | Fully Responsive | AWS Deployed


---

## 📌 Overview
This project is a full, production-ready website designed and developed for **Orian Ben Harush**, a luxury bridal and evening gown designer.  
The website provides a clean, elegant, high-end user experience across all devices with:

- Fully responsive layouts  
- High-resolution galleries  
- Dynamic language switching (HE/EN)  
- Accessibility features (WCAG 2.1 AA)  
- Optimized assets (WebP, compressed images, lazy loading)  
- AWS deployment with S3 + CloudFront + Route 53  
- Integrated analytics and marketing pixels  
- Smooth transitions, animations, and preloader  

---

##  Key Features
###  **Modern & Elegant UI/UX**
- Minimalistic luxury brand layout  
- Smooth animations and page transitions  
- Custom background textures  
- Mobile-optimized gallery cards  
- High-quality photography and design consistency  

### 📱 **Fully Responsive Design**
- Works perfectly on all screens  
- Mobile layout is entirely custom  
- Optimized gallery scrolling & transitions  

### 🌐 **Multi-Language System (HE/EN)**
Custom-built translation engine with:
- Language toggle  
- Automatic text replacement via `data-key`  
- JSON-based dictionary in `lang.js`  

### ♿ **Accessibility (A11y)**
- High contrast mode  
- Font increase/decrease  
- Bold text  
- Highlighted links  
- Disable animations  
- Monochrome mode  
- Accessibility floating button  
(All implemented in `accessibility.js`)

###  **Dynamic Photo Galleries**
- Full-screen gallery mode  
- Smooth swiping  
- Lazy loading  
- Per-collection galleries  
(Implemented in `gallery.js`)

### 📊 **Analytics & Marketing**
Integrated with:
- Meta Pixel  
- TikTok Pixel  
- Google Analytics GA4  

### ☁️ **AWS Deployment**
- **S3** (static website hosting)  
- **CloudFront** (global CDN)  
- **Route 53** (domain & SSL)  
- **Automatic caching**  
- **WebP images for speed**  

---

## 📸 Screenshots

### 🏠 Home
![Home](REPLACE_WITH_SCREENSHOT_1)

### 👰 Bridal Collection
![Bridal](REPLACE_WITH_SCREENSHOT_2)

### ✨ Evening Dresses
![Evening](REPLACE_WITH_SCREENSHOT_3)

### 🧵 About Page
![About](REPLACE_WITH_SCREENSHOT_4)

### ✉️ Contact Page
![Contact](REPLACE_WITH_SCREENSHOT_5)

---

## 🎞 GIF – Gallery Interaction
![Gallery GIF](REPLACE_WITH_GIF_PATH)

---

## 📂 Project Structure

```
orianbenharush/
│
├── css/
│   ├── global.css
│   ├── gallery.css
│   ├── collections.css
│   ├── style_about.css
│   ├── style_contact.css
│   ├── doc-style.css
│   ├── style_sheet.css
│   └── style_sheet.min.css
│
├── js/
│   ├── script.js
│   ├── gallery.js
│   ├── lang.js
│   ├── accessibility.js
│   ├── collections.js
│   ├── about.js
│   └── contact.js
│
├── images/
│   ├── bridal/
│   ├── evening/
│   ├── logo/
│   ├── fonts/
│   └── videos/
│
├── index.html
├── bridal.html
├── evening.html
├── about.html
├── contact.html
├── collections.html
├── accessibility-statement.html
├── privacy-policy.html
├── terms.html
└── README.md
```

---

## 🧠 JavaScript Documentation

### `script.js`
Handles:
- Navbar behavior  
- Mobile menu toggle  
- Preloader logic  
- Scroll effects  
- Shared UI interactions  

### `gallery.js`
Controls:
- Gallery navigation  
- Fullscreen mode  
- Lazy loading  
- Swipe gestures  

### `lang.js`
Responsible for:
- Loading translations  
- Switching HE/EN  
- Updating DOM elements dynamically  
- Saving language to `localStorage`  

### `accessibility.js`
Implements:
- High contrast mode  
- Font scaling  
- Bold text  
- Highlighted links  
- Disable animations  
- Monochrome filter  
- Saves states to `localStorage`  

### `collections.js`
Handles:
- Bridal & Evening collections logic  
- Opening galleries  
- Dynamic card interactions  

### `about.js`
Handles:
- Smooth section animations  

### `contact.js`
Handles:
- WhatsApp form routing  
- Form validation  

---

## 🌍 SEO and Meta Optimization
- Fully optimized Open Graph tags  
- Twitter card metadata  
- Preconnect to CDNs  
- Minified CSS where possible  
- Lazy loading on all images  
- Clean HTML structure  
- SEO-friendly filenames  

---

## ☁️ AWS Deployment Guide

### 1️⃣ Upload Files to S3  
- Enable static hosting  
- Upload website files  
- Make objects public  
- Set correct MIME types  

### 2️⃣ Create CloudFront Distribution  
- Connect to S3 bucket  
- Enable compression  
- Enable caching  
- Add SSL certificate  

### 3️⃣ Configure Route 53  
- Add A-record (Alias → CloudFront)  
- Add www + naked domain  

---

## 🧪 Performance Features
- WebP images  
- Lazy loading  
- CDN caching  
- Minified & optimized CSS  
- Efficient JS  

---

## 🛡 Security
- HTTPS enforced  
- AWS-managed SSL  
- Only async external scripts  

---

## 📧 Contact  
Developed by: **DE (Dean Eliyahu)**  
Email: **Danidin910@walla.com**

---

## ❤️ Final Note  
This project represents a premium-level brand website designed with elegant UI, strong performance, accessibility compliance, and professional cloud deployment.

Feel free to extend the project with:
- Admin panel  
- CMS  
- Booking system  
- Backend API  
- Email automation  
