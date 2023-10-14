import { useState } from "react";
import star from "../../../assets/icon/star-fill.svg";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const [isModal, setIsModal] = useState(false);
  const [partners, setPartners] = useState([]);

  const navigate = useNavigate();
  console.log(partners);

  // handel specific partner searching methods
  const handleInputSearch = async (e) => {
    const inputValue = e.target.value;

    if (inputValue.trim() !== "") {
      setIsModal(true);
      try {
        const response = await fetch("/CA.json");
        const data = await response.json();
        const filteredPartners = data.filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setPartners(filteredPartners);
      } catch (error) {
        console.error("Error searching location:", error);
      }
    } else {
      setPartners([]);
    }
  };

  // handel selected partner
  const selectedPartner = (id) => {
    setIsModal(false);
    navigate(`/partner/${id}`);
  };

  return (
    <div className="relative">
      <div className="w-full flex mt-14 font-inter">
        <input
          type="text"
          placeholder="Search by name"
          className="w-full py-4 px-4 rounded-l-lg font-bold text-[#AEB0B4] focus:text-primary/60 outline-primary/50"
          onChange={handleInputSearch}
        />
        <input
          type="button"
          className="py-4 px-12 bg-primary hover:bg-sky-600 active:bg-sky-700 font-semibold rounded-r-lg text-white cursor-pointer"
          value="Search"
        />
      </div>
      <div className="bg-white/10 backdrop-blur-3xl w-full mt-1 rounded-xl overflow-hidden shadow-custom absolute top-14 left-0">
        <div className="max-h-80 overflow-y-scroll ">
          {isModal && partners.length === 0 ? (
            <div className="p-3 text-center text-red-500">No match found!</div>
          ) : (
            isModal &&
            partners.map((item) => (
              <div
                key={item?.id}
                onClick={() => {
                  selectedPartner(item?.id);
                }}
                className="flex items-center justify-between gap-1 px-4 py-1 border-b hover:bg-slate-100 cursor-pointer"
              >
                <div>
                  <h5 className="text-xl font-semibold">{item?.name}</h5>
                  <p className="font-semibold text-gray-700">
                    {item?.taskComplexity}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={star} alt="Star icon" className="w-5 h-6" />{" "}
                  <p className="text-lg">
                    <span className="font-bold text-primary">
                      {item?.rating}
                    </span>{" "}
                    <span>({item?.reviewCount})</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
