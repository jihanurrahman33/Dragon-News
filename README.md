# 🐉 Dragon News

A modern, responsive news portal application built with React and Vite. Browse and read the latest news across multiple categories with a clean, intuitive user interface.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Components](#project-components)
- [Authentication](#authentication)
- [Firebase Configuration](#firebase-configuration)

## ✨ Features

- **Multi-Category News**: Browse news articles organized by categories
- **User Authentication**: Sign up, login, and password reset functionality
- **News Details**: View comprehensive details for individual news articles
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Loading States**: Smooth loading indicators for better UX
- **Social Integration**: Social login options
- **Private Routes**: Protected pages for authenticated users
- **Latest News**: Always see the most recent news articles
- **Find Us Section**: Location and contact information

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3
- **Backend Services**: Firebase (Authentication & Hosting)
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
Dragon-News/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Categories.jsx          # Category selector
│   │   ├── Header.jsx              # Main header component
│   │   ├── LatestNews.jsx          # Latest news display
│   │   ├── NavBar.jsx              # Navigation bar
│   │   ├── NewsCard.jsx            # Single news card component
│   │   ├── NewsDetailsCard.jsx     # Detailed news view
│   │   └── homelayout/
│   │       ├── FindUs.jsx          # Contact & location info
│   │       ├── LeftAside.jsx       # Left sidebar content
│   │       ├── Qzone.jsx           # Q-zone advertisement area
│   │       ├── RightAside.jsx      # Right sidebar content
│   │       └── SocialLogin.jsx     # Social authentication buttons
│   ├── firebase/             # Firebase configuration
│   │   └── firebase.config.js      # Firebase setup
│   ├── layouts/              # Page layouts
│   │   ├── AuthLayout.jsx         # Authentication pages layout
│   │   └── HomeLayout.jsx         # Home page layout
│   ├── pages/                # Page components
│   │   ├── CategoryNews.jsx       # News by category
│   │   ├── ForgetPassword.jsx     # Password reset page
│   │   ├── Home.jsx               # Home page
│   │   ├── Loading.jsx            # Loading state
│   │   ├── Login.jsx              # Login page
│   │   ├── NewsDetails.jsx        # News detail page
│   │   └── Register.jsx           # User registration page
│   ├── provider/             # Context providers
│   │   ├── AuthProvider.jsx       # Authentication context
│   │   └── PrivateRoute.jsx       # Protected route wrapper
│   ├── routes/               # Routing configuration
│   │   └── router.jsx             # Route definitions
│   ├── App.jsx               # Main app component
│   ├── App.css               # Global styles
│   ├── main.jsx              # Entry point
│   └── index.css             # Base styles
├── public/                   # Static assets
│   ├── categories.json       # Category data
│   └── news.json             # News data
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── firebase.json             # Firebase configuration
```

## 🚀 Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd Dragon-News
```

2. **Install dependencies**:
```bash
npm install
```

3. **Configure Firebase**:
   - Update your Firebase configuration in [src/firebase/firebase.config.js](src/firebase/firebase.config.js)
   - Add your Firebase project credentials

## 🎯 Getting Started

1. **Start the development server**:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

2. **Build for production**:
```bash
npm run build
```

3. **Preview production build**:
```bash
npm run preview
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot module reloading |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🧩 Project Components

### Core Components
- **Header**: Main application header with branding
- **NavBar**: Navigation menu for site sections
- **Categories**: Category filter and selector
- **NewsCard**: Individual news article card component
- **NewsDetailsCard**: Detailed view of a single news article

### Layout Components
- **HomeLayout**: Main layout for news feed pages
- **AuthLayout**: Layout for authentication pages

### Home Layout Sub-components
- **LeftAside**: Left sidebar with trending or additional content
- **RightAside**: Right sidebar with featured content
- **Qzone**: Advertisement section
- **FindUs**: Contact and location information
- **SocialLogin**: Social media authentication options

## 🔐 Authentication

The application uses Firebase Authentication for user management:

- **Sign Up**: New users can create an account via [Register.jsx](src/pages/Register.jsx)
- **Login**: Existing users can log in via [Login.jsx](src/pages/Login.jsx)
- **Password Reset**: Users can reset forgotten passwords via [ForgetPassword.jsx](src/pages/ForgetPassword.jsx)
- **Protected Routes**: [PrivateRoute.jsx](src/provider/PrivateRoute.jsx) protects pages that require authentication
- **Auth Context**: [AuthProvider.jsx](src/provider/AuthProvider.jsx) manages authentication state

## 🔥 Firebase Configuration

Firebase is configured in [src/firebase/firebase.config.js](src/firebase/firebase.config.js). Make sure to:

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication (Email/Password, Social Providers)
3. Add your credentials to the Firebase configuration file
4. Deploy using `firebase deploy` (requires Firebase CLI)

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible layouts using CSS Grid and Flexbox
- Touch-friendly navigation

## 📄 License

This project is open source and available for personal and educational use.

---

**Happy Reading! 📰**
