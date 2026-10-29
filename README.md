# Express OAuth Boilerplate

A clean, production-ready Express.js boilerplate with Google OAuth authentication, MongoDB integration, and Swagger API documentation.

## Features

- ✅ Google OAuth 2.0 authentication with Passport.js
- ✅ Session management with MongoDB store
- ✅ User model with OAuth integration
- ✅ Protected routes and middleware
- ✅ Swagger API documentation
- ✅ Input validation with express-validator
- ✅ CORS support
- ✅ ESLint and Prettier configuration
- ✅ Environment-based configuration
- ✅ Jest testing setup

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/itusebastian/express-oauth-boilerplate.git
   cd express-oauth-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration:
   - `MONGO_URI`: Your MongoDB connection string
   - `SESSION_SECRET`: A random string for session encryption
   - `GOOGLE_CLIENT_ID`: From Google Cloud Console
   - `GOOGLE_CLIENT_SECRET`: From Google Cloud Console
   - `GOOGLE_CALLBACK_URL`: Your OAuth callback URL

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URIs:
   - `http://localhost:3000/auth/google/callback` (development)
   - Your production callback URL
6. Copy the Client ID and Client Secret to your `.env` file

### Running the Application

**Development mode with auto-reload:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Visit `http://localhost:3000` in your browser.

## API Documentation

Swagger documentation is available at `/api-docs` when the server is running.

Generate updated Swagger docs:
```bash
npm run swagger
```

## Project Structure

```
├── src/
│   ├── app.js                 # Express app setup
│   ├── config/
│   │   ├── db.js             # MongoDB connection
│   │   └── passport.js        # Passport strategies
│   ├── controllers/           # Request handlers
│   ├── middleware/            # Custom middleware
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API routes
│   └── utils/                 # Utility functions
├── server.js                  # Server entry point
├── swagger.js                 # Swagger config
├── package.json
├── .env.example               # Environment template
└── README.md
```

## Available Scripts

```bash
npm start         # Start production server
npm run dev       # Start development server with auto-reload
npm test          # Run Jest tests
npm run swagger   # Generate Swagger documentation
npm run lint      # Run ESLint
npm run lint:fix  # Fix ESLint issues
npm run format    # Format code with Prettier
```

## Authentication Flow

1. User visits `/auth/google` to initiate login
2. Redirected to Google OAuth consent screen
3. After consent, redirected to `/auth/google/callback`
4. User session created
5. Redirected to `/` or configured success route

## Middleware

- **Auth Middleware** (`src/middleware/auth.js`): Protects routes requiring authentication
- **Validation Middleware** (`src/middleware/validation.js`): Validates request data

## Database Models

### User
- `oauthId`: Google OAuth ID
- `email`: User email
- `displayName`: User's display name
- `createdAt`: Account creation timestamp

## Environment Variables

See `.env.example` for all available configuration options.

## License

ISC

## Author

Sebastián Iturralde

---

**Ready to use!** Clone this repo and start building your OAuth-protected API.
