"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function BoardForm({ isEdit = false }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:4000/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      });

      if (!response.ok) {
        throw new Error("게시글 등록에 실패했습니다.");
      }

      alert("게시글이 성공적으로 등록되었습니다!");

      router.push("/boards");
      router.refresh();
    } catch (error) {
      console.error("등록 에러:", error);
      alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-6 px-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 상단 타이틀 & 버튼 영역 */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-[#1f2937]">
            {isEdit ? "게시글 수정하기" : "게시글 쓰기"}
          </h1>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 text-white text-sm font-medium rounded-lg transition cursor-pointer ${
              isSubmitting ? "bg-gray-400" : "bg-[#3692FF] hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "등록 중" : isEdit ? "수정" : "등록"}
          </button>
        </div>

        <div className="space-y-6">
          {/* 제목 입력란 */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-[#1f2937]">
              *제목
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              className="w-full px-4 py-3 bg-[#f3f4f6] text-sm text-gray-800 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            />
          </div>

          {/* 내용 입력란 */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-[#1f2937]">
              *내용
            </label>
            <textarea
              rows="12"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력해주세요"
              className="w-full px-4 py-4 bg-[#f3f4f6] text-sm text-gray-800 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition resize-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
