import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Input variants using class-variance-authority
const inputVariants = cva(
  [
    'flex',
    'w-full',
    'rounded-md',
    'border',
    'bg-white',
    'px-3',
    'py-2',
    'text-sm',
    'transition-all',
    'duration-200',
    'file:border-0',
    'file:bg-transparent',
    'file:text-sm',
    'file:font-medium',
    'placeholder:text-gray-400',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'disabled:bg-gray-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-gray-300',
          'focus:border-primary-500',
          'focus:ring-primary-500',
        ],
        success: [
          'border-green-300',
          'focus:border-green-500',
          'focus:ring-green-500',
          'bg-green-50',
        ],
        warning: [
          'border-yellow-300',
          'focus:border-yellow-500',
          'focus:ring-yellow-500',
          'bg-yellow-50',
        ],
        error: [
          'border-red-300',
          'focus:border-red-500',
          'focus:ring-red-500',
          'bg-red-50',
        ],
      },
      size: {
        sm: ['h-8', 'px-2', 'text-xs'],
        md: ['h-10', 'px-3', 'text-sm'],
        lg: ['h-12', 'px-4', 'text-base'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// Icon wrapper component for consistent sizing
const IconWrapper = ({ 
  children, 
  size = 'md',
  position = 'left'
}: { 
  children: React.ReactNode; 
  size?: 'sm' | 'md' | 'lg';
  position?: 'left' | 'right';
}) => {
  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const positionClasses = {
    left: 'left-3',
    right: 'right-3',
  };

  return (
    <div className={cn(
      'absolute top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none',
      positionClasses[position],
      iconSizes[size]
    )}>
      {children}
    </div>
  );
};

// Input component interface
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: React.ReactNode;
  /**
   * Label text for the input
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  /**
   * Error message to display below the input
   */
  errorMessage?: string;
  /**
   * Success message to display below the input
   */
  successMessage?: string;
  /**
   * Additional CSS classes for the container
   */
  containerClassName?: string;
  /**
   * Whether the field is required
   */
  required?: boolean;
}

/**
 * Input Component
 * 
 * A comprehensive, accessible input component with validation states, icons,
 * and helper text. Built with sustainability design principles.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Input placeholder="Enter your name" />
 * 
 * // With label and validation
 * <Input 
 *   label="Email" 
 *   variant="error" 
 *   errorMessage="Please enter a valid email"
 * />
 * 
 * // With icons
 * <Input 
 *   leftIcon={<SearchIcon />} 
 *   placeholder="Search..."
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      variant,
      size,
      leftIcon,
      rightIcon,
      label,
      helperText,
      errorMessage,
      successMessage,
      required,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    // Determine validation state
    const validationVariant = errorMessage 
      ? 'error' 
      : successMessage 
      ? 'success' 
      : variant;

    // Get padding based on icons
    const paddingLeft = leftIcon ? 
      size === 'sm' ? 'pl-8' : size === 'lg' ? 'pl-12' : 'pl-10' : '';
    const paddingRight = rightIcon ? 
      size === 'sm' ? 'pr-8' : size === 'lg' ? 'pr-12' : 'pr-10' : '';

    return (
      <div className={cn('space-y-2', containerClassName)}>
        {/* Label */}
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <IconWrapper size={size} position="left">
              {leftIcon}
            </IconWrapper>
          )}

          {/* Input */}
          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            className={cn(
              inputVariants({ variant: validationVariant, size }),
              paddingLeft,
              paddingRight,
              className
            )}
            aria-invalid={!!errorMessage}
            aria-describedby={
              errorMessage ? `${inputId}-error` :
              successMessage ? `${inputId}-success` :
              helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <IconWrapper size={size} position="right">
              {rightIcon}
            </IconWrapper>
          )}
        </div>

        {/* Helper/Error/Success Text */}
        {(helperText || errorMessage || successMessage) && (
          <div className="text-xs">
            {errorMessage && (
              <p id={`${inputId}-error`} className="text-red-600" role="alert">
                {errorMessage}
              </p>
            )}
            {successMessage && !errorMessage && (
              <p id={`${inputId}-success`} className="text-green-600">
                {successMessage}
              </p>
            )}
            {helperText && !errorMessage && !successMessage && (
              <p id={`${inputId}-helper`} className="text-gray-500">
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Export input variants for external use
export { inputVariants };

// Textarea component with similar styling
export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    Pick<InputProps, 'label' | 'helperText' | 'errorMessage' | 'successMessage' | 'containerClassName' | 'required'> {
  /**
   * Variant for styling
   */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /**
   * Size variant
   */
  size?: 'sm' | 'md' | 'lg';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      containerClassName,
      variant = 'default',
      size = 'md',
      label,
      helperText,
      errorMessage,
      successMessage,
      required,
      disabled,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const inputId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    
    const validationVariant = errorMessage 
      ? 'error' 
      : successMessage 
      ? 'success' 
      : variant;

    const sizeClasses = {
      sm: 'text-xs p-2',
      md: 'text-sm p-3',
      lg: 'text-base p-4',
    };

    return (
      <div className={cn('space-y-2', containerClassName)}>
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          id={inputId}
          ref={ref}
          disabled={disabled}
          rows={rows}
          className={cn(
            // Base styles
            'flex w-full rounded-md border bg-white transition-all duration-200',
            'placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
            'resize-y',
            // Size classes
            sizeClasses[size],
            // Variant classes
            validationVariant === 'error' && 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50',
            validationVariant === 'success' && 'border-green-300 focus:border-green-500 focus:ring-green-500 bg-green-50',
            validationVariant === 'warning' && 'border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 bg-yellow-50',
            validationVariant === 'default' && 'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
            className
          )}
          aria-invalid={!!errorMessage}
          aria-describedby={
            errorMessage ? `${inputId}-error` :
            successMessage ? `${inputId}-success` :
            helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />

        {(helperText || errorMessage || successMessage) && (
          <div className="text-xs">
            {errorMessage && (
              <p id={`${inputId}-error`} className="text-red-600" role="alert">
                {errorMessage}
              </p>
            )}
            {successMessage && !errorMessage && (
              <p id={`${inputId}-success`} className="text-green-600">
                {successMessage}
              </p>
            )}
            {helperText && !errorMessage && !successMessage && (
              <p id={`${inputId}-helper`} className="text-gray-500">
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea'; 