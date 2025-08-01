// Shared TypeScript Type Definitions
// This file contains all the common types used across the application

// User and Business Types
export interface User {
  id: string;
  email: string;
  business_name?: string;
  industry?: string;
  size?: string;
  location?: string;
  created_at: string;
  updated_at: string;
}

// Energy Data Types
export interface EnergyData {
  id: string;
  user_id: string;
  month: string;
  kwh_usage: number;
  therms_usage: number;
  cost: number;
  created_at: string;
}

// Sustainability Goals Types
export interface SustainabilityGoal {
  id: string;
  user_id: string;
  goal_type: 'reduce_emissions' | 'reduce_costs' | 'increase_efficiency';
  target_value: number;
  target_date: string;
  current_value?: number;
  created_at: string;
}

// Recommendations Types
export interface Recommendation {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: string;
  estimated_cost_savings: number;
  estimated_co2_reduction: number;
  roi_months: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  priority_score: number;
  status: 'pending' | 'implemented' | 'dismissed';
  created_at: string;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface OnboardingData {
  business_name: string;
  industry: string;
  size: string;
  location: string;
  monthly_kwh: number;
  monthly_therms: number;
  sustainability_goals: string[];
}

// CSV Upload Types
export interface CSVRow {
  [key: string]: string | number;
}

export interface CSVUploadResult {
  success: boolean;
  rows_processed: number;
  errors: string[];
  data: EnergyData[];
} 