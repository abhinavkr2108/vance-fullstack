export default function AboutTask() {
  return (
    <section className="pt-1">
      <div className="max-w-screen-md">
        <div className="py-4">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
            Task 1:{" "}
            <span className="text-indigo-600">Scrape and store data</span>
          </h3>
          <ul className="text-gray-500 leading-relaxed mt-3">
            <li>
              Scraping historic exchange data from Yahoo Finance Website and get
              the historic data and store it in a in-memory DB like SQLite.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
