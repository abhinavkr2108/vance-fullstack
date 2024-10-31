import React from "react";
import AboutTask from "./components/AboutTask";
import CodeBlock from "./components/CodeBlock";

export default function Task3Page() {
  const sampleCode = `const pairs = [
  { quote: "GBPINR=X", periods: ["1W", "1M", "3M", "6M", "1Y"] },
  { quote: "AEDINR=X", periods: ["1W", "1M", "3M", "6M", "1Y"] },
];
  pairs.forEach((pair) => {
  pair.periods.forEach((period) => {
    cron.schedule("0 0 * * SUN", async () => {
      const data = await scrapeData(pair.quote, period);
    });
  });
});
`;
  return (
    <div>
      <AboutTask />
      <h3 className="text-2xl text-gray-800 font-semibold md:text-3xl">
        Approach
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>To implement cron jobs I have used the node-cron library</li>
        <br />
      </ul>
      <h3 className="text-lg text-gray-800 font-semibold md:text-xl">
        1. Cron Jobs
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>Cron jobs are scheduled tasks that run at specified intervals</li>
        <li>They are similar to automated scheduled tasks in computing</li>
        <li>
          Common uses: backups, data fetching, cleanup tasks, regular updates
        </li>
      </ul>
      <br />
      <h3 className="text-lg text-gray-800 font-semibold md:text-xl">
        2. Node Cron
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>A Node.js library for scheduling tasks</li>
        <li>Uses cron syntax to define scheduling patterns</li>
        <li>
          Format: * * * * * * (seconds minutes hours day-of-month months
          day-of-week)
        </li>
      </ul>
      <br />
      <h3 className="text-lg text-gray-800 font-semibold md:text-xl">
        3. Code Example
      </h3>
      <ul className="text-gray-500 leading-relaxed mt-3 list-disc ml-6">
        <li>This is a sample cron job that runs every sunday at midnight</li>
        <li>
          Jobs run every Sunday at midnight, For each currency pair (GBPINR,
          AEDINR) and for each time period (1W, 1M, 3M, 6M, 1Y)
        </li>
        <li>
          The logic of web scraping is written in the scrapeData() function
        </li>
      </ul>

      <CodeBlock code={sampleCode} language="javascript" />
    </div>
  );
}
