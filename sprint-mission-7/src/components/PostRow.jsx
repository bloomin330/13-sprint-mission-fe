import React from "react";
import Link from "next/link";

export default function PostRow({ post }) {
  const id = post?.id;
  const title = post?.title || "게시글 제목이 없습니다.";
  const createdAt = post?.createdAt;

  const formatDate = (dateString) => {
    if (!dateString) return "2000. 01. 01";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}. ${month}. ${day}`;
  };

  return (
    <Link
      href={`/boards/${id}`}
      className="w-full flex items-center justify-between py-6 border-b border-[#F3F4F6] bg-white box-border select-none cursor-pointer hover:bg-gray-50/50 transition-colors"
    >
      <div className="flex flex-col gap-3.5 flex-1 pr-6">
        {/* 게시글 제목 */}
        <h3 className="text-[#111827] text-[18px] font-semibold tracking-tight line-clamp-1 leading-snug">
          {title}
        </h3>

        <div className="flex items-center text-[14px] text-[#9CA3AF] font-medium">
          <div className="flex items-center gap-2">
            <div className="w-[24px] h-[24px] rounded-full bg-[#E5E7EB] flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#9CA3AF"
                className="w-[14px] h-[14px]"
              >
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 11c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6z" />
              </svg>
            </div>
            <span className="text-[#4B5563] font-medium ml-0.5">
              총명한판다
            </span>
            <span className="text-[#E5E7EB] mx-1">|</span>
            <span className="text-[#9CA3AF] font-normal">
              {formatDate(createdAt)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 shrink-0">
        <div className="flex items-center gap-1.5 text-[#374151]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px] h-[20px] text-[#9CA3AF]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <span className="text-[14px] font-medium text-[#6B7280]">9999+</span>
        </div>

        <div className="w-[72px] h-[72px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[8px] flex items-center justify-center overflow-hidden p-1">
          <img
            src="/notebook.png"
            alt="게시글 썸네일"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </Link>
  );
}
