interface ExchangeRate {
    buy?: number;
    middle?: number;
    sell?: number;
    indicator?: number;
    lastModified?: string; // ISO date string
}

export interface CurrencyRate {
    currency?: string;
    precision?: number;
    nameI18N?: string;
    exchangeRate?: ExchangeRate;
    banknoteRate?: ExchangeRate;
    flags?: string[];
}

export interface ForexData {
    institute?: number;
    lastUpdated?: string; // ISO date string
    comparisonDate?: string; // ISO date string
    baseCurrency?: string;
    fx?: CurrencyRate[];
}