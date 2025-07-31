import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('renders the Casgo heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { name: /reduce costs & carbon footprints/i })

    expect(heading).toBeInTheDocument()
  })

  it('renders the get started button', () => {
    render(<Home />)

    const button = screen.getByRole('button', { name: /get started/i })

    expect(button).toBeInTheDocument()
  })
}) 