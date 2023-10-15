import JoinCard from "./JoinCard";
import bg from "../../../assets/svg/joinUsBg.png";
import { useState } from "react";

const JoinUs = () => {
  const [joinUsInfo, setJoinUsInfo] = useState([]);

  // fetch json data to showing join us cards
  fetch("JoinUs.json")
    .then((res) => res.json())
    .then((data) => setJoinUsInfo(data));

  return (
    <section className="mt-16 sm:mt-28">
      <h2 className="text-5xl font-bold sm:text-header text-center">
        Want to{" "}
        <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-[#9400D3] bg-clip-text text-transparent">
          Join
        </span>{" "}
        Us?
      </h2>
      <div
        className="px-5 sm:px-12 xl:px-primary pb-5 sm:pb-7"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <p className="text-lg sm:text-2xl sm:mt-4 text-center">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mt-10 sm:mt-20">
          {joinUsInfo?.map((item) => (
            <JoinCard key={item.cardNumber} info={item} />
          ))}
        </div>
      </div>
      <p className="px-5 sm:max-w-7xl mx-auto">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="font-bold">every day</span> until you file the form .
        There is no maximum penalty amount. So, if you don&apos;t file the form
        for a year, you will owe ₹73,000 per form
      </p>
    </section>
  );
};

export default JoinUs;
