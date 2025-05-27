import { PhoneCall, Mail, Clock } from 'lucide-react';
import { FaFileSignature } from 'react-icons/fa';
import Letter from '/permission-Letter/permission-letter.pdf'

export default function HeaderTop() {
  return (
    <div className="w-full bg-[#ffd000] text-gray-800 text-xs sm:text-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4">

        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-[11px] sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900" />
            <span className="font-medium">Open Hours: 9am to 4pm</span>
          </div>

          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900" />
            <a
              href="mailto:info@naiminathayurveda.org"
              className="hover:text-red-600 font-semibold transition duration-200"
            >
              info@naiminathayurveda.org
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-[11px] sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="font-semibold text-yellow-900">Admission enquiry:</span>
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900" />
            <a
              href="tel:+919528024473"
              className="hover:text-red-600 font-bold transition duration-200"
            >
              +91-9528024473
            </a>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <FaFileSignature className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900" />
            <a
              href={Letter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 font-semibold transition duration-200"
            >
              Permission Letter
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
