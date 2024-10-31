"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import DataTable from "./components/DataTable";

import AboutTask from "./components/AboutTask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Task1Page() {
  //State Variables
  const [currencyOne, setCurrencyOne] = useState("");
  const [currencyTwo, setCurrencyTwo] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [currencyData, setCurrencyData] = useState<any>([]);

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
    // Add more currencies as needed
  ];
  //Hooks
  useEffect(() => {
    console.log("DATA", currencyData);
    console.log("DATA STATE", currencyData.data);
    console.log(currencyOne, currencyTwo);
  }, [currencyData, currencyOne, currencyTwo]);

  //Functions
  const fetchData = async () => {
    const quote = `${currencyOne}${currencyTwo}=X`;
    toast.promise(
      axios.post("https://vance-fullstack.onrender.com/api/scrape", {
        quote,
        fromDate: Math.floor(fromDate.getTime() / 1000),
        toDate: Math.floor(toDate.getTime() / 1000),
      }),
      {
        loading: "Fetching data...",
        success: (res) => {
          setCurrencyData(res.data);
          console.log("FETCHED DATA", currencyData);
          console.log("DATA STATE", currencyData.data);
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
        <DatePicker
          selected={fromDate}
          onChange={(date) => date && setFromDate(date)}
          dateFormat="MM dd, yyyy"
          placeholderText="Select a from date"
        />
        <DatePicker
          selected={toDate}
          onChange={(date) => date && setToDate(date)}
          dateFormat="MM dd, yyyy"
          placeholderText="Select a to date"
        />
        <Button onClick={fetchData} className="w-fit">
          Fetch Data
        </Button>
      </div>

      {currencyData && currencyData.data && currencyData.data.length > 0 && (
        <DataTable data={currencyData.data} />
      )}
    </div>
  );
}
