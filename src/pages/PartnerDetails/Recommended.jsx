import star from "../../assets/icon/star-fill.svg";

const Recommended = () => {
  return (
    <div className="my-32">
      <h3 className="text-4xl font-bold mb-8">Recommended for you</h3>
      <div className="w-[405px] rounded-xl shadow-custom">
        <img
          src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80'"
          alt=""
          className="h-[244px] w-full rounded-xl"
        />
        <div className="p-5">
          <div className="text-xl font-bold flex gap-5 justify-between">
            <h4>Michael Jackson</h4> <p>₹4,370</p>
          </div>
          <p className="mt-3 text-base">
            I am here to provide my expertise in accounting and finance, which
            includes financial statements, economics, and auditing, all to
            assist you effectively
          </p>
          <div className="flex items-center gap-1 mt-3 text-base">
            <img src={star} alt="Star icon" className="w-6 h-6" />{" "}
            <p>
              <span className="font-bold text-primary">4.8</span>{" "}
              <span>(89)</span>
            </p>
          </div>
          <button className="px-5 py-2 mt-8 border-[1.5px] border-primary text-white bg-primary rounded-lg w-full">
            View services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
