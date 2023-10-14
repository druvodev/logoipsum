import carouselIcon from "../../assets/icon/carouselIcon.svg";

const RightSide = () => {
  return (
    <div>
      <div className="sm:h-[412px] w-full bg-cover bg-center rounded-xl relative bg-[url('https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80')]">
        <img
          src={carouselIcon}
          alt="icon"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="mt-8">
        <h3 className="text-4xl font-bold">About Michael Jackson</h3>
        <div className="mt-8 flex justify-between gap-5">
          <div>
            <h4 className="text-secondary font-bold">FROM</h4>
            <p className="text-xl mt-1">INDIA</p>
          </div>
          <div>
            <h4 className="text-secondary font-bold">PARTNER SINCE</h4>
            <p className="text-xl mt-1">2011</p>
          </div>
          <div>
            <h4 className="text-secondary font-bold">AVERAGE RESPONSE TIME</h4>
            <p className="text-xl mt-1">30 minutes</p>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-secondary font-bold">ABOUT</h4>
          <p>
            <p className="text-xl mt-1">
              I am a Professional Charted Accountant here to offer professional
              services of accounting and finance, financial statements,
              Bookkeeping in affordable price.
            </p>
          </p>
        </div>
        <div className="flex gap-8 justify-between mt-8">
          <div>
            <h4 className="text-secondary font-bold">SERVICES I OFFER</h4>
            <ul className="text-xl">
              <li>• Financial accounting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-secondary font-bold">WHY ME?</h4>
            <ul className="text-xl">
              <li>• Financial accounting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
