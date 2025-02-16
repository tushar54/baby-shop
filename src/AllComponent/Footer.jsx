import { FaTwitter, FaInstagram, FaFacebookF, FaPinterestP, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fcf9f6] text-gray-800 py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold">COMPANY</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>About PlayGrow</li>
            <li>Our Experts</li>
            <li>Services & Prices</li>
            <li>Latest News</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Customers Section */}
        <div>
          <h3 className="text-lg font-semibold">CUSTOMERS</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>Read Our Advice</li>
            <li>Get In Touch</li>
            <li>Online Store</li>
            <li>Terms & Conditions</li>
            <li>Ask Away</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold">SOCIAL MEDIA</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPinterestP /> Pinterest
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">CONTACT</h3>
          <p className="mt-3 text-sm text-gray-600">Monday to Friday 9 a.m. - 5 p.m.</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone /> +8801303078081
            </li>
            
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope /> tusharahmed7083@gmail.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>© 2023 Qode Interactive, All Rights Reserved</p>
        <div className="flex justify-center gap-4 mt-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/American_Express_logo.svg" alt="Amex" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
        </div>
      </div>
    </footer>
  );
}
