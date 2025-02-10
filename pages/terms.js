import React from 'react';
import Link from 'next/link';
const Terms = () => {
    return (
      <div className="bg-black min-h-screen">
    <div className="max-w-4xl mx-auto p-6 dark:bg-gray-900 dark:border-gray-700 shadow-lg rounded-lg mt-16">
      <h1 className="text-3xl text-blue-400 font-bold mb-4 text-center">Terms and Conditions</h1>
      <p className="text-white mb-4">
        Welcome to our platform. By signing up, you agree to abide by our terms and conditions. Please read them carefully.
      </p>
      
      <h2 className="text-xl text-blue-400 font-semibold mt-4">1. Acceptance of Terms</h2>
      <p className="text-white">
        By accessing and using our services, you accept and agree to be bound by these Terms and Conditions.
      </p>
      
      <h2 className="text-xl text-blue-400 font-semibold mt-4">2. User Responsibilities</h2>
      <p className="text-white">
        You agree to provide accurate information during registration and not to misuse the platform for illegal activities.
      </p>
      
      <h2 className="text-xl text-blue-400 font-semibold mt-4">3. Privacy Policy</h2>
      <p className="text-white">
        Your privacy is important to us. We collect and handle your data in accordance with our Privacy Policy.
      </p>
      
      <h2 className="text-xl text-blue-400 font-semibold mt-4">4. Posting Violating and Offending Content</h2>
      <p className="text-white">
        Users are strictly prohibited from posting any content that is offensive, discriminatory, illegal, or violates the rights of others. Any such content may be removed, and the user may face suspension or termination of their account.
      </p>
      
      <h2 className="text-xl text-blue-400 font-semibold mt-4">5. Termination</h2>
      <p className="text-white">
        We reserve the right to suspend or terminate your account if you violate these terms.
      </p>
      
      <h2 className="text-xl text-blue-400 font-semibold mt-4">6. Changes to Terms</h2>
      <p className="text-white">
        We may update these terms from time to time. Continued use of our platform constitutes acceptance of any changes.
      </p>
      
      <p className="text-white mt-6">
        If you have any questions, please contact us at <a href="sachinsuresh.dsce@gmail.com" className="text-blue-500 underline">Mail Support</a>.
          </p>
          <div className="items-center justify-center mt-7 flex md:order-2 space-x-10">
           <Link href="/login"> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2">
              Login
          </button>

          </Link>
          <Link href="/signUp"> <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2">
              Signup
          </button>
            </Link>
        </div>
        </div>
        
        </div>
        
  );
};

export default Terms;
