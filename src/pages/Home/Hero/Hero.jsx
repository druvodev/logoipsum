import leftImg from "../../../assets/svg/Left.png";
import bg from "../../../assets/svg/heroBg.svg";
import SearchBox from "./SearchBox";
const Hero = () => {
  return (
    <section className="relative sm:min-h-[718px] sm:flex items-center">
      <div className="flex items-center gap-16 px-primary absolute z-20">
        <div className="max-w-[675px]">
          <h2 className="text-header">
            Find{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              Partners
            </span>{" "}
            (CAs) available online
          </h2>
          <p className="text-[#616161] text-xl font-openSans mt-4">
            <span className="font-bold">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </p>
          <SearchBox />
        </div>
        <div>
          <img src={leftImg} alt="Hero Image" className="sm:mt-[85px]" />
        </div>
      </div>
      <div className="-mt-[85px] -z-0">
        <img src={bg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
