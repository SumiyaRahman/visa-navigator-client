# Visa Navigator

## 🌍 About the Project
Visa Navigator is a user-friendly web application designed to simplify the visa process by allowing users to check visa requirements, apply online, and track applications with ease. The platform offers a seamless experience with authentication, data management, and real-time updates.

## 🚀 Live Demo
[Live Site URL](#) *(https://visa-navigator-71a4d.web.app/)*

## ✨ Features
- 🔍 **Check Visa Requirements** - Browse visa requirements for various countries.
- 📝 **Apply for Visas** - Submit applications directly through the platform.
- 🔄 **Track Applications** - Monitor visa application status.
- 🔐 **User Authentication** - Secure login & registration with Google authentication.
- 📋 **Manage Visas** - Add, update, and delete visa records.
- 🎨 **Dark/Light Mode** - Toggle between light and dark themes.
- 🔎 **Search & Filter** - Easily find visas based on type and country.
- 📢 **Toasts & Alerts** - Get real-time notifications for actions.

## 🏗️ Tech Stack
- **Frontend:** React, Tailwind CSS, DaisyUI, React Router, Firebase Auth
- **Backend:** Node.js, Express.js, MongoDB
- **Tools & Libraries:** Axios, React Toastify, React Modal, Lottie React, React Simple Typewriter

## 📌 Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/SumiyaRahman/visa-navigator.git
   cd visa-navigator
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Setup environment variables**
   - Create a `.env` file in the root directory.
   - Add Firebase and MongoDB credentials.
4. **Start the development server**
   ```sh
   npm run dev
   ```
5. **Backend Setup**
   ```sh
   cd server
   npm install
   npm start
   ```

## 🔐 Environment Variables
Create a `.env` file in both frontend and backend directories with:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 📂 Folder Structure
```
visa-navigator/
│── client/            # Frontend React App
│── server/            # Backend API (Express.js)
│── .env               # Environment Variables
│── README.md          # Documentation
│── package.json       # Project Metadata
```

## 🎯 Core Functionalities
- **Authentication:** Secure login, registration, Google OAuth
- **CRUD Operations:** Add, edit, delete, and view visas
- **Protected Routes:** Secure pages accessible only to logged-in users
- **API Integration:** Fetch and store data in MongoDB
- **Responsive Design:** Works seamlessly across devices

## 🔄 API Endpoints
| Method | Endpoint             | Description |
|--------|----------------------|-------------|
| GET    | /api/visas           | Fetch all visas |
| POST   | /api/visas           | Add a new visa |
| GET    | /api/visas/:id       | Get visa details |
| PUT    | /api/visas/:id       | Update visa details |
| DELETE | /api/visas/:id       | Delete a visa |

## 🚀 Deployment
- **Client-Side:** Firebase
- **Server-Side:** Surge

## 📌 Future Enhancements
- 📍 Multi-language support
- 📅 Application status tracking system
- 🔗 Social media sharing for visas
