import React from "react";

export default function BestPostCard({ postData }) {
  const title = postData?.title || "게시글 제목이 없습니다.";
  const createdAt = postData?.createdAt;

  const formatDate = (dateString) => {
    if (!dateString) return "2000. 01. 01";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}. ${month}. ${day}`;
  };

  return (
    <div className="relative flex flex-col justify-between w-full h-[169px] bg-[#F9FAFB] rounded-[8px] px-6 pt-[54px] pb-5 box-border shadow-sm">
      <div className="absolute top-0 left-0 w-[102px] h-[32px] bg-[#3692FF] text-white text-[14px] font-bold rounded-tl-[8px] rounded-b-[16px] flex items-center justify-center gap-1.5 z-10">
        <span className="text-[14px]">🏅</span> Best
      </div>

      <div className="flex justify-between items-start w-full gap-3">
        <h3 className="text-[#1F2937] text-[18px] font-semibold leading-[26px] tracking-tight line-clamp-2 word-break break-all">
          {title}
        </h3>

        <div className="w-[72px] h-[72px] bg-white border border-[#E5E7EB] rounded-[12px] flex items-center justify-center shrink-0 overflow-hidden p-1.5">
          <img
            src="/macbook.png"
            alt="게시글 썸네일 (기본: 노트북)"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src = "/notebook.png";
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between w-full text-[14px] text-[#9CA3AF] font-medium pt-1">
        <div className="flex items-center gap-2.5">
          <span className="text-[#4B5563] font-semibold">총명한판다</span>
          <div className="flex items-center gap-1 text-[#9CA3AF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-[16px] h-[16px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <span className="text-[13px] font-normal">9999+</span>
          </div>
        </div>
        <span className="text-[#9CA3AF] text-[14px]">
          {formatDate(createdAt)}
        </span>
      </div>
    </div>
  );
}
