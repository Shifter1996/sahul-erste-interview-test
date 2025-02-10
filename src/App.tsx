import { useState } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import CurrencyList from "./components/CurrencyList"
import { useQuery } from "@tanstack/react-query"
import getForexData from "./utils/getForexData"


export default function App() {
  const [searchTerm, setSearchTerm] = useState(decodeURIComponent(window.location.hash.slice(1)));
  const { isLoading, data: forexData } = useQuery({ queryKey: ['forexData', searchTerm], queryFn: () => getForexData(searchTerm) });

  const updateSearchTearm = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    window.location.hash = encodeURIComponent(newSearchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={updateSearchTearm} />
      {!isLoading && !!forexData?.currencyRates.length && (
        <CurrencyList baseCurrency={forexData.baseCurrency} currencyRates={forexData.currencyRates} />
      )}
    </div>
  )
}

