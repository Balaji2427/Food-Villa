const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-[200px]">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-80 h-60 border-2 border-gray-100 m-[10px] p-[10px] bg-gray-200 rounded-lg mb-28"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
