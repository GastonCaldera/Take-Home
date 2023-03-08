import { render, screen, waitFor, logRoles } from '@testing-library/react';
import Home from '../../pages/index';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Home inital state', () => {
  it('Check Header', () => {
    render(<Home />);
    const title1 = screen.getByText(/Take-Home$/i);
    const title2 = screen.getByText(/The best way to track your commits!$/i);
    expect(title1).toHaveClass('aos-animate');
    expect(title2).toHaveClass('aos-animate');
  });
  it('Check search bar', () => {
    const { container } = render(<Home />);
    const searchBox = container.getElementsByClassName('search_box');
    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search$/i });
    expect(searchBox[0]).toHaveClass('aos-animate');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  it('Elements that should not be in the initial state', () => {
    render(<Home />);
    const loading = screen.queryByTestId(/loading$/i);
    const errorMessage = screen.queryByText(/Something went wrong 😓.$/i);
    const commitsTable = screen.queryByTestId(/tableContainer$/i);
    const tablePaginaton = screen.queryByTestId(/tablePaginaton$/i);
    expect(loading).not.toBeInTheDocument();
    expect(errorMessage).not.toBeInTheDocument();
    expect(commitsTable).not.toBeInTheDocument();
    expect(tablePaginaton).not.toBeInTheDocument();
  });
});

describe('home e2e test', () => {
  it('type the correct url in the input and click search button', async () => {
    render(<Home />);
    const user = userEvent.setup();
    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search$/i });

    // Adding url and clicking button
    await user.type(searchInput, 'https://github.com/GastonCaldera/Take-Home');
    await user.click(searchButton);

    // Expect button to be disable and loading visible 
    expect(searchButton).toBeDisabled();
    let loading = screen.queryByTestId(/loading$/i);
    expect(loading).toBeInTheDocument();

    // wait for response
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    })
    expect(searchButton).toBeEnabled();

    // Check if table exist and pagination exist
    let commitsTable = screen.queryByTestId(/tableContainer$/i);
    let tablePaginatonButtonLeft = screen.queryByTestId(/tablePaginatonButtonLeft$/i) as HTMLElement;
    let tablePaginatonButtonRight = screen.queryByTestId(/tablePaginatonButtonRight$/i) as HTMLElement;
    expect(commitsTable).toBeInTheDocument();
    expect(commitsTable).toHaveClass('aos-animate');
    expect(tablePaginatonButtonLeft).toBeInTheDocument();
    expect(tablePaginatonButtonRight).toBeInTheDocument();

    // Checking rows
    let tableRows = screen.getAllByRole('rowheader');
    expect(tableRows.length).toBeGreaterThanOrEqual(1)
    expect(tableRows.length).toBeLessThanOrEqual(10);

    // Adding new url and clicking button
    await userEvent.clear(searchInput);
    await user.type(searchInput, 'https://github.com/GastonCaldera/github-search');
    await user.click(searchButton);
    // Expect button to be disable and loading visible 
    expect(searchButton).toBeDisabled();
    loading = screen.queryByTestId(/loading$/i);
    expect(loading).toBeInTheDocument();

    // wait for response
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    })
    expect(searchButton).toBeEnabled();

    tableRows = screen.getAllByRole('rowheader');
    expect(tableRows.length).toBeGreaterThanOrEqual(1)
    expect(tableRows.length).toBeLessThanOrEqual(10)
  })
  it('Check button status and click event in pagination', async () => {
    render(<Home />);
    const user = userEvent.setup();
    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search$/i });

    // Adding url and clicking button
    await user.type(searchInput, 'https://github.com/GastonCaldera/Take-Home');
    await user.click(searchButton);
    let loading = screen.queryByTestId(/loading$/i);
    // wait for response
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    })
    expect(searchButton).toBeEnabled();

    // Check button status
    let tablePaginatonButtonLeft = screen.queryByTestId(/tablePaginatonButtonLeft$/i) as HTMLElement;
    let tablePaginatonButtonRight = screen.queryByTestId(/tablePaginatonButtonRight$/i) as HTMLElement;
    expect(tablePaginatonButtonLeft).toBeDisabled();
    expect(tablePaginatonButtonRight).toBeEnabled();

    // Click button
    await user.click(tablePaginatonButtonRight);
    loading = screen.queryByTestId(/loading$/i);

    // wait for response
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    })
    expect(searchButton).toBeEnabled();
    // Check if table exist and pagination exist
    tablePaginatonButtonLeft = screen.queryByTestId(/tablePaginatonButtonLeft$/i) as HTMLElement;
    tablePaginatonButtonRight = screen.queryByTestId(/tablePaginatonButtonRight$/i) as HTMLElement;
    expect(tablePaginatonButtonLeft).toBeInTheDocument();
    expect(tablePaginatonButtonRight).toBeInTheDocument();
    expect(tablePaginatonButtonLeft).toBeEnabled();
    expect(tablePaginatonButtonRight).toBeEnabled();
  })
  it('Adding new url and clicking button', async () => {
    render(<Home />);
    const user = userEvent.setup();
    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search$/i });

    // Adding url and clicking button
    await user.type(searchInput, 'https://github.com/GastonCaldera/Take-Home');
    await user.click(searchButton);
    let loading = screen.queryByTestId(/loading$/i);

    // wait for response
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    })

    // Check if table exist
    let commitsTable = screen.queryByTestId(/tableContainer$/i);
    expect(commitsTable).toBeInTheDocument();
    expect(commitsTable).toHaveClass('aos-animate');

    // Adding new url and clicking button
    await userEvent.clear(searchInput);
    await user.type(searchInput, 'https://github.com/GastonCaldera/github-search');
    await user.click(searchButton);
    // Expect button to be disable and loading visible 
    expect(searchButton).toBeDisabled();
    loading = screen.queryByTestId(/loading$/i);
    expect(loading).toBeInTheDocument();

    // wait for response
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    })
    expect(searchButton).toBeEnabled();

    // Check if table exist 
    commitsTable = screen.queryByTestId(/tableContainer$/i);
    let tablePaginatonButtonLeft = screen.queryByTestId(/tablePaginatonButtonLeft$/i) as HTMLElement;
    let tablePaginatonButtonRight = screen.queryByTestId(/tablePaginatonButtonRight$/i) as HTMLElement;
    expect(commitsTable).toBeInTheDocument();
    expect(commitsTable).toHaveClass('aos-animate');

    // Checking rows and if pagination exist
    let tableRows = screen.getAllByRole('rowheader');
    expect(tableRows.length).toBeGreaterThanOrEqual(1);
    expect(tableRows.length).toBeLessThan(10);
    expect(tablePaginatonButtonLeft).not.toBeInTheDocument();
    expect(tablePaginatonButtonRight).not.toBeInTheDocument();
  })
  it('Check invalid value', async () => {
    render(<Home />);
    const user = userEvent.setup();
    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search$/i });

    // Adding url and clicking button
    await user.type(searchInput, 'this is a invalid value');
    await user.click(searchButton);
    let loading = screen.queryByTestId(/loading$/i);
    // wait for response
    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    })
    expect(searchButton).toBeEnabled();

    // Check if table not exist
    let commitsTable = screen.queryByTestId(/tableContainer$/i);
    expect(commitsTable).not.toBeInTheDocument();

    // Check error message
    let errorMessage = screen.queryByText(/Something went wrong 😓.$/i);
    expect(errorMessage).toBeInTheDocument();
  });
});