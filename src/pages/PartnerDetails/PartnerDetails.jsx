import LeftSide from "./LeftSide";
import Recommended from "./Recommended";
import RightSide from "./RightSide";

const PartnerDetails = () => {
  return (
    <section className="px-primary mt-24">
      <div className="flex gap-8">
        <LeftSide />
        <RightSide />
      </div>
      <Recommended />
    </section>
  );
};

export default PartnerDetails;
