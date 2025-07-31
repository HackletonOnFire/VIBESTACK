'use client';

import { Button, ButtonGroup, Input, Textarea, Card, CardHeader, CardContent, CardFooter, CardGrid, Chart, SustainabilityChartPresets, Spinner, CircularSpinner, PulseDotsSpinner, BouncingBallsSpinner, WaveSpinner, SustainabilitySpinner, LoadingOverlay, ProgressBar, Skeleton, microInteractions } from '../../components/ui';

// Demo icons
const PlusIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Casgo Sustainability
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Transform your business with AI-powered sustainability insights and carbon footprint optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" rightIcon={<ArrowIcon />}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Button Component Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Design System Showcase
            </h2>

            {/* Button Variants */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="error">Error</Button>
                  <Button variant="link">Link Style</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Button Sizes</h3>
                <div className="flex flex-wrap items-end gap-4">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              {/* Button States */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Button States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Normal</Button>
                  <Button loading loadingText="Saving changes...">Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button leftIcon={<PlusIcon />}>With Left Icon</Button>
                  <Button rightIcon={<ArrowIcon />}>With Right Icon</Button>
                </div>
              </div>

              {/* Input Components Showcase */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Input Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Inputs */}
                  <div className="space-y-4">
                    <Input 
                      label="Name" 
                      placeholder="Enter your name"
                      helperText="This will be used for personalization"
                    />
                    <Input 
                      label="Email" 
                      type="email"
                      leftIcon={<EmailIcon />}
                      placeholder="Enter your email"
                      required
                    />
                    <Input 
                      label="Search"
                      leftIcon={<SearchIcon />}
                      placeholder="Search sustainability goals..."
                    />
                  </div>
                  
                  {/* Validation States */}
                  <div className="space-y-4">
                    <Input 
                      label="Success State"
                      variant="success"
                      defaultValue="valid@email.com"
                      successMessage="This email is available!"
                    />
                    <Input 
                      label="Error State"
                      variant="error"
                      defaultValue="invalid-email"
                      errorMessage="Please enter a valid email address"
                    />
                    <Input 
                      label="Disabled Input"
                      disabled
                      placeholder="This input is disabled"
                    />
                  </div>
                </div>
                
                {/* Textarea */}
                <div className="mt-6">
                  <Textarea 
                    label="Sustainability Goals"
                    placeholder="Describe your organization's sustainability objectives..."
                    helperText="Be specific about your environmental targets and timelines"
                    rows={3}
                  />
                </div>
              </div>

              {/* Card Components Showcase */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Card Components</h3>
                
                {/* Card Variants */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4 text-gray-700">Card Variants</h4>
                  <CardGrid columns={4} gap="md">
                    <Card variant="default">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Default Card</h5>
                        <p className="text-sm text-gray-600">Standard card with subtle shadow</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="elevated">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Elevated Card</h5>
                        <p className="text-sm text-gray-600">Prominent shadow for emphasis</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="outlined">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Outlined Card</h5>
                        <p className="text-sm text-gray-600">Clean border without shadow</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="interactive" onClick={() => alert('Card clicked!')}>
                      <CardContent>
                        <h5 className="font-semibold mb-2">Interactive Card</h5>
                        <p className="text-sm text-gray-600">Clickable with hover effects</p>
                      </CardContent>
                    </Card>
                  </CardGrid>
                </div>

                {/* Themed Cards */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4 text-gray-700">Themed Cards</h4>
                  <CardGrid columns={4} gap="md">
                    <Card variant="primary">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Primary Card</h5>
                        <p className="text-sm text-green-700">Sustainability themed</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="success">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Success Card</h5>
                        <p className="text-sm text-green-700">For positive outcomes</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="warning">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Warning Card</h5>
                        <p className="text-sm text-yellow-700">Attention needed</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="error">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Error Card</h5>
                        <p className="text-sm text-red-700">Critical issues</p>
                      </CardContent>
                    </Card>
                  </CardGrid>
                </div>

                {/* Card with Header and Footer */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4 text-gray-700">Complete Card Structure</h4>
                  <CardGrid columns={2} gap="lg">
                    <Card variant="elevated" size="lg">
                      <CardHeader 
                        title="Energy Usage Report" 
                        subtitle="Last 30 days"
                        actions={<Button size="sm" variant="ghost">View All</Button>}
                      />
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Electricity:</span>
                            <span className="font-semibold">1,245 kWh</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Natural Gas:</span>
                            <span className="font-semibold">89 therms</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">CO2 Emissions:</span>
                            <span className="font-semibold text-primary-600">2.1 tons</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="primary" size="sm">
                          Download Report
                        </Button>
                        <Button variant="outline" size="sm">
                          Set Goals
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card variant="primary" size="lg">
                      <CardHeader 
                        title="Sustainability Goals" 
                        subtitle="Progress overview"
                      />
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-green-700">Reduce emissions by 25%</span>
                              <span className="text-sm font-medium">65%</span>
                            </div>
                            <div className="w-full bg-green-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-green-700">Switch to renewable energy</span>
                              <span className="text-sm font-medium">40%</span>
                            </div>
                            <div className="w-full bg-green-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{width: '40%'}}></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="secondary" size="sm" leftIcon={<PlusIcon />}>
                          Add Goal
                        </Button>
                      </CardFooter>
                    </Card>
                  </CardGrid>
                </div>

                {/* Card Sizes */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-4 text-gray-700">Card Sizes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card variant="outlined" size="sm">
                      <CardContent>
                        <h5 className="font-semibold text-sm mb-1">Small Card</h5>
                        <p className="text-xs text-gray-600">Compact size for widgets</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="outlined" size="md">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Medium Card</h5>
                        <p className="text-sm text-gray-600">Default size for most content</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="outlined" size="lg">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Large Card</h5>
                        <p className="text-sm text-gray-600">More spacious for detailed content</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="outlined" size="xl">
                      <CardContent>
                        <h5 className="font-semibold mb-2">Extra Large</h5>
                        <p className="text-sm text-gray-600">Maximum spacing for hero content</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Loading State */}
                <div>
                  <h4 className="text-lg font-medium mb-4 text-gray-700">Loading State</h4>
                  <Card variant="elevated" size="md" loading={true} />
                </div>
              </div>

              {/* Chart Components Showcase */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Chart Components</h3>
                
                {/* Sample data for charts */}
                {(() => {
                  const energyData = [
                    { month: 'Jan', electricity: 1200, gas: 85, target: 1100 },
                    { month: 'Feb', electricity: 1100, gas: 78, target: 1100 },
                    { month: 'Mar', electricity: 1000, gas: 70, target: 1100 },
                    { month: 'Apr', electricity: 950, gas: 65, target: 1100 },
                    { month: 'May', electricity: 900, gas: 60, target: 1100 },
                    { month: 'Jun', electricity: 850, gas: 55, target: 1100 },
                  ];

                  const emissionsData = [
                    { source: 'Electricity', value: 45, color: '#ef4444' },
                    { source: 'Natural Gas', value: 25, color: '#f59e0b' },
                    { source: 'Transportation', value: 20, color: '#22c55e' },
                    { source: 'Other', value: 10, color: '#06b6d4' },
                  ];

                  const goalProgressData = [
                    { metric: 'Energy Reduction', actual: 65, target: 100 },
                    { metric: 'Renewable Energy', actual: 40, target: 80 },
                    { metric: 'Waste Reduction', actual: 75, target: 90 },
                    { metric: 'Water Conservation', actual: 50, target: 70 },
                  ];

                  return (
                    <>
                      {/* Line Chart */}
                      <div className="mb-8">
                        <h4 className="text-lg font-medium mb-4 text-gray-700">Energy Usage Trend (Line Chart)</h4>
                        <Chart
                          type="line"
                          data={energyData}
                          series={SustainabilityChartPresets.energyUsage.series}
                          xAxisKey="month"
                          title="Energy Consumption Over Time"
                          subtitle="Electricity and natural gas usage by month"
                          variant="elevated"
                          size="lg"
                          showPoints={true}
                          curve="monotone"
                        />
                      </div>

                      {/* Area Chart */}
                      <div className="mb-8">
                        <h4 className="text-lg font-medium mb-4 text-gray-700">Stacked Area Chart</h4>
                        <Chart
                          type="area"
                          data={energyData}
                          series={[
                            { dataKey: 'electricity', name: 'Electricity (kWh)', color: '#22c55e' },
                            { dataKey: 'gas', name: 'Natural Gas (therms)', color: '#06b6d4' },
                          ]}
                          xAxisKey="month"
                          title="Cumulative Energy Usage"
                          subtitle="Stacked view of energy consumption"
                          variant="primary"
                          size="md"
                          stacked={true}
                        />
                      </div>

                      {/* Charts Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Bar Chart */}
                        <Chart
                          type="bar"
                          data={goalProgressData}
                          series={SustainabilityChartPresets.goalProgress.series}
                          xAxisKey="metric"
                          title="Goal Progress"
                          subtitle="Actual vs target metrics"
                          variant="outlined"
                          size="md"
                          stacked={false}
                        />

                        {/* Pie Chart */}
                        <Chart
                          type="pie"
                          data={emissionsData}
                          series={[]}
                          valueKey="value"
                          labelKey="source"
                          title="Emissions by Source"
                          subtitle="Carbon footprint breakdown"
                          variant="elevated"
                          size="md"
                          showLabels={true}
                        />
                      </div>

                      {/* Donut Chart */}
                      <div className="mb-8">
                        <h4 className="text-lg font-medium mb-4 text-gray-700">Donut Chart (Pie with Inner Radius)</h4>
                        <div className="max-w-md mx-auto">
                          <Chart
                            type="pie"
                            data={emissionsData}
                            series={[]}
                            valueKey="value"
                            labelKey="source"
                            title="Carbon Footprint Distribution"
                            subtitle="Total: 2.1 tons CO2e"
                            variant="primary"
                            size="md"
                            innerRadius={60}
                            showLabels={false}
                          />
                        </div>
                      </div>

                      {/* Chart States */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Loading State */}
                        <Chart
                          type="line"
                          data={[]}
                          series={[]}
                          title="Loading Chart"
                          subtitle="Skeleton animation"
                          variant="outlined"
                          size="md"
                          loading={true}
                        />

                        {/* Minimal Chart */}
                        <Chart
                          type="line"
                          data={energyData.slice(0, 4)}
                          series={[{ dataKey: 'electricity', name: 'Usage', color: '#22c55e' }]}
                          xAxisKey="month"
                          title="Minimal Chart"
                          subtitle="Simple line with no grid"
                          variant="default"
                          size="md"
                          showGrid={false}
                          showLegend={false}
                        />
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Loading Components Showcase */}
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6 text-primary-900">
                  Loading Components
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Spinner</h4>
                    <div className="flex items-center gap-4">
                      <Spinner />
                      <CircularSpinner />
                      <PulseDotsSpinner />
                      <BouncingBallsSpinner />
                      <WaveSpinner />
                      <SustainabilitySpinner />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Loading Overlay</h4>
                    <LoadingOverlay />
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium mb-2 text-gray-800">ProgressBar</h4>
                    <ProgressBar value={75} />
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Skeleton</h4>
                    <Skeleton />
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Micro Interactions</h4>
                    <div className="flex items-center gap-4">
                      <Button variant="primary" loading loadingText="Saving...">
                        Save
                      </Button>
                      <Button variant="secondary" loading loadingText="Loading...">
                        Load
                      </Button>
                      <Button variant="outline" loading loadingText="Processing...">
                        Process
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sustainability Actions */}
              <div className="bg-primary-50 rounded-2xl p-8 mt-16">
                <h3 className="text-2xl font-semibold mb-6 text-primary-900">
                  Sustainability Actions
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="success" leftIcon={<PlusIcon />} fullWidth>
                    Add Green Goal
                  </Button>
                  <Button variant="primary" rightIcon={<ArrowIcon />} fullWidth>
                    View Dashboard
                  </Button>
                  <Button variant="outline" fullWidth>
                    Upload CSV Data
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loading Components & Micro-interactions Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loading Components & Micro-interactions</h2>
            <p className="text-lg text-gray-600">Modern loading states and smooth micro-interactions</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              
              {/* Loading Spinners */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Loading Spinners</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Circular</h4>
                    <CircularSpinner size="lg" text="Loading..." />
                  </Card>
                  
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Pulse Dots</h4>
                    <PulseDotsSpinner size="lg" />
                  </Card>
                  
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Bouncing</h4>
                    <BouncingBallsSpinner size="lg" />
                  </Card>
                  
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Wave</h4>
                    <WaveSpinner size="lg" />
                  </Card>
                  
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Sustainability</h4>
                    <SustainabilitySpinner size="lg" text="Loading..." />
                  </Card>
                </div>
              </div>

              {/* Progress Bars */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Progress Indicators</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Default Progress</h4>
                    <ProgressBar value={75} showPercentage={true} />
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Success Progress</h4>
                    <ProgressBar value={90} variant="success" showPercentage={true} />
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Warning Progress</h4>
                    <ProgressBar value={45} variant="warning" showPercentage={true} />
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Error Progress</h4>
                    <ProgressBar value={25} variant="error" showPercentage={true} />
                  </Card>
                </div>
              </div>

              {/* Skeleton Loaders */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Skeleton Loaders</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Card Skeleton</h4>
                    <div className="space-y-3">
                      <Skeleton height="60px" rounded="lg" />
                      <Skeleton height="20px" width="80%" />
                      <Skeleton height="16px" width="60%" />
                      <div className="flex space-x-2">
                        <Skeleton height="32px" width="80px" rounded="md" />
                        <Skeleton height="32px" width="80px" rounded="md" />
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Profile Skeleton</h4>
                    <div className="flex items-center space-x-4">
                      <Skeleton width="64px" height="64px" rounded="full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton height="20px" width="70%" />
                        <Skeleton height="16px" width="50%" />
                        <Skeleton height="14px" width="40%" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Micro-interactions */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Micro-interactions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Button className={microInteractions.hoverScale} variant="primary">
                    Hover Scale
                  </Button>
                  
                  <Button className={`${microInteractions.hoverLift} hover-lift`} variant="secondary">
                    Hover Lift
                  </Button>
                  
                  <Button className={`${microInteractions.glow} hover-glow`} variant="primary">
                    Hover Glow
                  </Button>
                  
                  <Button className={`${microInteractions.press} press-scale`} variant="secondary">
                    Press Effect
                  </Button>
                </div>
              </div>

              {/* Animations */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Custom Animations</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Card className="p-4 animate-float">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Float</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4 animate-breathe">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-secondary-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Breathe</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4 animate-glow">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Glow</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gradient-sustainability rounded-full mx-auto mb-2"></div>
                      <p className="text-sm gradient-text">Gradient</p>
                    </div>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Loading Components & Micro-interactions Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loading Components & Micro-interactions</h2>
            <p className="text-lg text-gray-600">Modern loading states and smooth micro-interactions</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              
              {/* Loading Spinners */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Loading Spinners</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Circular</h4>
                    <CircularSpinner size="lg" text="Loading..." />
                  </Card>
                  
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Pulse Dots</h4>
                    <PulseDotsSpinner size="lg" />
                  </Card>
                  
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Bouncing</h4>
                    <BouncingBallsSpinner size="lg" />
                  </Card>
                  
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Wave</h4>
                    <WaveSpinner size="lg" />
                  </Card>
                  
                  <Card className="p-6 flex flex-col items-center">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Sustainability</h4>
                    <SustainabilitySpinner size="lg" text="Loading..." />
                  </Card>
                </div>
              </div>

              {/* Progress Bars */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Progress Indicators</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Default Progress</h4>
                    <ProgressBar value={75} showPercentage={true} />
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Success Progress</h4>
                    <ProgressBar value={90} variant="success" showPercentage={true} />
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Warning Progress</h4>
                    <ProgressBar value={45} variant="warning" showPercentage={true} />
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Error Progress</h4>
                    <ProgressBar value={25} variant="error" showPercentage={true} />
                  </Card>
                </div>
              </div>

              {/* Skeleton Loaders */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Skeleton Loaders</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Card Skeleton</h4>
                    <div className="space-y-3">
                      <Skeleton height="60px" rounded="lg" />
                      <Skeleton height="20px" width="80%" />
                      <Skeleton height="16px" width="60%" />
                      <div className="flex space-x-2">
                        <Skeleton height="32px" width="80px" rounded="md" />
                        <Skeleton height="32px" width="80px" rounded="md" />
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="text-sm font-medium mb-4 text-gray-700">Profile Skeleton</h4>
                    <div className="flex items-center space-x-4">
                      <Skeleton width="64px" height="64px" rounded="full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton height="20px" width="70%" />
                        <Skeleton height="16px" width="50%" />
                        <Skeleton height="14px" width="40%" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Micro-interactions */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Micro-interactions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Button className={microInteractions.hoverScale} variant="primary">
                    Hover Scale
                  </Button>
                  
                  <Button className="hover-lift" variant="secondary">
                    Hover Lift
                  </Button>
                  
                  <Button className="hover-glow" variant="primary">
                    Hover Glow
                  </Button>
                  
                  <Button className="press-scale" variant="secondary">
                    Press Effect
                  </Button>
                </div>
              </div>

              {/* Animations */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Custom Animations</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Card className="p-4 animate-float">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Float</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4 animate-breathe">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-secondary-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Breathe</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4 animate-glow">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Glow</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gradient-sustainability rounded-full mx-auto mb-2"></div>
                      <p className="text-sm gradient-text">Gradient</p>
                    </div>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Casgo Sustainability. Empowering sustainable business transformation.</p>
        </div>
      </footer>
    </main>
  );
}
