# React + FastAPI Portfolio App

A modern, responsive portfolio application built with React frontend and FastAPI backend. Features dynamic content management, markdown-based About Me section, and a beautiful sticky navigation experience.

## 🚀 Features

- **Modern React Frontend** with TypeScript and Tailwind CSS
- **FastAPI Backend** with automatic API documentation
- **Markdown-based Content** - Edit About Me section via markdown files
- **Responsive Design** - Works perfectly on all device sizes
- **Sticky Navigation** - Smooth scrolling with proper section offsets
- **Dynamic API Integration** - Fetch content from backend on page reload
- **Professional UI** - Clean, modern design with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Axios** for API calls
- **React Router** for navigation

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **Markdown** - For content processing
- **Poetry** - Dependency management

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.10 or higher)
- **Poetry** (for Python dependency management)
- **npm** or **yarn**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd react-fastapi-portfolio-app
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
poetry install

# Run the development server
poetry run uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at: `http://0.0.0.0:8000`

**API Documentation**: Visit `http://0.0.0.0:8000/docs` for interactive API docs

### 3. Frontend Setup

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

The frontend will be available at: `http://localhost:5173`

## 📖 Detailed Setup

### Backend Configuration

The backend uses Poetry for dependency management. Key files:

- `pyproject.toml` - Project dependencies and configuration
- `main.py` - FastAPI application with all endpoints
- `about_me.md` - Markdown content for About Me section

**Available Scripts:**
```bash
# Install dependencies
poetry install

# Run development server
poetry run uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Run tests (if available)
poetry run pytest
```

### Frontend Configuration

The frontend uses npm for package management. Key files:

- `package.json` - Project dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `src/services/api.ts` - API service functions

**Available Scripts:**
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Run tests
npm test

# Generate test coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## 🔌 API Endpoints

### About Me
- **GET** `/api/about-me`
  - Returns markdown content converted to HTML
  - Response includes both HTML and raw markdown

Example response:
```json
{
  "success": true,
  "data": {
    "content": "<p>6+ years experienced Data Scientist...</p>",
    "raw_markdown": "6+ years experienced Data Scientist..."
  }
}
```

### Portfolio Data (Mock)
- **GET** `/api/portfolio/*` - Various portfolio endpoints
- Currently returns mock data for development

## 📁 Project Structure

```
react-fastapi-portfolio-app/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── about_me.md          # About Me content (markdown)
│   ├── pyproject.toml       # Python dependencies
│   └── poetry.lock          # Locked dependencies
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header/      # Navigation header
│   │   │   ├── Landing/     # Landing/About Me section
│   │   │   ├── Experience/  # Experience section
│   │   │   ├── Skills/      # Skills section
│   │   │   ├── Projects/    # Projects section
│   │   │   └── Blogs/       # Blogs section
│   │   ├── services/        # API services
│   │   ├── context/         # React context
│   │   └── types/           # TypeScript types
│   ├── package.json         # Node dependencies
│   └── vite.config.ts       # Vite configuration
└── README.md
```

## 🎨 Customization

### Editing About Me Content

1. Edit `backend/about_me.md` with your content
2. Use markdown formatting for rich text
3. Restart the backend or the changes will be picked up on next API call

Example markdown:
```markdown
# About Me

I am a **Software Developer** with 5+ years of experience...

## Skills
- React & TypeScript
- Python & FastAPI
- Cloud Technologies
```

### Styling Customization

- **Frontend styles**: Edit `frontend/src/index.css` and component files
- **Tailwind config**: Modify `frontend/tailwind.config.js`
- **Component styles**: Update individual component files

### API Configuration

- **Base URL**: Set `VITE_API_BASE_URL` environment variable
- **CORS**: Update allowed origins in `backend/main.py`

## 🧪 Testing

### Backend Tests
```bash
cd backend
poetry run pytest
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Manual Testing
1. Start both backend and frontend servers
2. Test API endpoints using Postman or browser
3. Verify frontend displays content correctly
4. Test responsive design on different screen sizes

## 🚀 Production Deployment

### Backend Deployment
```bash
# Build and deploy FastAPI app
poetry run uvicorn main:app --host 0.0.0.0 --port 8000
```

### Frontend Deployment
```bash
# Build for production
npm run build

# Serve static files
# (Use nginx, Apache, or any static file server)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues:

1. Check the API is running: `http://0.0.0.0:8000/docs`
2. Verify frontend is running: `http://localhost:5173`
3. Check browser console for errors
4. Ensure all dependencies are installed

## 🔄 Updates

- **Backend**: Restart the server to pick up code changes
- **Frontend**: Changes are hot-reloaded automatically
- **Content**: Edit markdown files and restart backend

---

Built with ❤️ using React, FastAPI, and modern web technologies.