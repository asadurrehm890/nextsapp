const mCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-screen-lg mx-auto px-2">
      <div className="flex">
        <div className="w-1/2 p-4">
          <h2 className="text-5xl font-semibold">{title}</h2>
          <button className="mt-6 px-4 py-2 bg-green-700 font-bold text-white rounded-md">
            Read More
          </button>
        </div>
        <div className="w-1/2">
          <img src={image} alt={title} className="object-cover h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default mCard;