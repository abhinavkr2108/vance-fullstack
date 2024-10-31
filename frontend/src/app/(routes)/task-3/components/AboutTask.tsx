export default function AboutTask() {
  return (
    <section className="pt-1">
      <div className="max-w-screen-md">
        <div className="py-4">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
            Task 3:{" "}
            <span className="text-indigo-600">
              Automate Scraping Using Cron Jobs
            </span>
          </h3>
          <ul className="text-gray-500 leading-relaxed mt-3">
            <li>
              Write a script that would trigger the scraping process
              periodically. (Created a cron job to run the script every Sunday
              Midnight using node-cron)
            </li>
            <li>
              Cron Job timings can be changed based on the requirement. This
              timing is just an example.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
