'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Chart container variants
const chartVariants = cva(
  [
    'w-full',
    'rounded-lg',
    'border',
    'bg-white',
    'overflow-hidden',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-gray-200',
          'shadow-sm',
        ],
        elevated: [
          'border-gray-200',
          'shadow-md',
        ],
        outlined: [
          'border-2',
          'border-gray-300',
          'shadow-none',
        ],
        primary: [
          'border-primary-200',
          'bg-primary-50',
          'shadow-sm',
        ],
      },
      size: {
        sm: ['h-48'],
        md: ['h-64'],
        lg: ['h-80'],
        xl: ['h-96'],
      },
      padding: {
        none: ['p-0'],
        sm: ['p-2'],
        md: ['p-4'],
        lg: ['p-6'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      padding: 'md',
    },
  }
);

// Sustainability color palette for charts
const SUSTAINABILITY_COLORS = {
  primary: '#22c55e', // green-500
  secondary: '#06b6d4', // cyan-500
  tertiary: '#84cc16', // lime-500
  quaternary: '#10b981', // emerald-500
  warning: '#f59e0b', // amber-500
  error: '#ef4444', // red-500
  neutral: '#6b7280', // gray-500
  success: '#16a34a', // green-600
};

const DEFAULT_COLORS = [
  SUSTAINABILITY_COLORS.primary,
  SUSTAINABILITY_COLORS.secondary,
  SUSTAINABILITY_COLORS.tertiary,
  SUSTAINABILITY_COLORS.quaternary,
  SUSTAINABILITY_COLORS.warning,
  SUSTAINABILITY_COLORS.error,
];

// Chart data interfaces
export interface ChartDataPoint {
  [key: string]: string | number;
}

export interface ChartSeries {
  dataKey: string;
  name?: string;
  color?: string;
  strokeWidth?: number;
  fill?: string;
  stroke?: string;
}

// Base chart props
export interface BaseChartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chartVariants> {
  /**
   * Chart data array
   */
  data: ChartDataPoint[];
  /**
   * Chart title
   */
  title?: string;
  /**
   * Chart subtitle or description
   */
  subtitle?: string;
  /**
   * Data series configuration
   */
  series: ChartSeries[];
  /**
   * X-axis data key
   */
  xAxisKey?: string;
  /**
   * Show grid lines
   */
  showGrid?: boolean;
  /**
   * Show tooltip
   */
  showTooltip?: boolean;
  /**
   * Show legend
   */
  showLegend?: boolean;
  /**
   * Custom colors array
   */
  colors?: string[];
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

// Specific chart type props
export interface LineChartProps extends BaseChartProps {
  type: 'line';
  /**
   * Line curve type
   */
  curve?: 'linear' | 'natural' | 'monotone' | 'step';
  /**
   * Show data points
   */
  showPoints?: boolean;
}

export interface AreaChartProps extends BaseChartProps {
  type: 'area';
  /**
   * Area curve type
   */
  curve?: 'linear' | 'natural' | 'monotone' | 'step';
  /**
   * Stack areas
   */
  stacked?: boolean;
}

export interface BarChartProps extends BaseChartProps {
  type: 'bar';
  /**
   * Stack bars
   */
  stacked?: boolean;
  /**
   * Bar layout orientation
   */
  layout?: 'horizontal' | 'vertical';
}

export interface PieChartProps extends Omit<BaseChartProps, 'xAxisKey' | 'showGrid'> {
  type: 'pie';
  /**
   * Data key for values
   */
  valueKey: string;
  /**
   * Data key for labels
   */
  labelKey: string;
  /**
   * Show labels on pie slices
   */
  showLabels?: boolean;
  /**
   * Inner radius for donut chart
   */
  innerRadius?: number;
}

// Union type for all chart props
export type ChartProps = LineChartProps | AreaChartProps | BarChartProps | PieChartProps;

// Loading skeleton component
const ChartSkeleton = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      <div className="h-2 bg-gray-200 rounded w-1/4"></div>
      <div className="flex-1 bg-gray-200 rounded"></div>
    </div>
  );
};

// Chart header component
const ChartHeader = ({ title, subtitle }: { title?: string; subtitle?: string }) => {
  if (!title && !subtitle) return null;

  return (
    <div className="mb-4">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-medium text-gray-900 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

/**
 * Chart Component
 * 
 * A comprehensive, accessible chart component wrapper around Recharts with multiple
 * chart types, sustainability theming, and consistent styling.
 * 
 * @example
 * ```tsx
 * // Line chart
 * <Chart
 *   type="line"
 *   data={energyData}
 *   series={[{ dataKey: 'usage', name: 'Energy Usage', color: '#22c55e' }]}
 *   xAxisKey="month"
 *   title="Energy Usage Trend"
 *   subtitle="Last 12 months"
 * />
 * 
 * // Pie chart
 * <Chart
 *   type="pie"
 *   data={emissionsData}
 *   series={[]}
 *   valueKey="value"
 *   labelKey="source"
 *   title="Emissions by Source"
 * />
 * ```
 */
export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  (props, ref) => {
    const {
      // Container props
      className,
      variant,
      size,
      padding,
      // Custom logic props
      loading,
      title,
      subtitle,
      data,
      series,
      colors = DEFAULT_COLORS,
      // Chart-type specific props are captured here but handled inside renderChart
      // The rest are valid div props
      ...rest
    } = props;

    // Handle optional properties with defaults
    const showGrid = 'showGrid' in props ? props.showGrid : true;
    const showTooltip = 'showTooltip' in props ? props.showTooltip : true;
    const showLegend = 'showLegend' in props ? props.showLegend : true;

    if (loading) {
      return (
        <div
          ref={ref}
          className={cn(chartVariants({ variant, size, padding }), className)}
        >
          <ChartSkeleton size={size} />
        </div>
      );
    }
    
    const renderChart = () => {
      switch (props.type) {
        case 'line':
          return (
            <LineChart data={data}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />}
              <XAxis 
                dataKey={props.xAxisKey || 'name'} 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis stroke="#6b7280" fontSize={12} />
              {showTooltip && <Tooltip content={<CustomTooltip />} />}
              {showLegend && <Legend />}
              {series.map((s, index) => (
                <Line
                  key={s.dataKey}
                  type={props.curve || 'monotone'}
                  dataKey={s.dataKey}
                  stroke={s.color || colors[index % colors.length]}
                  strokeWidth={s.strokeWidth || 2}
                  name={s.name || s.dataKey}
                  dot={props.showPoints !== false}
                  activeDot={{ r: 4, fill: s.color || colors[index % colors.length] }}
                />
              ))}
            </LineChart>
          );

        case 'area':
          return (
            <AreaChart data={data}>
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />}
              <XAxis 
                dataKey={props.xAxisKey || 'name'} 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis stroke="#6b7280" fontSize={12} />
              {showTooltip && <Tooltip content={<CustomTooltip />} />}
              {showLegend && <Legend />}
              {series.map((s, index) => (
                <Area
                  key={s.dataKey}
                  type={props.curve || 'monotone'}
                  dataKey={s.dataKey}
                  stackId={props.stacked ? '1' : undefined}
                  stroke={s.stroke || s.color || colors[index % colors.length]}
                  fill={s.fill || s.color || colors[index % colors.length]}
                  fillOpacity={0.6}
                  name={s.name || s.dataKey}
                />
              ))}
            </AreaChart>
          );

        case 'bar':
          return (
            <BarChart 
              data={data}
              layout={props.layout || 'vertical'}
            >
              {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />}
              <XAxis 
                dataKey={props.xAxisKey || 'name'} 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis stroke="#6b7280" fontSize={12} />
              {showTooltip && <Tooltip content={<CustomTooltip />} />}
              {showLegend && <Legend />}
              {series.map((s, index) => (
                <Bar
                  key={s.dataKey}
                  dataKey={s.dataKey}
                  stackId={props.stacked ? '1' : undefined}
                  fill={s.fill || s.color || colors[index % colors.length]}
                  name={s.name || s.dataKey}
                />
              ))}
            </BarChart>
          );

        case 'pie':
          return (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={props.showLabels ? (entry) => entry[props.labelKey] : false}
                outerRadius="80%"
                innerRadius={props.innerRadius || 0}
                fill="#8884d8"
                dataKey={props.valueKey}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              {showTooltip && <Tooltip content={<CustomTooltip />} />}
              {showLegend && <Legend />}
            </PieChart>
          );

        default:
          return <div className="text-center text-gray-500">Unsupported chart type</div>;
      }
    };
    
    // Filter out chart-specific props from rest to get clean div props
    // We use type assertion here because we know the structure of our props
    const chartSpecificProps = ['type', 'xAxisKey', 'curve', 'showPoints', 'stacked', 'layout', 'valueKey', 'labelKey', 'showLabels', 'innerRadius', 'showGrid', 'showTooltip', 'showLegend'];
    const divProps = Object.fromEntries(
      Object.entries(rest).filter(([key]) => !chartSpecificProps.includes(key))
    );

    return (
      <div
        ref={ref}
        className={cn(chartVariants({ variant, size, padding }), className)}
        {...divProps}
      >
        <ChartHeader title={title} subtitle={subtitle} />
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    );
  }
);

Chart.displayName = 'Chart';

// Export chart variants and colors for external use
export { chartVariants, SUSTAINABILITY_COLORS, DEFAULT_COLORS };

// Preset chart configurations for common sustainability metrics
export const SustainabilityChartPresets = {
  energyUsage: {
    colors: [SUSTAINABILITY_COLORS.primary, SUSTAINABILITY_COLORS.secondary],
    series: [
      { dataKey: 'electricity', name: 'Electricity (kWh)', color: SUSTAINABILITY_COLORS.primary },
      { dataKey: 'gas', name: 'Natural Gas (therms)', color: SUSTAINABILITY_COLORS.secondary },
    ],
  },
  carbonEmissions: {
    colors: [SUSTAINABILITY_COLORS.error, SUSTAINABILITY_COLORS.warning, SUSTAINABILITY_COLORS.success],
    series: [
      { dataKey: 'scope1', name: 'Scope 1', color: SUSTAINABILITY_COLORS.error },
      { dataKey: 'scope2', name: 'Scope 2', color: SUSTAINABILITY_COLORS.warning },
      { dataKey: 'scope3', name: 'Scope 3', color: SUSTAINABILITY_COLORS.success },
    ],
  },
  goalProgress: {
    colors: [SUSTAINABILITY_COLORS.primary, SUSTAINABILITY_COLORS.neutral],
    series: [
      { dataKey: 'actual', name: 'Actual', color: SUSTAINABILITY_COLORS.primary },
      { dataKey: 'target', name: 'Target', color: SUSTAINABILITY_COLORS.neutral },
    ],
  },
};

// Helper function to format chart data
export const formatChartData = (
  data: any[],
  options: {
    xKey: string;
    yKeys: string[];
    formatY?: (value: number) => number;
  }
) => {
  return data.map((item) => {
    const formatted: ChartDataPoint = { [options.xKey]: item[options.xKey] };
    options.yKeys.forEach((key) => {
      formatted[key] = options.formatY ? options.formatY(item[key]) : item[key];
    });
    return formatted;
  });
}; 