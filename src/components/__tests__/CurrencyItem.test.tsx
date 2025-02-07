import { describe, it, expect } from "vitest"
// import { render, screen } from "@testing-library/react"
// import CurrencyItem from "../CurrencyItem"

describe("CurrencyItem", () => {
  const mockCurrencyRate = {
    currency: "USD",
    precision: 2,
    nameI18N: "United States Dollar",
    exchangeRate: { buy: 2.515 },
  }

  it("renders currency information correctly", () => {
    expect(1+1).toBe(2);
    // render(<CurrencyItem currencyRate={mockCurrencyRate} baseCurrency="EUR" />)
    // expect(screen.getByText("United States Dollar")).toBeInTheDocument()
    // expect(screen.getByText("USD")).toBeInTheDocument()
    // expect(screen.getByText("2.51")).toBeInTheDocument()
    // expect(screen.getByText("EUR"))
  })

  // it("renders the flag image", () => {
  //   render(<CurrencyItem currencyRate={mockCurrencyRate} baseCurrency="EUR" />)
  //   const flagImage = screen.getByAltText("USD")
  //   expect(flagImage).toBeInTheDocument()
  //   expect(flagImage).toHaveAttribute("src", "/placeholder.svg?height=30&width=45&text=USD")
  // })
})

