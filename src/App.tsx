"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import CurrencyList from "./components/CurrencyList"
import { useQuery } from "@tanstack/react-query"

import jsonData from './assets/data/fx.json';
import { ForexData } from "./type-definitions"

const getForexData = () : ForexData => {
  return jsonData;
} 

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoading, data: forexData } = useQuery({ queryKey: ['forexData'], queryFn: getForexData });

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setSearchTerm(decodeURIComponent(hash));
    }
  }, [])

  useEffect(() => {
    window.location.hash = encodeURIComponent(searchTerm);
  }, [searchTerm])

  const filteredCurrencyRates = forexData?.fx?.filter(
    (currency) =>
      currency.currency?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.nameI18N?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {!isLoading && !!forexData?.baseCurrency && !!filteredCurrencyRates?.length && (
        <CurrencyList baseCurrency={forexData.baseCurrency} currencyRates={filteredCurrencyRates} />
      )}
    </div>
  )
}

