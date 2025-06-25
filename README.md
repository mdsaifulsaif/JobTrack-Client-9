# 💼 Job Track

🔗 **Live Site:** [https://job-house-ph.netlify.app](https://job-house-ph.netlify.app)

---

## 📌 Project Overview

**Job Track** is an innovative and user-friendly web application designed to help job seekers explore a wide variety of job opportunities across multiple companies. This single-page application centralizes listings from multiple organizations, allowing users to view job descriptions, criteria, and apply directly through company websites. It offers a clean, winter-themed design focused on regional support and usability.

---

## 🚀 Key Features

- 🏢 **Company Listings**
  - View companies and their job postings from dynamic JSON data
  - Each company has multiple job listings with details
  - Job modal with full description and direct “Apply” link

- 📄 **Dynamic Routing & Title**
  - React Router-based navigation
  - Dynamic page titles using `react-helmet-async`

- 🧩 **Responsive Layout**
  - Mobile, tablet, and desktop friendly layout
  - One layout for all pages (Header + Footer + Main)

- 🧪 **Additional Routes**
  - Forgot Password page with redirect
  - Update Profile Info page

- 🎨 **Winter Themed Design**
  - Aesthetically pleasing, division/local inspired layout

- ❌ **404 Not Found Page**
  - Custom page for unknown routes

---

## 🛠 Technologies & Packages Used

- **React** (with Vite)
- **React Router DOM**
- **Firebase Authentication**
- **Tailwind CSS**
- **DaisyUI**
- **React Icons**
- **Lottie-React**
- **Framer Motion**
- **React Helmet Async**
- **SweetAlert2**
- **React Hook Form**
- **Netlify Deployment**

---

## 🔐 Environment Variables

Firebase configuration keys are secured using `.env`:

```env
VITE_API_KEY=your_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_bucket
VITE_MESSAGING_SENDER_ID=your_id
VITE_APP_ID=your_app_id
