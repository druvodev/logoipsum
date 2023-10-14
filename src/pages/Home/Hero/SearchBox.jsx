const SearchBox = () => {
  return (
    <div className="w-full flex mt-14 font-inter">
      <input
        type="text"
        placeholder="Search by name"
        className="w-full py-4 px-4 rounded-l-lg font-bold text-[#AEB0B4] focus:text-primary/60 outline-primary/50"
      />
      <input
        type="button"
        className="py-4 px-12 bg-primary hover:bg-sky-600 active:bg-sky-700 font-semibold rounded-r-lg text-white cursor-pointer"
        value="Search"
      />
    </div>
  );
};

export default SearchBox;
