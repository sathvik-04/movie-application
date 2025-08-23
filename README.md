🎬 Movie Explorer

A modern, high-performance web application for intuitive movie discovery and search, leveraging a React frontend and a scalable Appwrite backend.

✨ Overview

Movie Explorer provides users with a seamless platform to discover, search, and explore movies. It integrates real-time trending content, optimized search, and detailed movie data using TMDB API, all within a responsive and visually appealing UI.

🚀 Key Features

🔍 Optimized Movie Search
Lightning-fast and accurate movie search by title.

🔥 Dynamic Trending Feed
Real-time trending movies for enhanced content discovery.

🎨 Intuitive UI with Tailwind CSS
Sleek, responsive design for a smooth user experience.

📱 Fully Responsive
Works perfectly on desktops, tablets, and smartphones.

⚡ Blazing Fast Performance
Built with Vite for ultra-fast builds and development.

📡 Real-Time Data Integration
Fetches live movie data (posters, trailers, cast info) from TMDB API.

🛠 Tech Stack
Frontend

React.js – Component-based UI

Vite – Fast bundling and development

Tailwind CSS – Responsive, utility-first styling

Backend

Appwrite – Authentication, Database, File Storage

API

TMDB API – Movie data, posters, trailers

🌐 Deployment

Frontend: Vercel

Backend: Appwrite Cloud

CORS Config: Vercel URL whitelisted in Appwrite for smooth API calls

⚙️ Getting Started
✅ Prerequisites

Node.js
 (LTS recommended)

npm or Yarn

Appwrite Project (Backend setup)

TMDB API Key (Get here
)

📂 Installation

Clone the repository

git clone https://github.com/sathvik-04/movie-application.git
cd movie-application


Install dependencies

npm install
# OR
yarn install


Set up environment variables
Create a .env file in the root folder:

VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=65e12e8a09e000e6dc8d
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY


Run development server

npm run dev
# OR
yarn dev


Access the app at http://localhost:5173
.

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a feature branch:

git checkout -b feature/your-feature


Commit changes:

git commit -m "Add your feature"


Push to your fork and create a Pull Request

📜 License

This project is licensed under the MIT License. See the LICENSE
 file for details.

🌟 Live Demo

👉 Movie Explorer on Vercel
