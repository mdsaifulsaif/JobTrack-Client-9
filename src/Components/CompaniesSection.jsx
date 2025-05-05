import { Link } from "react-router"; // Use `next/link` if you're in Next.js
import { FiExternalLink } from "react-icons/fi"; // Icon example

const CompaniesSection = ({ companies }) => {
  return (
    <section className="p-6">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {companies.map((company) => (
          <Link
            key={company.id}
            to={`/company/${company.id}`} // Adjust this if you use Next.js
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 text-center group"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-20 mx-auto object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              {company.name}
            </h3>
            <div className="text-sm text-gray-500">{company.location}</div>
            <div className="flex items-center justify-center mt-2 text-blue-500">
              <span className="text-xs mr-1">View Details</span>
              <FiExternalLink className="text-sm" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
