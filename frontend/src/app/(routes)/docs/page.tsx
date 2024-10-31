import React from "react";
import CodeBlock from "../task-3/components/CodeBlock";

export default function DocsPage() {
  const scrapeCode = `async function scrapeData(quote, period) {
  const { fromDate, toDate } = getPeriodTimeStamps(period);
  const url = 'https://finance.yahoo.com/quote=1M';

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  const data = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("table tbody tr"));
    return rows.map((row) => {
      const columns = row.querySelectorAll("td");
      return Array.from(columns, (column) => column.innerText);
    });
  });`;

  const apiMethod = `API METHOD: POST /api/forex-data`;

  const fetchDataCode = `const fetchData = async () => {
    const quote = "{currencyOne}{currencyTwo}=X";

    toast.promise(
      axios.post("http://localhost:5000/api/scrape", {
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
  };`;

  const zustandStoreCode = `export const useCurrencyStore = create<CurrencyState>()(
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
      name: 'currency-storage', // unique name for localStorage key
    }
  )
);`;
  return (
    <div>
      <h3 className="text-2xl text-gray-800 font-semibold md:text-3xl">
        Sample Documentation
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>
          This is a sample documentation to show the basic structure of the app.
        </li>
        <li>
          Here documentation is for web scraping and what HTTP requests are
          made.
        </li>
        <br />
      </ul>
      <h3 className="text-lg text-gray-800 font-semibold md:text-xl">
        1. Web Scraping
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>
          We are using puppeteer to scrape data from the Yahoo Finance website.
          It Launches headless browser, Creates new page, Navigates to
          constructed URL and Waits for network requests to complete
        </li>
        <li>
          <span className="text-black font-semibold">Data Extraction: </span>
          Uses DOM selectors to find table rows, Extracts text content from each
          table cell and returns 2D array of historical data
        </li>
      </ul>
      <br />
      <CodeBlock code={scrapeCode} language="javascript" />

      <br />

      <h3 className="text-lg text-gray-800 font-semibold md:text-xl">
        2. Network Requests
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>We are making a post request to the Server</li>
      </ul>
      <br />
      <CodeBlock code={apiMethod} language="javascript" />
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>
          We take various parameters from the user and send them to the server
        </li>
      </ul>

      <br />

      <CodeBlock code={fetchDataCode} language="javascript" />

      <br />

      <h3 className="text-lg text-gray-800 font-semibold md:text-xl">
        3. Local Storage
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>
          The response data obtained in task 2 is stored in local storage via
          Zustand
        </li>

        <li>Code to create a Zustand Store</li>
        <CodeBlock code={zustandStoreCode} language="javascript" />
      </ul>

      <br />
    </div>
  );
}
