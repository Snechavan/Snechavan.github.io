'use client';

import { FiDownload } from 'react-icons/fi';

export default function ResumeDownload() {
  const handleDownload = () => {
    // The PDF is stored in the public directory, so we can reference it directly
    window.open('/resume/Sneha R.pdf', '_blank');
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-soft-cream rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium"
      aria-label="Download Resume"
    >
      <FiDownload className="w-5 h-5" />
      Download Resume
    </button>
  );
} 