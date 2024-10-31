"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import Table from "./components/DataTable";
// import DataTable from "./components/DataTable";
import { CurrencyData } from "@/lib/types";
import AboutTask from "./components/AboutTask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DataTable from "./components/DataTable";
import CurrencyChart from "./components/CurrencyChart";
import SampleChart from "./components/SampleChart";
import { useCurrencyStore } from "@/store/currencyStore";

export default function Task2Page() {
  //State Variables
  const [currencyOne, setCurrencyOne] = useState("");
  const [currencyTwo, setCurrencyTwo] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [currencyData, setCurrencyData] = useState<any>([]);
  const [duration, setDuration] = useState("");

  // Zustand Variables
  const setCurrency = useCurrencyStore((state) => state.setCurrencyData);
  const storedCurrencyData = useCurrencyStore((state) => state.currencyData);

  //Other Variables
  const currencies = [
    { label: "EUR", value: "EUR" },
    { label: "USD", value: "USD" },
    { label: "JPY", value: "JPY" },
    { label: "GBP", value: "GBP" },
    { label: "CHF", value: "CHF" },
    { label: "AUD", value: "AUD" },
    { label: "CAD", value: "CAD" },
    { label: "NZD", value: "NZD" },
    { label: "INR", value: "INR" },
  ];

  const durations = [
    { label: "1 Month", value: "1" },
    { label: "2 Months", value: "2" },
    { label: "3 Months", value: "3" },
    { label: "4 Months", value: "4" },
    { label: "5 Months", value: "5" },
    { label: "6 Months", value: "6" },
  ];

  //Hooks
  useEffect(() => {
    console.log("DATA", currencyData);
    console.log("DATA STATE", currencyData.data);
    console.log(currencyOne, currencyTwo);
  }, [currencyData, currencyOne, currencyTwo]);

  //Functions
  const fetchData = async () => {
    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setMonth(toDate.getMonth() - parseInt(duration));

    const quote = `${currencyOne}${currencyTwo}=X`;

    toast.promise(
      axios.post("http://localhost:5000/api/forex-data", {
        quote,
        fromDate: Math.floor(fromDate.getTime() / 1000),
        toDate: Math.floor(toDate.getTime() / 1000),
      }),
      {
        loading: "Fetching data...",
        success: (res) => {
          setCurrencyData(res.data);
          setCurrency(res.data.data);
          return <b>Data fetched!</b>;
        },
        error: <b>Error fetching data.</b>,
      }
    );
  };
  return (
    <div>
      <AboutTask />
      <div className="max-w-screen-lg grid grid-cols-1 gap-4 md:grid-cols-2">
        <Toaster position="top-center" reverseOrder={false} />
        <div>
          <Select onValueChange={(value) => setCurrencyOne(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select base currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  {currency.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select onValueChange={(value) => setCurrencyTwo(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select quote currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  {currency.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Select onValueChange={(value) => setDuration(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              {durations.map((duration) => (
                <SelectItem key={duration.value} value={duration.value}>
                  {duration.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="md:col-span-2 w-fit" onClick={fetchData}>
          Fetch Data
        </Button>
        <div className="md:col-span-2">
          {currencyData &&
            currencyData.data &&
            currencyData.data.length > 0 && (
              <SampleChart data={currencyData.data} />
            )}
        </div>
      </div>
      {/* {currencyData && currencyData.data && currencyData.data.length > 0 && (
        <CurrencyChart data={currencyData.data} />
      )} */}

      {currencyData && currencyData.data && currencyData.data.length > 0 && (
        <DataTable data={currencyData.data} />
      )}
    </div>
  );
}
