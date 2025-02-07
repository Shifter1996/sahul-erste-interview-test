import { CurrencyRate } from "../type-definitions"
import CurrencyItem from "./CurrencyItem"

interface CurrencyListProps {
  baseCurrency: string;
  currencyRates: CurrencyRate[]
}

export default function CurrencyList({ baseCurrency, currencyRates }: CurrencyListProps) {
  return (
    <div className="container mx-auto mt-4">
      {currencyRates.map((rate, index) => (
        <CurrencyItem key={index} currencyCode={rate.currency} currencyName={rate.nameI18N} exchangeRate={rate.exchangeRate?.buy} baseCurrency={baseCurrency} />
      ))}
    </div>
  )
}

