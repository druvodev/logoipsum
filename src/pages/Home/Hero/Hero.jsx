import leftImg from "../../../assets/svg/Left.png";
import arrowImg from "../../../assets/svg/arrow.png";
import SearchBox from "./SearchBox";

const Hero = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(75deg, rgba(254, 221, 238, 0.5) 0%, rgba(252, 246, 252, 0.5) 31.77%, rgba(197, 234, 237, 0.5) 64.58%, rgba(253, 221, 254, 0.5) 100%)`,
    height: "auto",
  };

  return (
    <section
      style={sectionStyle}
      className="relative xl:min-h-[803px] flex items-center sm:-mt-20 sm:pt-28 xl:pt-0 z-0"
    >
      <div className="flex flex-col xl:flex-row items-center gap-5 sm:gap-16 px-5 sm:px-12 xl:px-primary z-20 bg-transparent">
        <div className="max-w-[675px]">
          <h2 className="text-5xl font-bold sm:text-header mt-10 sm:mt-0">
            Find{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              Partners
            </span>{" "}
            (CAs) available online
          </h2>
          <p className="text-[#616161] sm:text-xl font-openSans mt-4">
            <span className="font-bold">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </p>
          <SearchBox />
        </div>
        <div>
          <img src={leftImg} alt="Hero Image" className="xl:mt-44" />
        </div>
      </div>
      <div>
        <img src={arrowImg} alt="" className="absolute bottom-0 left-0" />
      </div>
    </section>
  );
};

export default Hero;
