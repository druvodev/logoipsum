import img from "../../../assets/svg/allInOne.svg";
import searchIcon from "../../../assets/icon/search.svg";
import enquireIcon from "../../../assets/icon/enquire.svg";
import reportIcon from "../../../assets/icon/report.svg";
import hatIcon from "../../../assets/icon/hat.svg";

export const AllInOne = () => {
  return (
    <section className="grid xl:grid-cols-2 gap-5 sm:gap-12 p-5 sm:p-12 xl:p-primary">
      <div>
        <h2 className="text-5xl font-bold sm:text-header">
          <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-[#9400D3] bg-clip-text text-transparent">
            All-In-One
          </span>{" "}
          platform that Makes Easier
        </h2>
        <p className="text-lg sm:text-2xl sm:mt-4">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-y-16 mt-5 sm:mt-8 sm:text-xl">
          <div className="flex gap-1">
            <img src={searchIcon} alt="Search icon" />
            <p>
              <span className="font-bold">SEARCH</span> for vital company
              information{" "}
            </p>
          </div>
          <div className="flex gap-1">
            <img src={enquireIcon} alt="Enquire icon" />
            <p>
              <span className="font-bold">CONNECT</span> with the resources to
              meet your business needs
            </p>
          </div>
          <div className="flex gap-1">
            <img src={reportIcon} alt="Report icon" />
            <p>
              <span className="font-bold">RESEARCH</span> and generate reports
              that drive growth
            </p>
          </div>
          <div className="flex gap-1">
            <img src={hatIcon} alt="Hat icon" />
            <p>
              <span className="font-bold">ACADEMY</span> to give you the skills
              for success in your career
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="Cover Image" />
      </div>
    </section>
  );
};
