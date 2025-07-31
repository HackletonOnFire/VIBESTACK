import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../app/page'

// Mock the components that have complex dependencies
jest.mock('../../components/ui', () => ({
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  ButtonGroup: ({ children }: any) => <div>{children}</div>,
  Input: ({ label, ...props }: any) => (
    <div>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  ),
  Textarea: ({ label, ...props }: any) => (
    <div>
      {label && <label>{label}</label>}
      <textarea {...props} />
    </div>
  ),
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardHeader: ({ title, subtitle, children, ...props }: any) => (
    <div {...props}>
      {children || (
        <>
          {title && <h3>{title}</h3>}
          {subtitle && <p>{subtitle}</p>}
        </>
      )}
    </div>
  ),
  CardContent: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardFooter: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardGrid: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Chart: ({ title, subtitle, children, ...props }: any) => (
    <div {...props}>
      {title && <h4>{title}</h4>}
      {subtitle && <h5>{subtitle}</h5>}
      {children}
    </div>
  ),
  SustainabilityChartPresets: {
    energyUsage: {
      series: [],
    },
    goalProgress: {
      series: [],
    },
  },
}))

describe('Home', () => {
  it('renders the Casgo Sustainability heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { name: /casgo sustainability/i })

    expect(heading).toBeInTheDocument()
  })

  it('renders the get started button', () => {
    render(<Home />)

    const button = screen.getByRole('button', { name: /get started/i })

    expect(button).toBeInTheDocument()
  })

  it('renders the design system showcase section', () => {
    render(<Home />)

    const showcaseHeading = screen.getByRole('heading', { name: /design system showcase/i })

    expect(showcaseHeading).toBeInTheDocument()
  })

  it('renders button variants section', () => {
    render(<Home />)

    const variantsHeading = screen.getByRole('heading', { name: /button variants/i })

    expect(variantsHeading).toBeInTheDocument()
  })

  it('renders input components section', () => {
    render(<Home />)

    const inputHeading = screen.getByRole('heading', { name: /input components/i })

    expect(inputHeading).toBeInTheDocument()
  })
}) 