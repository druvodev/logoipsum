import { useParams } from "react-router-dom";
import LeftSide from "./LeftSide";
import Recommended from "./Recommended";
import RightSide from "./RightSide";
import { useEffect, useState } from "react";

const PartnerDetails = () => {
  const [partnerInfo, setPartnerInfo] = useState(null);
  const { id } = useParams();
  //   console.log(partnerInfo);

  // fetch specific partner info
  useEffect(() => {
    fetch("/CA.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredPartner = data.find((item) => item.id == id);
        setPartnerInfo(filteredPartner);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    partnerInfo && (
      <section className="px-5 sm:px-12 xl:px-primary mt-10 xl:mt-24">
        <div className="flex flex-col xl:flex-row gap-8">
          <LeftSide partnerInfo={partnerInfo} />
          <RightSide partnerInfo={partnerInfo} />
        </div>
        <Recommended existingId={partnerInfo.id} />
      </section>
    )
  );
};

export default PartnerDetails;
