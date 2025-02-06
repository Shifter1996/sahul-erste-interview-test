import { CurrencyRate } from "../type-definitions"
import { useEffect, useState } from "react";

interface CurrencyItemProps {
  currencyRate: CurrencyRate;
  baseCurrency: string;
}

export default function CurrencyItem({ currencyRate: { currency, nameI18N, exchangeRate }, baseCurrency }: CurrencyItemProps) {
  const [flagImage, setFlagImage] = useState('');
  
  useEffect(() => {
    import(`../assets/flags/${currency?.slice(0, 2).toLowerCase()}.png`).then((img) => setFlagImage(img.default))  
  }, [currency])

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
      <img
        src={flagImage}
        alt={`${currency}`}
        className="mr-4 w-12 h-8 object-cover"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{nameI18N}</h2>
        <p className="text-gray-600">{currency}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">{exchangeRate?.buy?.toFixed(2)}</p>
        <p className="text-sm text-gray-500">{baseCurrency}</p>
      </div>
    </div>
  )
}

