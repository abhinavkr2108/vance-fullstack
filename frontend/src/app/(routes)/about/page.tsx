import React from "react";

export default function AboutPage() {
  return (
    <div>
      <h3 className="text-2xl text-gray-800 font-semibold md:text-3xl">
        About Project
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>
          A web app that retrieves and displays historical exchange rate data
          for the various currencies in the pair, sourced directly from Yahoo
          Finance.
        </li>
        <li>
          This app enables users to view past trends, analyze fluctuations, and
          gain insights into the currency exchange rates over specified time
          periods, with easy-to-navigate historical data visualizations.
        </li>
        <br />
      </ul>
      <h3 className="text-lg text-gray-800 font-semibold md:text-xl">
        1. Tech Stack Used
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>
          <span className="text-black font-semibold">Frontend: </span> Next.js,
          TypeScript, Tailwind CSS
        </li>
        <li>
          <span className="text-black font-semibold">Backend: </span>
          Node.js, Express.js, JavaScript, NeonDB PostgreSQL, Prisma ORM
        </li>
      </ul>
      <br />

      <h3 className="text-lg text-gray-800 font-semibold md:text-xl">
        2. Other Libraries Used
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>
          <span className="text-black font-semibold">UI Styling: </span> ShadCN
          UI
        </li>
        <li>
          <span className="text-black font-semibold">Charts: </span>
          Recharts and ShadCN
        </li>
        <li>
          <span className="text-black font-semibold">Cron Jobs: </span>
          node-cron
        </li>
      </ul>
      <br />
    </div>
  );
}
