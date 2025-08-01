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
- `components/ui/Button.tsx` - Reusable button component (Task 2.2)
- `components/ui/Input.tsx` - Reusable input component (Task 2.3)
- `components/ui/Card.tsx` - Reusable card component ✅ Created (Task 2.4)
- `components/ui/Chart.tsx` - Chart component for data visualization ✅ Created (Task 2.5)
- `components/ui/LoadingSpinner.tsx` - Loading spinners and micro-interactions ✅ Created (Task 2.7)
- `components/Layout.tsx` - Main layout component with navigation ✅ Created (Task 2.6)
- `lib/utils/design-tokens.ts` - Design tokens and utility classes ✅ Created (Task 2.8)
- `src/app/globals.css` - Enhanced with design tokens and animations ✅ Updated (Task 2.8)
- `lib/supabase.ts` - Supabase client configuration (Task 3.6)
- `lib/auth.ts` - Authentication utilities and context (Task 4.2)
- `lib/types.ts` - TypeScript type definitions (Task 3.6)
- `lib/utils/calculations.ts` - Carbon footprint and ROI calculation utilities (Task 7.4)
- `lib/utils/calculations.test.ts` - Unit tests for calculation utilities (Task 7.4)
- `components/auth/LoginForm.tsx` - Login form component (Task 4.3)
- `components/auth/SignupForm.tsx` - Signup form component (Task 4.4)
- `components/onboarding/OnboardingWizard.tsx` - Main wizard container (Task 5.1)
- `components/onboarding/StepOne.tsx` - Business basics step (Task 5.2)
- `components/onboarding/StepTwo.tsx` - Energy usage step with CSV upload (Task 5.3)
- `components/onboarding/StepThree.tsx` - Sustainability goals step (Task 5.4)
- `components/dashboard/Dashboard.tsx` - Main dashboard component (Task 6.1)
- `components/dashboard/EnergyOverview.tsx` - Energy usage display (Task 6.2)
- `components/dashboard/CarbonFootprint.tsx` - Carbon footprint visualization (Task 6.3)
- `components/dashboard/ProgressChart.tsx` - Progress tracking chart (Task 6.4)
- `components/recommendations/RecommendationsList.tsx` - AI recommendations display (Task 7.6)
- `components/recommendations/RecommendationCard.tsx` - Individual recommendation component (Task 7.7)
- `components/csv/CSVUpload.tsx` - CSV file upload component (Task 8.1)
- `components/csv/CSVPreview.tsx` - CSV data preview component (Task 8.4)
- `supabase/schema.sql` - Database schema and tables (Task 3.1-3.4)
- `pages/index.tsx` - Landing page (Task 5.1)
- `pages/auth/login.tsx` - Login page (Task 4.3)
- `pages/auth/signup.tsx` - Signup page (Task 4.4)
- `pages/onboarding.tsx` - Onboarding wizard page (Task 5.1)
- `pages/dashboard.tsx` - Main dashboard page (Task 6.1)
- `pages/api/auth/[...nextauth].ts` - NextAuth.js API routes (Task 4.2)
- `pages/api/onboarding.ts` - Onboarding data submission API (Task 5.7)
- `pages/api/csv/upload.ts` - CSV upload handling API (Task 8.7)
- `pages/api/recommendations.ts` - AI recommendations API (Task 7.5)
- `backend/src/routes/auth.ts` - Authentication routes (Task 4.1)
- `backend/src/routes/data.ts` - Data management routes (Task 3.7)
- `backend/src/routes/recommendations.ts` - Recommendations routes (Task 7.5)
- `backend/src/middleware/validation.ts` - Input validation middleware (Task 4.5)
- `backend/src/services/supabaseClient.ts` - Backend Supabase client (Task 3.6)
- `backend/src/services/azureOpenAI.ts` - Azure OpenAI integration (Task 7.1)
- `backend/src/utils/csvParser.ts` - CSV parsing utilities (Task 8.3)
- `backend/src/utils/csvParser.test.ts` - CSV parser unit tests (Task 8.3)
- `ml-service/routers/recommendations.py` - Recommendations ML endpoints (Task 7.2)
- `ml-service/services/openai_service.py` - Azure OpenAI service integration (Task 7.1)
- `ml-service/utils/calculations.py` - Carbon footprint calculations (Task 7.4)
- `ml-service/utils/rules_engine.py` - Rules-based recommendation engine (Task 7.2)
- `ml-service/utils/calculations.test.py` - Python calculation tests (Task 7.4)
- `ml-service/models/recommendations.py` - Pydantic models for recommendations (Task 7.2)

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npm test` to run frontend tests and `npx jest [optional/path/to/test/file]` for specific test files.
- Use `pytest` to run Python tests in the ml-service directory.
- Backend tests can be run with `npm test` in the backend directory.

## Tasks

- [x] 1.0 Project Setup and Infrastructure Configuration
  - [x] 1.1 Initialize Next.js 14+ frontend project with TypeScript and Tailwind CSS
  - [x] 1.2 Set up Node.js backend with Express/Fastify and TypeScript
  - [x] 1.3 Initialize Python FastAPI ML service with virtual environment
  - [x] 1.4 Configure environment variables for all services (Supabase, Azure OpenAI)
  - [x] 1.5 Set up package.json scripts for development and deployment
  - [x] 1.6 Configure ESLint, Prettier, and TypeScript configurations
  - [x] 1.7 Set up basic project structure with folders and initial files

- [x] 2.0 Design System and UI Components Foundation
  - [x] 2.1 Set up Tailwind CSS configuration with custom color palette
  - [x] 2.2 Create reusable Button component with variants (primary, secondary, danger)
  - [x] 2.3 Create reusable Input component with validation states
  - [x] 2.4 Create reusable Card component for layout consistency
  - [x] 2.5 Create Chart component wrapper for data visualization
  - [x] 2.6 Create Layout component with responsive navigation header
  - [x] 2.7 Add loading spinners and basic micro-interactions
  - [x] 2.8 Create utility classes and design tokens for consistent spacing/colors

- [ ] 3.0 Database Schema Design and Supabase Integration
  - [ ] 3.1 Design and create users table with profile fields (business_name, industry, size, location)
  - [ ] 3.2 Create energy_data table for storing kWh/therms usage with timestamps
  - [ ] 3.3 Create sustainability_goals table for user-defined targets and timelines
  - [ ] 3.4 Create recommendations table for storing AI-generated suggestions with ROI data
  - [ ] 3.5 Set up Row Level Security (RLS) policies for data isolation
  - [ ] 3.6 Configure Supabase client in frontend with proper TypeScript types
  - [ ] 3.7 Create database utility functions for CRUD operations

- [ ] 4.0 User Authentication System with Google SSO
  - [ ] 4.1 Configure Supabase Auth with email/password and Google OAuth provider
  - [ ] 4.2 Create authentication context and hooks for React components
  - [ ] 4.3 Implement login form component with email/password validation
  - [ ] 4.4 Implement signup form component with email verification flow
  - [ ] 4.5 Add Google SSO button with proper error handling
  - [ ] 4.6 Create protected route wrapper for authenticated pages
  - [ ] 4.7 Implement logout functionality and session management
  - [ ] 4.8 Add basic user profile management (view/edit business details)

- [ ] 5.0 Three-Step Onboarding Wizard Implementation
  - [ ] 5.1 Create main OnboardingWizard component with step navigation
  - [ ] 5.2 Implement Step 1: Business basics form (name, industry dropdown, size, location)
  - [ ] 5.3 Implement Step 2: Energy usage input (kWh/therms) with CSV upload option
  - [ ] 5.4 Implement Step 3: Sustainability goal selection from predefined options
  - [ ] 5.5 Add form validation and error handling for each step
  - [ ] 5.6 Create progress indicator and step navigation controls
  - [ ] 5.7 Implement data persistence and submission to database
  - [ ] 5.8 Add completion flow that redirects to dashboard

- [ ] 6.0 Basic Dashboard with Data Visualization
  - [ ] 6.1 Create main Dashboard layout component with navigation
  - [ ] 6.2 Implement EnergyOverview component displaying current kWh/therms usage
  - [ ] 6.3 Create CarbonFootprint component with baseline CO2e calculations
  - [ ] 6.4 Build ProgressChart component using Chart.js or similar library
  - [ ] 6.5 Add KPI cards showing energy usage, emissions, and goal progress
  - [ ] 6.6 Implement data fetching and real-time updates from Supabase
  - [ ] 6.7 Create responsive grid layout for dashboard components
  - [ ] 6.8 Add loading states and error handling for dashboard data

- [ ] 7.0 AI Recommendations Engine with Azure OpenAI Integration
  - [ ] 7.1 Set up Azure OpenAI client configuration in backend/ML service
  - [ ] 7.2 Create rules-based recommendation engine for common scenarios
  - [ ] 7.3 Implement prompt engineering for Azure OpenAI sustainability recommendations
  - [ ] 7.4 Build recommendation scoring and ROI calculation logic
  - [ ] 7.5 Create API endpoint that combines rules-based and AI recommendations
  - [ ] 7.6 Implement RecommendationsList component to display 3-5 prioritized suggestions
  - [ ] 7.7 Create RecommendationCard component with ROI estimates and action buttons
  - [ ] 7.8 Add error handling and fallback recommendations when AI service is unavailable

- [ ] 8.0 CSV Data Management and Upload System
  - [ ] 8.1 Create CSVUpload component with drag-and-drop file interface
  - [ ] 8.2 Implement CSV file validation (size limits, format checking)
  - [ ] 8.3 Build CSV parsing service to extract energy usage data
  - [ ] 8.4 Create CSVPreview component to show parsed data before import
  - [ ] 8.5 Implement data transformation and normalization for different utility bill formats
  - [ ] 8.6 Add batch import functionality to store CSV data in database
  - [ ] 8.7 Create mock API endpoints for testing integration workflows
  - [ ] 8.8 Add error handling for malformed CSV files and data validation

- [ ] 9.0 Advanced Styling and Polish
  - [ ] 9.1 Style onboarding wizard with progress indicators and modern form design
  - [ ] 9.2 Design dashboard layout with clean card-based interface
  - [ ] 9.3 Style recommendation cards with clear CTAs and visual hierarchy
  - [ ] 9.4 Ensure mobile-first responsive design across all components
  - [ ] 9.5 Add toast notifications and advanced micro-interactions
  - [ ] 9.6 Implement dark mode support (optional)
  - [ ] 9.7 Add accessibility improvements (ARIA labels, keyboard navigation)
  - [ ] 9.8 Performance optimization and final polish
