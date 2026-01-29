# FlowNest - Task Management System

*Organize your work. Amplify your focus.*

## 📋 Project Description

FlowNest is a modern full-stack task management application designed to help users organize their work, track progress, and stay productive. Built with a focus on clean design and efficient functionality, it provides a seamless experience for personal and team task management with secure authentication and responsive UI.

## ✨ Features

- **🔐 Secure Authentication**: User registration and login with JWT tokens
- **📝 Task Management**: Create, read, update, and delete tasks
- **🎯 Task Organization**: Track task status and priority levels
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean, professional interface with Tailwind CSS
- **⚡ Real-time Updates**: Instant task status changes and updates
- **👤 User Dashboard**: Personal workspace with task overview
- **🔍 Search & Filter**: Find tasks quickly with search functionality

## 🛠 Tech Stack

### Frontend
- **React.js** - UI framework
- **Tailwind CSS** - Styling framework
- **shadcn/ui** - Component library
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **express-validator** - Input validation

### Development Tools
- **Git** - Version control
- **GitHub** - Code repository
- **Vite** - Build tool
- **ESLint** - Code linting

## 📁 Folder Structure

```
FlowNest/
├── Backend/
│   ├── controllers/          # Business logic
│   ├── middleware/           # Authentication & validation
│   ├── models/              # Database schemas
│   ├── routes/              # API endpoints
│   └── index.js             # Server entry point
├── Frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # React context
│   │   ├── pages/            # Page components
│   │   └── utils/            # Helper functions
│   └── public/               # Static assets
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Git

### Clone the Repository
```bash
git clone https://github.com/yourusername/FlowNest.git
cd FlowNest
```

### Backend Setup
```bash
cd Backend
npm install
```

### Frontend Setup
```bash
cd Frontend
npm install
```

## 🔧 Environment Variables

### Backend (.env.local)
```env
PORT=4000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/FlowNest
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_BASE_URL=http://localhost:4000
```

## ▶️ How to Run Locally

### 1. Start Backend Server
```bash
cd Backend
npm run dev
```
Backend will run on `http://localhost:4000`

### 2. Start Frontend Application
```bash
cd Frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

### 3. Access the Application
Open your browser and navigate to `http://localhost:5173`

## 📸 Screenshots

*Note: Screenshots will be added here showing the application interface*

- Landing page with authentication options
- User dashboard with task overview
- Task creation and management interface
- Mobile responsive design

## 🔮 Future Improvements

- **Team Collaboration**: Share tasks with team members
- **Task Categories**: Organize tasks by projects or categories
- **Calendar View**: Visualize tasks on a calendar
- **File Attachments**: Add files to tasks
- **Email Notifications**: Task reminders and updates
- **Dark Mode**: Toggle between light and dark themes
- **Analytics Dashboard**: Track productivity metrics
- **API Documentation**: Complete REST API documentation

## 🤝 Contributing Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Write clean, commented code
- Test your changes before submitting
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ankit Kumar**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: ankit@example.com
- Portfolio: [your-portfolio-link](https://your-portfolio.com)

---

**Built with ❤️ for productivity enthusiasts**
