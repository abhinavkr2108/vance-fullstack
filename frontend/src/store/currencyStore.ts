// src/store/currencyStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CurrencyDataItem {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  adjClose: string;
  volume: string;
}

interface CurrencyState {
  currencyData: CurrencyDataItem[];
  setCurrencyData: (data: any[]) => void;
  clearCurrencyData: () => void;
}

// Transform the raw array data to structured object
const transformData = (rawData: any[]): CurrencyDataItem[] => {
  return rawData.map((item) => ({
    date: item[0],
    open: item[1],
    high: item[2],
    low: item[3],
    close: item[4],
    adjClose: item[5],
    volume: item[6],
  }));
};

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currencyData: [],
      setCurrencyData: (data: any[]) => {
        const transformedData = transformData(data);
        set({ currencyData: transformedData });
      },
      clearCurrencyData: () => set({ currencyData: [] }),
    }),
    {
      name: "currency-storage", // unique name for localStorage key
    }
  )
);
