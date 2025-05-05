import { useEffect, useState } from "react";
import { FiBriefcase, FiDollarSign, FiX, FiMapPin } from "react-icons/fi";
import { HiSpeakerphone } from "react-icons/hi";
import { useLoaderData } from "react-router";

const Job = ({ jobc }) => {
  // const data = useLoaderData();
  const [company, setCompany] = useState(null);
  // setCompany(data);
  console.log(data);
  const [selectedJob, setSelectedJob] = useState(null);

  // Simulate API call
  useEffect(() => {
    // const data = {
    //   id: "1",
    //   name: "TechNova Solutions",
    //   logo: "https://example.com/logos/technova.png",
    //   location: "San Francisco, CA",
    //   website: "https://technova.com",
    //   industry: "Software Development",
    //   jobs: [
    //     {
    //       id: "job-001",
    //       title: "Frontend Developer",
    //       bannerImage: "https://example.com/banners/frontend.png",
    //       location: "Remote",
    //       salary: "$80,000 - $100,000",
    //       jobType: "Full-time",
    //       description:
    //         "We are looking for a skilled Frontend Developer to build and improve our client-side applications.",
    //       requirements: [
    //         "Proficient in HTML, CSS, and JavaScript",
    //         "Experience with React or Vue.js",
    //         "Familiarity with RESTful APIs",
    //         "Good understanding of responsive design",
    //         "Excellent problem-solving skills",
    //       ],
    //     },
    //     {
    //       id: "job-002",
    //       title: "UI/UX Designer",
    //       bannerImage: "https://example.com/banners/uiux.png",
    //       location: "San Francisco, CA",
    //       salary: "$70,000 - $90,000",
    //       jobType: "Part-time",
    //       description:
    //         "Join our creative team to design user-friendly interfaces and intuitive user experiences.",
    //       requirements: [
    //         "Proficiency in Figma or Adobe XD",
    //         "Strong portfolio of UI/UX designs",
    //         "Understanding of design systems",
    //         "Collaboration with product and engineering teams",
    //         "Attention to detail",
    //       ],
    //     },
    //     {
    //       id: "job-005",
    //       title: "QA Engineer",
    //       bannerImage: "https://example.com/banners/qa.png",
    //       location: "San Francisco, CA",
    //       salary: "$60,000 - $85,000",
    //       jobType: "Full-time",
    //       description:
    //         "Ensure software quality through testing and process improvements.",
    //       requirements: [
    //         "Experience with automated and manual testing",
    //         "Knowledge of testing tools (Selenium, JUnit)",
    //         "Good analytical and documentation skills",
    //         "Familiar with agile development",
    //         "Attention to detail",
    //       ],
    //     },
    //   ],
    // };

    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  console.log(company);

  if (!company) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      {company.jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white border border-orange-300 rounded-md flex flex-col md:flex-row justify-between items-center p-4 transition duration-300 hover:border-blue-500 hover:shadow-lg group"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div>
              <h2 className="text-lg font-semibold text-black group-hover:text-black">
                {job.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-700">
                <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded">
                  <FiBriefcase />
                  {job.jobType}
                </span>
                <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded">
                  <FiDollarSign />
                  {job.salary}
                </span>
                <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded">
                  <FiMapPin />
                  {job.location}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => setSelectedJob(job)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-black"
            >
              Browse Job <HiSpeakerphone />
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md w-full max-w-lg p-6 relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <FiX size={20} />
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {selectedJob.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {selectedJob.description}
            </p>

            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
              {selectedJob.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="flex justify-end gap-3">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply
              </a>
              <button
                onClick={() => setSelectedJob(null)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
