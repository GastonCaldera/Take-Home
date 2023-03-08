import { render, screen, logRoles } from '@testing-library/react';
import Home from './index';
import '@testing-library/jest-dom';

describe('Home inital state', () => {
  it('render Header', () => {
    render(<Home />);
    const title1 = screen.getByText(/Take-Home$/i);
    const title2 = screen.getByText(/The best way to track your commits!$/i);
    expect(title1).toHaveClass('aos-animate');
    expect(title2).toHaveClass('aos-animate');
  });
  it('render search bar', async () => {
    const { container } = render(<Home />);
    const searchBox = container.getElementsByClassName('search_box');
    const searchInput = screen.getByTestId(/searchInput$/i);
    const searchButton = screen.getByRole('button', { name: /search$/i });
    expect(searchBox[0]).toHaveClass('aos-animate');
    expect(searchInput).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
  });
  it('Elements that should not be in the initial state', async () => {
    render(<Home />);
    const loading = screen.queryByTestId(/loading$/i);
    const errorMessage = screen.queryByText(/Something went wrong 😓.$/i);
    const commitsTable = screen.queryByTestId(/tableContainer$/i);
    const tablePaginaton = screen.queryByTestId(/tablePaginaton$/i);
    expect(loading).not.toBeInTheDocument()
    expect(errorMessage).not.toBeInTheDocument()
    expect(commitsTable).not.toBeInTheDocument()
    expect(tablePaginaton).not.toBeInTheDocument()
  });
});