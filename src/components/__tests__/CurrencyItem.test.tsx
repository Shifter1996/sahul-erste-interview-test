import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import CurrencyItem from "../CurrencyItem"

describe("CurrencyItem", () => {
  it("renders currency information correctly", () => {
    render(<CurrencyItem currencyCode="USD" currencyName="United States Dollar" exchangeRate={2.5122} baseCurrency="EUR" />)
    expect(screen.getByText("United States Dollar")).toBeInTheDocument()
    expect(screen.getByText("USD")).toBeInTheDocument()
    expect(screen.getByText("2.51")).toBeInTheDocument()
    expect(screen.getByText("EUR"))
  })
})

