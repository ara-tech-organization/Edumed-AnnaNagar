import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {

  useEffect(() => {
    // ✅ Inject Google Ads conversion script
    const script = document.createElement("script");
    script.innerHTML = `
      gtag('event', 'conversion', {
        'send_to': 'AW-17540744930/fTXTCMjaqZ0bEOKNiqxB',
        'value': 500.0,
        'currency': 'INR'
      });
    `;
    document.body.appendChild(script);

    // Cleanup: remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-indigo-50 px-4">
      <Helmet>
        <title>Thank You | Dr. Edumed Academy</title>
        <meta
          name="description"
          content="Thank you for contacting Dr. Edumed Academy. We will get back to you soon."
        />
      </Helmet>

      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg w-full text-center">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-8">
          We’ve received your message. Our team will get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white font-semibold shadow-md hover:scale-[1.02] transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
