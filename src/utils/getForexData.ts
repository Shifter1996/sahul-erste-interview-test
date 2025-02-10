import jsonData from '../assets/data/fx.json';
import { CurrencyRate } from "../type-definitions"

type Result = {
    baseCurrency: string;
    currencyRates: CurrencyRate[], 
}

const getForexData = (filter?: string) : Result => {
    if (!filter)  {
        return {
            baseCurrency: jsonData.baseCurrency,
            currencyRates: jsonData.fx,
        };
    }

    const filteredCurrencyRates = jsonData?.fx?.filter(
        (currency) =>
          currency.currency?.toLowerCase().includes(filter.toLowerCase()) ||
          currency.nameI18N?.toLowerCase().includes(filter.toLowerCase()),
    );

    return {
        baseCurrency: jsonData.baseCurrency,
        currencyRates: filteredCurrencyRates,
    }
} 

export default getForexData;