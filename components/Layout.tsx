'use client';

import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui';

// Navigation items interface
interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

// Layout component props
interface LayoutProps {
  children: React.ReactNode;
  /**
   * Current page for navigation highlighting
   */
  currentPage?: string;
  /**
   * Whether to show the navigation header
   */
  showNav?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Custom navigation items
   */
  navItems?: NavItem[];
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Goals', href: '/goals' },
  { label: 'Reports', href: '/reports' },
  { label: 'Recommendations', href: '/recommendations' },
];

// Navigation icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CasgoIcon = () => (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
    <span className="text-xl font-bold text-gray-900">Casgo</span>
  </div>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const NotificationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM15 17H9a6 6 0 01-6-6V5a2 2 0 012-2h10a2 2 0 012 2v6a6 6 0 01-6 6z" />
  </svg>
);

/**
 * Navigation Header Component
 * 
 * Responsive navigation header with mobile menu support
 */
const NavigationHeader = ({ 
  currentPage, 
  navItems = defaultNavItems 
}: { 
  currentPage?: string; 
  navItems?: NavItem[];
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <CasgoIcon />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200',
                  currentPage === item.href || item.isActive
                    ? 'text-primary-600 border-b-2 border-primary-500'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
                )}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <NotificationIcon />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">2</span>
              </span>
            </Button>

            {/* User Menu */}
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <UserIcon />
              <span className="text-sm font-medium text-gray-700">John Doe</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out',
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        )}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
                currentPage === item.href || item.isActive
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                {item.icon && <span className="mr-3">{item.icon}</span>}
                {item.label}
              </div>
            </a>
          ))}
          
          {/* Mobile user section */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <UserIcon />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-700">John Doe</div>
                <div className="text-xs text-gray-500">john@company.com</div>
              </div>
              <div className="ml-auto">
                <Button variant="ghost" size="sm">
                  <NotificationIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

/**
 * Main Content Area Component
 */
const MainContent = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  return (
    <main className={cn('flex-1 overflow-auto', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </main>
  );
};

/**
 * Footer Component
 */
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500 mx-2">
              <span className="sr-only">Help</span>
              Help
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 mx-2">
              <span className="sr-only">Privacy</span>
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 mx-2">
              <span className="sr-only">Terms</span>
              Terms
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-sm text-gray-500">
              &copy; 2025 Casgo Sustainability. Empowering sustainable business transformation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 * Layout Component
 * 
 * Main layout wrapper with responsive navigation, content area, and footer.
 * Provides consistent structure across all application pages.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Layout currentPage="/dashboard">
 *   <DashboardContent />
 * </Layout>
 * 
 * // With custom navigation
 * <Layout 
 *   currentPage="/custom"
 *   navItems={[
 *     { label: 'Custom Page', href: '/custom', isActive: true }
 *   ]}
 * >
 *   <CustomPageContent />
 * </Layout>
 * 
 * // Without navigation
 * <Layout showNav={false}>
 *   <LoginPage />
 * </Layout>
 * ```
 */
export const Layout: React.FC<LayoutProps> = ({
  children,
  currentPage,
  showNav = true,
  className,
  navItems,
}) => {
  return (
    <div className={cn('min-h-screen flex flex-col bg-gray-50', className)}>
      {/* Navigation Header */}
      {showNav && (
        <NavigationHeader currentPage={currentPage} navItems={navItems} />
      )}

      {/* Main Content */}
      <MainContent className={showNav ? '' : 'pt-0'}>
        {children}
      </MainContent>

      {/* Footer */}
      <Footer />
    </div>
  );
};

Layout.displayName = 'Layout';

// Export sub-components for advanced usage
export { NavigationHeader, MainContent, Footer };

// Export types
export type { LayoutProps, NavItem }; 