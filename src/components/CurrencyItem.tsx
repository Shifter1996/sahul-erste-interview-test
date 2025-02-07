import { useEffect, useState } from "react";

interface CurrencyItemProps {
  currencyCode?: string;
  currencyName?: string;
  exchangeRate?: number;
  baseCurrency: string;
}

export default function CurrencyItem({ currencyCode, currencyName, exchangeRate, baseCurrency }: CurrencyItemProps) {
  const [flagImage, setFlagImage] = useState('');
  
  useEffect(() => {
    import(`../assets/flags/${currencyCode?.slice(0, 2).toLowerCase()}.png`).then((img) => setFlagImage(img.default))  
  }, [currencyCode])

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
      <img
        src={flagImage || undefined}
        alt={`${currencyCode}`}
        className="mr-4 w-12 h-8 object-cover"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{currencyName}</h2>
        <p className="text-gray-600">{currencyCode}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">{exchangeRate?.toFixed(2)}</p>
        <p className="text-sm text-gray-500">{baseCurrency}</p>
      </div>
    </div>
  )
}

