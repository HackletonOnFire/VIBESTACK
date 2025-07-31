# Task List: Casgo Sustainability Application MVP

Based on the PRD analysis and current greenfield project state, here are the detailed tasks required to implement the Week 1 MVP features for Casgo.

## Relevant Files

- `package.json` - Next.js frontend dependencies and scripts ✅ Created
- `next.config.js` - Next.js configuration with environment variables ✅ Updated  
- `tailwind.config.js` - Tailwind CSS configuration ✅ Created
- `docs/environment-setup.md` - Environment variables setup guide ✅ Created
- `postcss.config.js` - PostCSS configuration for Tailwind ✅ Created
- `tsconfig.json` - TypeScript configuration ✅ Created
- `.eslintrc.json` - ESLint configuration ✅ Created
- `src/app/layout.tsx` - Root layout component ✅ Created
- `src/app/page.tsx` - Landing page component ✅ Created
- `src/app/globals.css` - Global CSS with Tailwind directives ✅ Created
- `env.example` - Environment variables template ✅ Created
- `backend/package.json` - Node.js backend dependencies ✅ Created
- `backend/tsconfig.json` - TypeScript configuration for backend ✅ Created
- `backend/.eslintrc.json` - ESLint configuration for backend ✅ Created
- `backend/src/server.ts` - Express server with security middleware ✅ Updated (env validation)
- `backend/env.example` - Backend environment variables template ✅ Created
- `ml-service/requirements.txt` - Python ML service dependencies ✅ Created
- `ml-service/main.py` - FastAPI application with recommendation engine ✅ Updated (env validation)
- `ml-service/env.example` - ML service environment variables template ✅ Created
- `ml-service/venv/` - Python virtual environment ✅ Created  
- `next.config.js` - Next.js configuration with environment variables
- `tailwind.config.js` - Tailwind CSS configuration
- `supabase/schema.sql` - Database schema and tables
- `lib/supabase.ts` - Supabase client configuration
- `lib/auth.ts` - Authentication utilities and context
- `lib/types.ts` - TypeScript type definitions
- `lib/utils/calculations.ts` - Carbon footprint and ROI calculation utilities
- `lib/utils/calculations.test.ts` - Unit tests for calculation utilities
- `components/ui/Button.tsx` - Reusable button component
- `components/ui/Input.tsx` - Reusable input component
- `components/ui/Card.tsx` - Reusable card component
- `components/ui/Chart.tsx` - Chart component for data visualization
- `components/Layout.tsx` - Main layout component with navigation
- `components/auth/LoginForm.tsx` - Login form component
- `components/auth/SignupForm.tsx` - Signup form component
- `components/onboarding/OnboardingWizard.tsx` - Main wizard container
- `components/onboarding/StepOne.tsx` - Business basics step
- `components/onboarding/StepTwo.tsx` - Energy usage step with CSV upload
- `components/onboarding/StepThree.tsx` - Sustainability goals step
- `components/dashboard/Dashboard.tsx` - Main dashboard component
- `components/dashboard/EnergyOverview.tsx` - Energy usage display
- `components/dashboard/CarbonFootprint.tsx` - Carbon footprint visualization
- `components/dashboard/ProgressChart.tsx` - Progress tracking chart
- `components/recommendations/RecommendationsList.tsx` - AI recommendations display
- `components/recommendations/RecommendationCard.tsx` - Individual recommendation component
- `components/csv/CSVUpload.tsx` - CSV file upload component
- `components/csv/CSVPreview.tsx` - CSV data preview component
- `pages/index.tsx` - Landing page
- `pages/auth/login.tsx` - Login page
- `pages/auth/signup.tsx` - Signup page
- `pages/onboarding.tsx` - Onboarding wizard page
- `pages/dashboard.tsx` - Main dashboard page
- `pages/api/auth/[...nextauth].ts` - NextAuth.js API routes
- `pages/api/onboarding.ts` - Onboarding data submission API
- `pages/api/csv/upload.ts` - CSV upload handling API
- `pages/api/recommendations.ts` - AI recommendations API
- `backend/src/server.ts` - Express/Fastify server setup
- `backend/src/routes/auth.ts` - Authentication routes
- `backend/src/routes/data.ts` - Data management routes
- `backend/src/routes/recommendations.ts` - Recommendations routes
- `backend/src/middleware/validation.ts` - Input validation middleware
- `backend/src/services/supabaseClient.ts` - Backend Supabase client
- `backend/src/services/azureOpenAI.ts` - Azure OpenAI integration
- `backend/src/utils/csvParser.ts` - CSV parsing utilities
- `backend/src/utils/csvParser.test.ts` - CSV parser unit tests
- `ml-service/main.py` - FastAPI ML service entry point
- `ml-service/routers/recommendations.py` - Recommendations ML endpoints
- `ml-service/services/openai_service.py` - Azure OpenAI service integration
- `ml-service/utils/calculations.py` - Carbon footprint calculations
- `ml-service/utils/rules_engine.py` - Rules-based recommendation engine
- `ml-service/utils/calculations.test.py` - Python calculation tests
- `ml-service/models/recommendations.py` - Pydantic models for recommendations

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npm test` to run frontend tests and `npx jest [optional/path/to/test/file]` for specific test files.
- Use `pytest` to run Python tests in the ml-service directory.
- Backend tests can be run with `npm test` in the backend directory.

## Tasks

- [ ] 1.0 Project Setup and Infrastructure Configuration
  - [x] 1.1 Initialize Next.js 14+ frontend project with TypeScript and Tailwind CSS
  - [x] 1.2 Set up Node.js backend with Express/Fastify and TypeScript
  - [x] 1.3 Initialize Python FastAPI ML service with virtual environment
  - [x] 1.4 Configure environment variables for all services (Supabase, Azure OpenAI)
  - [ ] 1.5 Set up package.json scripts for development and deployment
  - [ ] 1.6 Configure ESLint, Prettier, and TypeScript configurations
  - [ ] 1.7 Set up basic project structure with folders and initial files

- [ ] 2.0 Database Schema Design and Supabase Integration
  - [ ] 2.1 Design and create users table with profile fields (business_name, industry, size, location)
  - [ ] 2.2 Create energy_data table for storing kWh/therms usage with timestamps
  - [ ] 2.3 Create sustainability_goals table for user-defined targets and timelines
  - [ ] 2.4 Create recommendations table for storing AI-generated suggestions with ROI data
  - [ ] 2.5 Set up Row Level Security (RLS) policies for data isolation
  - [ ] 2.6 Configure Supabase client in frontend with proper TypeScript types
  - [ ] 2.7 Create database utility functions for CRUD operations 

- [ ] 3.0 User Authentication System with Google SSO
  - [ ] 3.1 Configure Supabase Auth with email/password and Google OAuth provider
  - [ ] 3.2 Create authentication context and hooks for React components
  - [ ] 3.3 Implement login form component with email/password validation
  - [ ] 3.4 Implement signup form component with email verification flow
  - [ ] 3.5 Add Google SSO button with proper error handling
  - [ ] 3.6 Create protected route wrapper for authenticated pages
  - [ ] 3.7 Implement logout functionality and session management
  - [ ] 3.8 Add basic user profile management (view/edit business details)

- [ ] 4.0 Three-Step Onboarding Wizard Implementation
  - [ ] 4.1 Create main OnboardingWizard component with step navigation
  - [ ] 4.2 Implement Step 1: Business basics form (name, industry dropdown, size, location)
  - [ ] 4.3 Implement Step 2: Energy usage input (kWh/therms) with CSV upload option
  - [ ] 4.4 Implement Step 3: Sustainability goal selection from predefined options
  - [ ] 4.5 Add form validation and error handling for each step
  - [ ] 4.6 Create progress indicator and step navigation controls
  - [ ] 4.7 Implement data persistence and submission to database
  - [ ] 4.8 Add completion flow that redirects to dashboard

- [ ] 5.0 Basic Dashboard with Data Visualization
  - [ ] 5.1 Create main Dashboard layout component with navigation
  - [ ] 5.2 Implement EnergyOverview component displaying current kWh/therms usage
  - [ ] 5.3 Create CarbonFootprint component with baseline CO2e calculations
  - [ ] 5.4 Build ProgressChart component using Chart.js or similar library
  - [ ] 5.5 Add KPI cards showing energy usage, emissions, and goal progress
  - [ ] 5.6 Implement data fetching and real-time updates from Supabase
  - [ ] 5.7 Create responsive grid layout for dashboard components
  - [ ] 5.8 Add loading states and error handling for dashboard data

- [ ] 6.0 AI Recommendations Engine with Azure OpenAI Integration
  - [ ] 6.1 Set up Azure OpenAI client configuration in backend/ML service
  - [ ] 6.2 Create rules-based recommendation engine for common scenarios
  - [ ] 6.3 Implement prompt engineering for Azure OpenAI sustainability recommendations
  - [ ] 6.4 Build recommendation scoring and ROI calculation logic
  - [ ] 6.5 Create API endpoint that combines rules-based and AI recommendations
  - [ ] 6.6 Implement RecommendationsList component to display 3-5 prioritized suggestions
  - [ ] 6.7 Create RecommendationCard component with ROI estimates and action buttons
  - [ ] 6.8 Add error handling and fallback recommendations when AI service is unavailable

- [ ] 7.0 CSV Data Management and Upload System
  - [ ] 7.1 Create CSVUpload component with drag-and-drop file interface
  - [ ] 7.2 Implement CSV file validation (size limits, format checking)
  - [ ] 7.3 Build CSV parsing service to extract energy usage data
  - [ ] 7.4 Create CSVPreview component to show parsed data before import
  - [ ] 7.5 Implement data transformation and normalization for different utility bill formats
  - [ ] 7.6 Add batch import functionality to store CSV data in database
  - [ ] 7.7 Create mock API endpoints for testing integration workflows
  - [ ] 7.8 Add error handling for malformed CSV files and data validation

- [ ] 8.0 Basic Styling and Responsive Design Implementation
  - [ ] 8.1 Set up Tailwind CSS configuration with custom color palette
  - [ ] 8.2 Create design system components (Button, Input, Card, etc.)
  - [ ] 8.3 Implement responsive navigation header with mobile menu
  - [ ] 8.4 Style onboarding wizard with progress indicators and modern form design
  - [ ] 8.5 Design dashboard layout with clean card-based interface
  - [ ] 8.6 Style recommendation cards with clear CTAs and visual hierarchy
  - [ ] 8.7 Ensure mobile-first responsive design across all components
  - [ ] 8.8 Add loading spinners, toast notifications, and micro-interactions 