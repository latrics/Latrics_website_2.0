import React from "react";

interface ImagePlaceholderProps {
  mainText?: string;
  className?: string;
}

export default function ImagePlaceholder({ 
  mainText = "Drop a photo or video still",
  className = ""
}: ImagePlaceholderProps) {
  return (
    <div className={`w-full h-full bg-[#f2f2f2] flex flex-col items-center justify-center p-6 border-2 border-transparent hover:border-dashed hover:border-gray-300 transition-all cursor-pointer group ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-8 h-8 text-gray-400 mb-3 group-hover:text-gray-500 transition-colors"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
      <p className="text-gray-500 text-sm font-medium mb-1 text-center">{mainText}</p>
      <p className="text-gray-400 text-xs text-center">or <span className="underline underline-offset-2">browse files</span></p>
    </div>
  );
}
