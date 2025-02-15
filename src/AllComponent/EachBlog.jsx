

// eslint-disable-next-line react/prop-types
const EachBlog = ({ date, month, image, title, description }) => {
    return (
        <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <img src={image} alt={title} className="w-full h-56 object-cover" />
          
          <div className="p-5 relative">
            {/* Date Badge */}
            <div className="absolute -top-50 left-4 bg-white shadow-md px-3 py-1 rounded-lg text-center">
              <p className="text-lg font-bold text-gray-900">{date}</p>
              <p className="text-sm text-gray-500 uppercase">{month}</p>
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            
            {/* Read More Link */}
            <a href="#" className="text-[#DB915E] font-semibold hover:underline">READ MORE</a>
          </div>
        </div>
      );
};

export default EachBlog;