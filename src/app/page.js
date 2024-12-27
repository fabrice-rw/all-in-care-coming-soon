"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white font-[family-name:var(--font-geist-sans)]">
      <div className="text-center px-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
        All In Care Ltd.
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 text-gray-300">
          Coming soon. Stay tuned!
        </p>
        <p className="text-lg mb-8 font-[family-name:var(--font-geist-mono)] text-gray-400">
          Contact us at{" "}
          <a href="mailto:info@allincare.rw" className="text-white hover:text-gray-300 transition-colors">
            info@allincare.rw
          </a>
        </p>
        <button
          onClick={() => window.location.href = "mailto:info@allincare.rw"}
          className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-all"
        > 
          Contact Us
        </button>
      </div>
    </div>
  );
}