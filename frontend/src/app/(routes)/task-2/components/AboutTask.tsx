export default function AboutTask() {
  return (
    <section className="pt-1">
      <div className="max-w-screen-md">
        <div className="py-4">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
            Task 2:{" "}
            <span className="text-indigo-600">
              Scrape data and create Rest API
            </span>
          </h3>
          <ul className="text-gray-500 leading-relaxed mt-3">
            <li>
              Scraping historic exchange data from Yahoo Finance Website and get
              the historic data and create a REST API for it{" "}
              <b>(API Endpoint: api/forex-data).</b>
            </li>

            <li>
              Build a simple frontend that shows the line chart of various
              historic data.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
