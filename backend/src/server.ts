import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Environment variable validation
const requiredEnvVars = {
  PORT: process.env.PORT || "5000",
  NODE_ENV: process.env.NODE_ENV || "development",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  // Optional variables for MVP (will be required later)
  SUPABASE_URL: process.env.SUPABASE_URL,
  AZURE_OPENAI_API_KEY: process.env.AZURE_OPENAI_API_KEY,
};

// Log environment status
console.log("🔧 Environment Configuration:");
console.log(`  - Port: ${requiredEnvVars.PORT}`);
console.log(`  - Environment: ${requiredEnvVars.NODE_ENV}`);
console.log(`  - Frontend URL: ${requiredEnvVars.FRONTEND_URL}`);
console.log(`  - Supabase configured: ${!!requiredEnvVars.SUPABASE_URL}`);
console.log(
  `  - Azure OpenAI configured: ${!!requiredEnvVars.AZURE_OPENAI_API_KEY}`,
);

// Import routes (will be created in future tasks)
// import authRoutes from './routes/auth';
// import dataRoutes from './routes/data';
// import recommendationsRoutes from './routes/recommendations';

class Server {
  private app: Application;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;

    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddleware(): void {
    // Security middleware
    this.app.use(helmet());

    // CORS configuration
    this.app.use(
      cors({
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        credentials: true,
      }),
    );

    // Body parsing middleware
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true }));

    // Logging middleware
    this.app.use(morgan("combined"));
  }

  private initializeRoutes(): void {
    // Health check endpoint
    this.app.get("/health", (req: Request, res: Response) => {
      res.status(200).json({
        status: "OK",
        message: "Casgo Backend API is running",
        timestamp: new Date().toISOString(),
        version: "1.0.0",
        environment: {
          node_env: requiredEnvVars.NODE_ENV,
          port: requiredEnvVars.PORT,
          supabase_configured: !!requiredEnvVars.SUPABASE_URL,
          azure_openai_configured: !!requiredEnvVars.AZURE_OPENAI_API_KEY,
          frontend_url: requiredEnvVars.FRONTEND_URL,
        },
      });
    });

    // API routes (will be implemented in future tasks)
    // this.app.use('/api/auth', authRoutes);
    // this.app.use('/api/data', dataRoutes);
    // this.app.use('/api/recommendations', recommendationsRoutes);

    // Default route
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Welcome to Casgo Backend API",
        documentation: "/api/docs",
        health: "/health",
      });
    });

    // 404 handler
    this.app.use("*", (req: Request, res: Response) => {
      res.status(404).json({
        error: "Route not found",
        path: req.originalUrl,
      });
    });
  }

  private initializeErrorHandling(): void {
    // Global error handler
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.app.use((err: Error, req: Request, res: Response, _next: any) => {
      // eslint-disable-next-line no-console
      console.error("Error:", err);

      res.status(500).json({
        error: "Internal Server Error",
        message:
          process.env.NODE_ENV === "development"
            ? err.message
            : "Something went wrong",
      });
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`🚀 Casgo Backend Server running on port ${this.port}`);
      // eslint-disable-next-line no-console
      console.log(
        `📊 Health check available at http://localhost:${this.port}/health`,
      );
      // eslint-disable-next-line no-console
      console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
    });
  }

  public getApp(): Application {
    return this.app;
  }
}

// Start the server
const server = new Server();
server.start();

export default server;
