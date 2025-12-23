/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react'
import App from '../App';
import { vi } from 'vitest';

vi.mock('../services/persons.jsx', () => {
  return {
    default: {
      getAll: vi.fn().mockResolvedValue({ data: [] }),
      create: vi.fn(),
      update: vi.fn(),
      deletePerson: vi.fn()
    }
  }
})

test('front page can be opened', async () => {
    render(<App />);

    const heading = await screen.findByText(/Phonebook/i);
    expect(heading).toBeInTheDocument();
})