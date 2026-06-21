"use client";

import React, { useState, useEffect, useRef } from "react";

export default function SortDropdown({ onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");

  const dropdownRef = useRef(null);

  const options = ["최신순", "좋아요순"];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSortChange) {
      onSortChange(option);
    }
  };

  return (
    <div
      className="relative inline-block text-left select-none"
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-3 bg-white border border-[#E5E7EB] rounded-[16px] px-4 py-2.5 min-w-[100px] text-[15px] font-medium text-[#1F2937] hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span>{selected}</span>

        <svg
          className={`w-[12px] h-[12px] text-[#1F2937] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 16l-6-6h12z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[120px] origin-top-right bg-white border border-[#E5E7EB] rounded-[12px] shadow-lg box-border overflow-hidden z-50">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-2.5 text-[14px] cursor-pointer transition-colors ${
                  selected === option
                    ? "bg-[#F3F4F6] font-semibold text-[#1F2937]"
                    : "text-[#4B5563] hover:bg-gray-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
