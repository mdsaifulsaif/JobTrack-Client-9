import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Job from "./Job";

function Jobs({ filterJob }) {
  const weblink = filterJob.map((j) => j.website);

  // console.log(jobsData.name);

  return (
    <section className="py-5">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Explore Top Tech Companies
        </h1>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Discover leading companies in the tech industry. Click on any logo to
          view more details about their mission, open positions, and work
          culture.
        </p>
      </div>

      <div className="grid  md:grid-cols-1 ">
        {filterJob.map((jobc) =>
          jobc.jobs.map((jobdata) => (
            <Job key={jobdata.id} jobdata={jobdata} weblink={weblink}></Job>
          ))
        )}
      </div>
    </section>
  );
}

export default Jobs;
