import { useNavigate } from "react-router-dom";
import star from "../../assets/icon/star-fill.svg";

const RecommendedCard = ({ partnerInfo }) => {
  const { id, image, name, price, intro, rating, reviewCount } = partnerInfo;
  const navigate = useNavigate();

  // handel selected partner
  const selectedPartner = (id) => {
    navigate(`/partner/${id}`);
  };
  return (
    <div className="w-full rounded-xl shadow-custom">
      <img
        src={image}
        alt="banner"
        className="h-[244px] w-full rounded-xl object-cover"
        onError={(e) => {
          e.target.src =
            "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
        }}
      />
      <div className="p-5">
        <div className="text-xl font-bold flex gap-5 justify-between">
          <h4>{name}</h4> <p>{price}</p>
        </div>
        <p className="mt-1 sm:mt-3 text-base">{intro}</p>
        <div className="flex items-center gap-1 mt-1 sm:mt-3 text-lg">
          <img src={star} alt="Star icon" className="w-6 h-6" />{" "}
          <p>
            <span className="font-bold text-primary">{rating}</span>{" "}
            <span>({reviewCount})</span>
          </p>
        </div>
        <button
          className="px-5 py-2 mt-5 sm:mt-8 border-[1.5px] border-primary text-white bg-primary rounded-lg w-full"
          onClick={() => selectedPartner(id)}
        >
          View services
        </button>
      </div>
    </div>
  );
};

export default RecommendedCard;
