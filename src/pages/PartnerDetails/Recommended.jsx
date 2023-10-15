import { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";

const Recommended = ({ existingId }) => {
  const [partnersInfo, setPartnersInfo] = useState([]);
  console.log(existingId);
  console.log(partnersInfo);

  useEffect(() => {
    fetch("/CA.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredPartners = data.filter((item) => item.id !== existingId);
        setPartnersInfo(filteredPartners);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [existingId]);

  // shuffle 3 partners with out current partner
  const getRandomPartners = () => {
    const numPartnersToDisplay = 3;
    const shuffledPartners = partnersInfo.sort(() => Math.random() - 0.5);
    return shuffledPartners.slice(0, numPartnersToDisplay);
  };

  const randomPartners = getRandomPartners();

  return (
    randomPartners && (
      <div className="my-16 xl:my-32">
        <h3 className="text-4xl font-bold mb-8">Recommended for you</h3>
        <div className="grid gap-3 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {randomPartners?.map((item) => (
            <RecommendedCard key={item.id} partnerInfo={item} />
          ))}
        </div>
      </div>
    )
  );
};

export default Recommended;
