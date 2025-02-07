import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import CurrencyItem from "../CurrencyItem"

describe("CurrencyItem", () => {
  const mockCurrencyRate = {
    code: "USD",
    name: 2,
    nameI18N: "United States Dollar",
    exchangeRate: { buy: 2.512 },
  }

  it("renders currency information correctly", () => {
    render(<CurrencyItem currencyRate={mockCurrencyRate} baseCurrency="EUR" />)
    expect(screen.getByText("United States Dollar")).toBeInTheDocument()
    expect(screen.getByText("USD")).toBeInTheDocument()
    expect(screen.getByText("2.51")).toBeInTheDocument()
    expect(screen.getByText("EUR"))
  })
})

