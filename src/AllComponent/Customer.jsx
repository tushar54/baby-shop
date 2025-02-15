import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "PAWEL, CHICAGO",
    review:
      "Donec pretium vulputate sapien nec sagittis aliquam hac habitasse platea dictumst quisque sagitt.",
  },
  {
    id: 2,
    name: "JASMINE, CALIFORNIA",
    review:
      "Facilisis magna etiam tempor orci eu lobortis elementum nibh. Id donec ultrices tincidunt arcu.",
  },
  {
    id: 3,
    name: "LOLA, LONDON",
    review:
      "Massa eget egestas purus viverra a in nisl nisi. Ut tortor pretium viverra suspendisse potenti tempor orci ed.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fdfaf5] py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-lg font-semibold text-gray-700 tracking-wide">
          HAPPY CUSTOMERS
        </h2>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div key={item.id} className="text-center">
            {/* Star Ratings */}
            <div className="flex justify-center text-[#E0CAA1] mb-3">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            {/* Review */}
            <p className="text-gray-700 italic px-4">{`"${item.review}"`}</p>
            {/* Name */}
            <p className="mt-3 text-xs font-semibold text-gray-500">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
