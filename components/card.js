const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-screen-lg mx-auto px-2">
      <div className="flex">
        <div className="w-2/2 p-4 text-center">
		  <img src={imageUrl} alt={title} className="object-cover h-60 w-full" />
          <h2 className="text-5xl font-semibold">{title}</h2>
          <p>{description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Card;