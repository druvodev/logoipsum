import carouselIcon from "../../assets/icon/carouselIcon.svg";

const RightSide = ({ partnerInfo }) => {
  const { image, name, about } = partnerInfo;
  console.log(partnerInfo);
  return (
    <div>
      <div className="w-full relative">
        <img
          className="sm:h-[412px] w-full object-cover rounded-xl"
          src={image}
          alt="banner"
          onError={(e) => {
            e.target.src =
              "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
          }}
        />
        <img
          src={carouselIcon}
          alt="icon"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="sm:mt-8">
        <h3 className="text-3xl sm:text-4xl font-bold">About {name}</h3>
        <div className="mt-3 sm:mt-8 flex flex-wrap justify-between gap-5">
          <div>
            <h4 className="text-secondary font-bold">FROM</h4>
            <p className="text-lg sm:text-xl mt-1">{about?.from}</p>
          </div>
          <div>
            <h4 className="text-secondary font-bold">PARTNER SINCE</h4>
            <p className="text-lg sm:text-xl mt-1">{about?.partnerSince}</p>
          </div>
          <div>
            <h4 className="text-secondary font-bold">AVERAGE RESPONSE TIME</h4>
            <p className="text-lg sm:text-xl mt-1">
              {about?.averageResponseTime}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-secondary font-bold">ABOUT</h4>
          <p>
            <p className="text-lg sm:text-xl mt-1">{about?.description}</p>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-between mt-3 xl:mt-8">
          <div>
            <h4 className="text-secondary font-bold">SERVICES I OFFER</h4>
            <ul className="text-lg sm:text-xl">
              {about?.services.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-secondary font-bold">WHY ME?</h4>
            <ul className="text-lg sm:text-xl">
              {about?.benefits.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
