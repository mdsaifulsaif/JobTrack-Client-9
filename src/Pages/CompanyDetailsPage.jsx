import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Company from "../Components/Company";
import Job from "../Components/Job";
import Jobs from "../Components/Jobs";
import { Helmet } from "react-helmet-async";

function CompanyDetailsPage() {
  const data = useLoaderData();
  const { id } = useParams();
  const filterJob = data.filter((job) => job.id == id);

  return (
    <div>
      <Helmet>
        <title>Job House | Company details</title>
      </Helmet>
      <div className="my-5">
        {filterJob.map((comp) => (
          <Company key={comp.id} comp={comp}></Company>
        ))}
      </div>

      <Jobs filterJob={filterJob}></Jobs>
    </div>
  );
}

export default CompanyDetailsPage;
