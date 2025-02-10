import { describe, expect, beforeEach, vi, test } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "../App";
import getForexData from "../utils/getForexData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock('../utils/getForexData');

const renderWithQueryClient = (ui: React.ReactNode) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

const mockCurrencyRates = [
  {
      currency: "FJD",
      precision: 2,
      "nameI18N": "Fiji Dollar",
      "exchangeRate": {
          "buy": 2.0000000,
          "middle": 2.2500000,
          "sell": 2.5000000,
          "indicator": 0,
          "lastModified": "2012-02-14T23:00:00Z"
      },
      "banknoteRate": {
          "buy": 2.2000000,
          "middle": 2.4000000,
          "sell": 2.6000000,
          "indicator": 0,
          "lastModified": "2018-11-06T23:00:00Z"
      },
      "flags": [
          "provided"
      ]
  },
  {
      "currency": "MXN",
      "precision": 2,
      "nameI18N": "Mexican Peso",
      "exchangeRate": {
          "buy": 22.3800000,
          "middle": 22.9800000,
          "sell": 23.5800000,
          "indicator": 0,
          "lastModified": "2018-11-08T23:00:00Z"
      },
      "banknoteRate": {
          "buy": 21.1000000,
          "middle": 22.6000000,
          "sell": 24.1000000,
          "indicator": 0,
          "lastModified": "2018-11-06T23:00:00Z"
      },
      "flags": [
          "provided"
      ]
  }
];

const mockForexData = {
  baseCurrency: "EUR",
  currencyRates: mockCurrencyRates
}

describe("App", () => {
    beforeEach(() => {
      // Reset the URL before each test
      window.history.pushState({}, "", "/")
    })

    test('renders filtered data successfully', async () => {
      vi.mocked(getForexData).mockReturnValue(mockForexData);
      
      renderWithQueryClient(<App />);
    
      // Wait for user data to appear
      await waitFor(() => screen.getByText('Fiji Dollar'));
    
      // Check if user details are displayed
      expect(screen.getByText('Fiji Dollar')).toBeInTheDocument();
      expect(screen.getByText('2.00')).toBeInTheDocument();
    });
  
    test("updates URL hash when search term changes", () => {
      vi.mocked(getForexData).mockReturnValue(mockForexData);

      renderWithQueryClient(<App />)
      const searchInput = screen.getByPlaceholderText("Search currencies...")
      fireEvent.change(searchInput, { target: { value: "eur" } })
      expect(window.location.hash).toBe("#eur")
    })
  })
  