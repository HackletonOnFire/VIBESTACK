from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import os
from dotenv import load_dotenv
import openai

# Load environment variables
load_dotenv()

# Environment variable validation and logging
ENVIRONMENT_CONFIG = {
    'AZURE_OPENAI_ENDPOINT': os.getenv("AZURE_OPENAI_ENDPOINT"),
    'AZURE_OPENAI_API_KEY': os.getenv("AZURE_OPENAI_API_KEY"), 
    'AZURE_OPENAI_API_VERSION': os.getenv("AZURE_OPENAI_API_VERSION", "2023-12-01-preview"),
    'AZURE_OPENAI_DEPLOYMENT': os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME"),
    'ML_SERVICE_PORT': int(os.getenv("ML_SERVICE_PORT", "8000")),
    'DEBUG': os.getenv("DEBUG", "True").lower() == "true"
}

# Log environment status
print("ML Service Environment Configuration:")
print(f"  - Port: {ENVIRONMENT_CONFIG['ML_SERVICE_PORT']}")
print(f"  - Debug mode: {ENVIRONMENT_CONFIG['DEBUG']}")
print(f"  - Azure OpenAI endpoint configured: {bool(ENVIRONMENT_CONFIG['AZURE_OPENAI_ENDPOINT'])}")
print(f"  - Azure OpenAI API key configured: {bool(ENVIRONMENT_CONFIG['AZURE_OPENAI_API_KEY'])}")
print(f"  - Azure OpenAI deployment configured: {bool(ENVIRONMENT_CONFIG['AZURE_OPENAI_DEPLOYMENT'])}")

# Initialize FastAPI app
app = FastAPI(
    title="Casgo ML Service",
    description="AI-powered sustainability recommendations service",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "http://localhost:5000"],  # Frontend and backend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Azure OpenAI configuration (modern client approach)
# Note: OpenAI client will be initialized when needed to avoid startup errors
AZURE_OPENAI_ENDPOINT = ENVIRONMENT_CONFIG['AZURE_OPENAI_ENDPOINT']
AZURE_OPENAI_API_KEY = ENVIRONMENT_CONFIG['AZURE_OPENAI_API_KEY']
AZURE_OPENAI_API_VERSION = ENVIRONMENT_CONFIG['AZURE_OPENAI_API_VERSION']
AZURE_OPENAI_DEPLOYMENT = ENVIRONMENT_CONFIG['AZURE_OPENAI_DEPLOYMENT']

# Pydantic models
class BusinessData(BaseModel):
    business_name: str
    industry: str
    size: str
    location: str
    monthly_kwh: float
    monthly_therms: float
    sustainability_goals: List[str]

class Recommendation(BaseModel):
    id: str
    title: str
    description: str
    category: str
    estimated_cost_savings: float
    estimated_co2_reduction: float
    roi_months: int
    difficulty: str
    priority_score: float

class RecommendationResponse(BaseModel):
    recommendations: List[Recommendation]
    total_potential_savings: float
    total_co2_reduction: float

# Health check endpoint
@app.get("/health")
async def health_check():
    return {
        "status": "OK",
        "message": "Casgo ML Service is running",
        "version": "1.0.0",
        "environment": {
            "debug_mode": ENVIRONMENT_CONFIG['DEBUG'],
            "port": ENVIRONMENT_CONFIG['ML_SERVICE_PORT'],
            "azure_openai_configured": bool(AZURE_OPENAI_API_KEY),
            "azure_openai_endpoint_configured": bool(AZURE_OPENAI_ENDPOINT),
            "azure_openai_deployment_configured": bool(AZURE_OPENAI_DEPLOYMENT),
            "python_version": "3.13.2"
        }
    }

# Basic recommendation endpoint (rules-based for now)
@app.post("/recommendations", response_model=RecommendationResponse)
async def generate_recommendations(business_data: BusinessData):
    try:
        # For MVP, we'll use rules-based recommendations
        # This will be enhanced with Azure OpenAI in future tasks
        recommendations = generate_rules_based_recommendations(business_data)
        
        total_savings = sum(rec.estimated_cost_savings for rec in recommendations)
        total_co2 = sum(rec.estimated_co2_reduction for rec in recommendations)
        
        return RecommendationResponse(
            recommendations=recommendations,
            total_potential_savings=total_savings,
            total_co2_reduction=total_co2
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating recommendations: {str(e)}")

def generate_rules_based_recommendations(business_data: BusinessData) -> List[Recommendation]:
    """Generate recommendations based on business rules"""
    recommendations = []
    
    # LED lighting recommendation
    if business_data.monthly_kwh > 1000:
        led_savings = business_data.monthly_kwh * 0.3 * 0.12  # 30% reduction, $0.12/kWh
        recommendations.append(Recommendation(
            id="led-retrofit",
            title="LED Lighting Retrofit",
            description="Replace traditional lighting with energy-efficient LED bulbs",
            category="Energy Efficiency",
            estimated_cost_savings=led_savings * 12,  # Annual savings
            estimated_co2_reduction=business_data.monthly_kwh * 0.3 * 0.92 * 12,  # CO2 factor
            roi_months=18,
            difficulty="Easy",
            priority_score=0.8
        ))
    
    # HVAC optimization
    if business_data.monthly_kwh > 2000:
        hvac_savings = business_data.monthly_kwh * 0.15 * 0.12
        recommendations.append(Recommendation(
            id="hvac-optimization",
            title="HVAC System Optimization",
            description="Optimize heating and cooling systems for better efficiency",
            category="Energy Efficiency", 
            estimated_cost_savings=hvac_savings * 12,
            estimated_co2_reduction=business_data.monthly_kwh * 0.15 * 0.92 * 12,
            roi_months=24,
            difficulty="Medium",
            priority_score=0.7
        ))
    
    # Energy audit recommendation
    recommendations.append(Recommendation(
        id="energy-audit",
        title="Professional Energy Audit",
        description="Comprehensive assessment to identify additional savings opportunities",
        category="Assessment",
        estimated_cost_savings=business_data.monthly_kwh * 0.1 * 0.12 * 12,
        estimated_co2_reduction=business_data.monthly_kwh * 0.1 * 0.92 * 12,
        roi_months=6,
        difficulty="Easy",
        priority_score=0.9
    ))
    
    # Sort by priority score
    recommendations.sort(key=lambda x: x.priority_score, reverse=True)
    
    return recommendations[:5]  # Return top 5 recommendations

# Carbon footprint calculation endpoint
@app.post("/calculate-footprint")
async def calculate_carbon_footprint(business_data: BusinessData):
    """Calculate baseline carbon footprint"""
    try:
        # Basic CO2 calculations (simplified)
        electricity_co2 = business_data.monthly_kwh * 0.92  # lbs CO2 per kWh
        gas_co2 = business_data.monthly_therms * 11.7  # lbs CO2 per therm
        
        monthly_total = electricity_co2 + gas_co2
        annual_total = monthly_total * 12
        
        return {
            "monthly_co2_lbs": round(monthly_total, 2),
            "annual_co2_lbs": round(annual_total, 2),
            "annual_co2_tons": round(annual_total / 2000, 2),
            "breakdown": {
                "electricity_co2_lbs": round(electricity_co2, 2),
                "gas_co2_lbs": round(gas_co2, 2)
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calculating footprint: {str(e)}")

# Test endpoint for development
@app.get("/test")
async def test_endpoint():
    return {
        "message": "Casgo ML Service test endpoint",
        "environment": "development",
        "endpoints": [
            "/health",
            "/recommendations",
            "/calculate-footprint",
            "/docs",
            "/redoc"
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app", 
        host="0.0.0.0", 
        port=ENVIRONMENT_CONFIG['ML_SERVICE_PORT'], 
        reload=ENVIRONMENT_CONFIG['DEBUG']
    ) 