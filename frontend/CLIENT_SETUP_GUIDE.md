# Client Customization Guide: Live Email & Resume PDF Setup

Welcome to your **Nexus Pro Portfolio**! This step-by-step guide explains how to connect your **Live Contact Form Email** and update your **Resume/CV PDF Link**.

All customizations are done inside a single configuration file:
📍 `src/data/portfolio.config.js`

---

## 📧 Part 1: Setting Up Your Live Contact Form Email

You have **two simple options** to make the contact form send messages directly to your inbox.

### Option A: Free Live Form Submissions via Formspree (Recommended)

[Formspree](https://formspree.io) provides 50 free email submissions per month without any backend code required.

1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Click **"New Form"**, enter a name (e.g., *My Portfolio Contact Form*), and set your personal target email address.
3. Formspree will provide a unique endpoint URL that looks like this:
   `https://formspree.io/f/xyzabcde`
4. Open `src/data/portfolio.config.js` and locate the `contact` section at the bottom:
   ```javascript
   contact: {
     title: "Let's Build Something Exceptional Together",
     subtitle: "Have a project idea or inquiry?",
     formspreeEndpoint: "https://formspree.io/f/YOUR_UNIQUE_FORM_ID", // Paste your Formspree URL here
     directEmail: "your.name@domain.com", // Your personal email address
     location: "San Francisco, CA",
   }
   ```
5. Save the file. Your contact form is now **100% LIVE**!

---

### Option B: Automatic Direct Email Fallback (No Formspree Needed)

If `formspreeEndpoint` is left empty or not configured, the website automatically opens your default email client (e.g., Apple Mail, Outlook, Gmail app) pre-filled with the visitor's name, email, phone number, and message!

To set your direct email address for this fallback:
1. Open `src/data/portfolio.config.js`.
2. Update the `personal.email` and `contact.directEmail` fields:
   ```javascript
   personal: {
     email: "your.real.email@domain.com",
   },
   contact: {
     directEmail: "your.real.email@domain.com",
   }
   ```

---

## 📄 Part 2: Setting Up Your Downloadable PDF Resume / CV

Your portfolio includes a built-in interactive **Resume Timeline** and a **Download Resume (PDF)** button.

### How to Attach Your Own PDF Resume File:

1. Save your custom resume PDF file (e.g., `resume.pdf`).
2. Place the file inside the `public/` directory of your project:
   📁 `frontend/public/assets/resume.pdf` (or `frontend/public/resume.pdf`)
3. Open `src/data/portfolio.config.js`.
4. Update the `resumeUrl` property under `personal`:
   ```javascript
   personal: {
     name: "Alex Morgan",
     resumeUrl: "/assets/resume.pdf", // Link to your static PDF file
   }
   ```
5. Save the file. Now, when visitors click **"Download Resume (PDF)"**, your PDF file downloads immediately!

### Built-in PDF Print Fallback:
If `resumeUrl` is set to `"#"` or `"#resume-pdf"`, clicking **"Download Resume (PDF)"** automatically triggers the browser's native **Print to PDF** dialog, allowing visitors to save a clean, print-formatted version of your full digital resume!

---

## 🚀 Summary Checklist Before Launching:
- [ ] Updated `personal.name`, `personal.role`, and `personal.email` in `src/data/portfolio.config.js`.
- [ ] Added your Formspree endpoint or updated `contact.directEmail`.
- [ ] Placed your `resume.pdf` in `public/assets/` and updated `resumeUrl`.
- [ ] Tested submitting a test message from the `/contact` page.

---
*Created for Nexus Pro Portfolio template users.*
