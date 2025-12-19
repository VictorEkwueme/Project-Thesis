# 🚀 Quick Setup Guide - AcademiaHub

## ⚡ Get Started in 5 Minutes

### Step 1: Update WhatsApp Number (REQUIRED) ⭐

Replace **`YOUR_PHONE_NUMBER`** in these 9 locations:

1. **index.html** (Line 352, 360)
2. **project.html** (Line 213, 255, 354)
3. **categories.html** (Line 664)
4. **about.html** (Line 85)
5. **contact.html** (Line 49, 131)

**Find & Replace:**
```
Find: YOUR_PHONE_NUMBER
Replace: 1234567890
```
*(Use international format without + symbol)*

**Example:**
```html
<!-- Before -->
<a href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi">

<!-- After -->
<a href="https://wa.me/12345678900?text=Hi">
```

---

### Step 2: Update Email Address (RECOMMENDED)

Replace **`info@academiahub.com`** with your email in:

- All footer sections (5 pages)
- Contact page
- About page

---

### Step 3: Test the Website

1. Open `index.html` in your browser
2. Check all navigation links work
3. Test dark/light mode toggle
4. Verify WhatsApp buttons open correctly on mobile
5. Test responsive design (resize browser)

---

### Step 4: Customize Content (OPTIONAL)

#### Change Brand Name
Find & replace: **AcademiaHub** → **YourBrandName**

#### Update Prices
Edit in `project.html`:
```html
<!-- Find this section around line 173 -->
<span class="amount">15</span>  <!-- Change this number -->
```

#### Add Your Logo
Replace graduation cap icon:
```html
<!-- Find in navigation -->
<i class="fas fa-graduation-cap"></i>
<!-- Replace with your logo image -->
<img src="images/logo.png" alt="Logo">
```

---

### Step 5: Deploy to Web

#### Option A: GitHub Pages (FREE)
1. Create GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site: `https://yourusername.github.io/repo-name`

#### Option B: Netlify (FREE)
1. Create account at netlify.com
2. Drag & drop your project folder
3. Site live in seconds
4. Custom domain available

#### Option C: Traditional Hosting
1. Get hosting (Hostinger, Bluehost, etc.)
2. Upload via FTP/cPanel
3. Point domain to hosting
4. Enable HTTPS/SSL

---

## 📝 Pre-Launch Checklist

- [ ] WhatsApp number updated (test on mobile!)
- [ ] Email address changed
- [ ] Social media links updated (footer)
- [ ] Test all pages load correctly
- [ ] Dark mode works everywhere
- [ ] Mobile navigation functions
- [ ] All buttons have correct links
- [ ] Forms submit properly (if added)
- [ ] Payment modal displays correctly
- [ ] Images load (if you added any)

---

## 🎨 Quick Customizations

### Change Primary Color
**File:** `css/style.css` (Line 12)
```css
--primary-color: #667eea;  /* Change this hex code */
```

### Change Fonts
**File:** All HTML files `<head>` section
```html
<!-- Replace this URL -->
<link href="https://fonts.googleapis.com/css2?family=YourFont">
```

### Update Statistics
**File:** `index.html` (Line 63-75)
```html
<div class="stat-number" data-count="5000">0</div>  <!-- Change 5000 -->
```

---

## 💳 Payment Integration

### Stripe Setup (Recommended)

1. **Create Stripe Account**
   - Go to stripe.com
   - Complete verification

2. **Get API Keys**
   - Dashboard → Developers → API Keys
   - Copy Publishable Key

3. **Add to Website**
   ```html
   <!-- Add before </body> in project.html -->
   <script src="https://js.stripe.com/v3/"></script>
   <script>
     const stripe = Stripe('pk_test_YOUR_KEY');
     // Payment logic here
   </script>
   ```

4. **Update Button Handler**
   - Edit `js/main.js`
   - Replace payment modal logic
   - Test with Stripe test cards

### PayPal Setup

1. **Create Business Account**
   - paypal.com/business

2. **Get Client ID**
   - Developer Dashboard

3. **Add Button**
   ```html
   <div id="paypal-button-container"></div>
   <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
   ```

---

## 🔧 Troubleshooting

### WhatsApp Not Opening
- Check phone number format (no spaces, no +)
- Test on actual mobile device
- Verify WhatsApp is installed

### Dark Mode Not Working
- Clear browser cache
- Check browser console for errors
- Verify `js/main.js` is loading

### Animations Not Showing
- Check internet connection (AOS loads from CDN)
- Verify `<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>`
- Look for JavaScript errors in console

### Mobile Menu Not Opening
- Clear cache
- Check `js/main.js` loaded correctly
- Verify no JavaScript errors

---

## 📱 Social Media Setup

### Add Social Links
**File:** Footer section in all HTML pages

```html
<!-- Find this section -->
<div class="social-links">
    <a href="https://facebook.com/yourpage"><i class="fab fa-facebook"></i></a>
    <a href="https://twitter.com/yourhandle"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com/yourprofile"><i class="fab fa-instagram"></i></a>
    <a href="https://linkedin.com/company/yourcompany"><i class="fab fa-linkedin"></i></a>
</div>
```

---

## 🎯 Marketing Tips

1. **SEO Basics**
   - Update meta descriptions on each page
   - Add relevant keywords
   - Create sitemap.xml
   - Submit to Google Search Console

2. **Social Proof**
   - Update download numbers regularly
   - Add real testimonials
   - Show recent purchases (optional)

3. **Content Strategy**
   - Add 1-2 new projects weekly
   - Share on social media
   - Engage with customers

4. **WhatsApp Marketing**
   - Quick response time (under 5 min)
   - Professional messages
   - Offer bundles/discounts
   - Build relationship

---

## 📊 Analytics Setup

### Google Analytics
```html
<!-- Add before </head> in all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel
```html
<!-- Add after <body> tag -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 🛡️ Security Checklist

- [ ] Enable HTTPS/SSL certificate
- [ ] Use environment variables for API keys (backend)
- [ ] Validate all form inputs
- [ ] Add CAPTCHA to contact forms (optional)
- [ ] Create privacy policy page
- [ ] Add terms of service
- [ ] Implement cookie consent (GDPR)
- [ ] Regular backups of content

---

## 💡 Success Tips

1. **Start Small**
   - Begin with 10-20 quality projects
   - Add more based on demand

2. **Pricing Strategy**
   - Start competitive ($9.99-$19.99)
   - Test different price points
   - Offer bundle discounts

3. **Customer Service**
   - Respond to WhatsApp within 5 min
   - Be helpful and professional
   - Follow up with buyers

4. **Marketing**
   - Share on student forums
   - Create YouTube tutorials
   - Run Facebook/Instagram ads
   - WhatsApp status updates

5. **Quality Control**
   - Preview every document
   - Check formatting
   - Verify all information
   - No plagiarized content

---

## 📞 Need Help?

### Common Issues

**Q: How do I add more projects?**
A: Copy the project card HTML in library.html and index.html, update the details.

**Q: Can I change the color scheme?**
A: Yes! Edit CSS variables in `css/style.css` starting at line 10.

**Q: How do I accept payments?**
A: Integrate Stripe or PayPal (see Payment Integration section above).

**Q: Mobile menu not working?**
A: Check that `js/main.js` is loading correctly. Clear browser cache.

**Q: Where do I host the actual PDF files?**
A: Use cloud storage (Google Drive, Dropbox) or your web hosting. Link in project pages.

---

## 🎉 You're Ready to Launch!

1. ✅ Update placeholders
2. ✅ Test everything
3. ✅ Deploy to hosting
4. ✅ Add content
5. ✅ Start marketing
6. ✅ Monitor and optimize

**Good luck with your academic materials business!** 🚀

---

**Last Updated:** December 2024
**Version:** 1.0.0
**Support:** Check README.md for detailed documentation