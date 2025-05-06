import React from "react";
import { useLoaderData } from "react-router";

function Jobcard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {data.map((jos) => {
        return (
          <div>
            <h1>{jos.name}</h1>;
            {jos.jobs.map((job) => (
              <div>
                <h1>job name is</h1>
                <h1>{job.title}</h1>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Jobcard;
