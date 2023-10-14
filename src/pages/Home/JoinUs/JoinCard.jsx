const JoinCard = ({ info }) => {
  const { title, description, dueDateValue, penaltyFees, cardNumber } = info;

  // split card number in two parts
  const [numberPart, indicatorPart] = cardNumber.split(/(?<=^\d)(?=\D)/);
  return (
    <div className="p-8 rounded-3xl bg-white shadow-[2px_4px_15px_0px_rgba(133,_133,_167,_0.25)] relative">
      <div className="h-full overflow-hidden rounded-xl">
        <h4 className="text-xl font-bold text-center">{title}</h4>
        <p className="text-base mt-1 text-center">{description}</p>
        <div className="mt-4 bg-[#F4F4F4] h-full p-3 rounded-xl flex justify-between">
          <div>
            <p className="text-primary text-lg font-bold">Due Date</p>
            <p>{dueDateValue}</p>
          </div>
          <div>
            <p className="text-red-400 text-lg font-bold">Penalty fees</p>
            {penaltyFees.map((item, index) => {
              const parts = item.split(" ");
              const amount = parts[0];
              const description = parts.slice(1).join(" ");
              return (
                <p key={index}>
                  <span className="font-bold">{amount} </span>
                  {description}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bg-card-gradient text-2xl font-bold text-white p-1 rounded-lg w-11 h-11 -top-2 -left-2">
        {numberPart}
        <span className="text-lg align-text-top">{indicatorPart}</span>
      </div>
    </div>
  );
};

export default JoinCard;
