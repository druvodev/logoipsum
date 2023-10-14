import carouselIcon from "../../assets/icon/carouselIcon.svg";
import star from "../../assets/icon/star-fill.svg";
import calender from "../../assets/icon/calendar-2-line.svg";

const LeftSide = ({ partnerInfo }) => {
  const {
    name,
    intro,
    rating,
    reviewCount,
    taskComplexity,
    price,
    testimonial,
  } = partnerInfo;
  return (
    <div className="sm:max-w-[515px]">
      <h4 className="text-4xl font-bold">{name}</h4>
      <p className="mt-4 text-xl">{intro}</p>
      <div className="flex items-center gap-1 mt-4">
        <img src={star} alt="Star icon" />{" "}
        <p className="text-xl">
          <span className="font-bold text-primary">{rating}</span>{" "}
          <span>({reviewCount})</span>
        </p>
      </div>
      <div className="bg-white p-6 shadow-custom rounded-2xl text-xl mt-4">
        <div className="flex justify-between">
          <p>{taskComplexity}</p> <p className="text-2xl font-bold">{price}</p>
        </div>
        <div className="flex items-center gap-1 mt-8">
          <img src={calender} alt="calender icon" />{" "}
          <p>Delivers the job within 2 days</p>
        </div>
        <div className="text-base flex gap-6 mt-8">
          <button className="px-5 py-2 border-[1.5px] border-primary text-white bg-primary rounded-lg w-full">
            Request Proposal
          </button>
          <button className="px-5 py-2 border-[1.5px] border-primary text-primary rounded-lg w-full">
            Chat with me
          </button>
        </div>
      </div>
      <div className="bg-white shadow-custom p-6 rounded-2xl mt-4">
        <h4 className="text-2xl font-bold">What people say?</h4>
        <p className="text-xl mt-4 mb-14">{testimonial?.text}</p>
        <img src={carouselIcon} alt="carousel icon" className="mx-auto" />
      </div>
    </div>
  );
};

export default LeftSide;
