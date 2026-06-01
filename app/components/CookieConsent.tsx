'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('rbg-cookie-consent');
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('rbg-cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-600 leading-relaxed">
          We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies. 
          Play responsibly. 18+
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={accept}
            className="rounded-lg bg-corg-500 px-4 py-2 text-xs font-semibold text-white hover:bg-corg-600 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
