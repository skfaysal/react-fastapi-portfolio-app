## About Frontend

"This is a frontend project for a personal portfolio application. It is built using React as the primary JavaScript library for building user interfaces. The development server and build tool is Vite, indicating a modern and fast development setup. The project is primarily written in TypeScript, ensuring type safety and improved code quality. For styling, it utilizes Tailwind CSS, a utility-first CSS framework, configured via `tailwind.config.js` and `postcss.config.js`."

The application is designed to be dynamic, with content managed through an API. It can operate in two modes:
1. API Mode - loading content from a backend API
2. Mock Mode - using hardcoded data for development or when the API is unavailable

## How to execute frontend

### Prerequisites

Make sure you have **Node.js** and **npm** (or **yarn**) installed.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/skfaysal/react-fastapi-portfolio-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react-fastapi-portfolio-app/frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create environment file:
    ```bash
    cp .env.example .env
    ```
   Edit the `.env` file to configure your API settings:
   - `VITE_API_BASE_URL`: URL of your backend API
   - `VITE_USE_MOCK_DATA`: Set to `true` to use mock data instead of API calls

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and go to:
    ```
    http://localhost:5173
    ```

### Testing

Run the test suite with:
```bash
npm test
```

For test coverage report:
```bash
npm run test:coverage
```

For the visual test UI:
```bash
npm run test:ui
```

## API Integration

The frontend is designed to work with a FastAPI backend that provides the following endpoints:

- `GET /api/portfolio`: Returns all portfolio data including personal info, experiences, skills, projects, etc.
- `POST /chat/`: Accepts a chat message and returns a response from the AI assistant

When the backend API is not available, the application falls back to using mock data defined in `src/services/api.ts`.


