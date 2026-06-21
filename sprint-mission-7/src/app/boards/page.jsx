"use client";

import React, { useEffect, useState } from "react";
import BestPostCard from "@/components/BestPostcard";
import PostRow from "@/components/PostRow";
import SortDropdown from "@/components/SortDropdown";
import Link from "next/link";

export default function BoardsPage() {
  const [bestPosts, setBestPosts] = useState([]);
  const [normalPosts, setNormalPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [orderBy, setOrderBy] = useState("recent");

  const [searchInput, setSearchInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    async function fetchAllPosts() {
      try {
        setIsLoading(true);

        const response = await fetch(
          `http://localhost:4000/articles?page=1&limit=20&sort=${orderBy}&keyword=${searchKeyword}`,
        );
        if (!response.ok) throw new Error("데이터 로드 실패");

        const resData = await response.json();
        const allArticles = resData.data || [];

        setBestPosts(allArticles.slice(0, 3));
        setNormalPosts(allArticles.slice(3));
      } catch (error) {
        console.error("게시글 로드 실패:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllPosts();
  }, [orderBy, searchKeyword]);

  const handleSortChange = (selectedText) => {
    if (selectedText === "최신순") {
      setOrderBy("recent");
    } else if (selectedText === "좋아요순") {
      setOrderBy("like");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchKeyword(searchInput);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 my-10">
      {/* 1. 베스트 게시글 섹션 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 text-[#1F2937]">베스트 게시글</h2>

        {isLoading && bestPosts.length === 0 ? (
          <div className="text-center py-10 text-gray-400">로딩 중...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bestPosts.map((post) => (
              <BestPostCard key={post.id} postData={post} />
            ))}
          </div>
        )}
      </section>

      {/* 2. 일반 게시글 섹션 */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">게시글</h2>
          <Link href="/boards/new">
            <button className="bg-[#3692FF] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition cursor-pointer">
              글쓰기
            </button>
          </Link>
        </div>

        {/* 검색 창 및 드롭다운 배치 구역 */}
        <div className="flex items-center justify-between gap-4 w-full mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              value={searchInput} // 💡 실시간 입력 바인딩
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-11 py-2.5 bg-gray-100 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm box-border"
            />
            {/* 돋보기 아이콘 */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z"
                />
              </svg>
            </div>
          </div>

          {/* 드롭다운 컴포넌트 */}
          <SortDropdown onSortChange={handleSortChange} />
        </div>

        {/* 게시글 리스트 반복 */}
        <div className="flex flex-col gap-4">
          {isLoading && normalPosts.length === 0 ? (
            <div className="text-center py-10 text-gray-400">로딩 중...</div>
          ) : normalPosts.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              등록된 게시글이 없습니다.
            </div>
          ) : (
            normalPosts.map((post) => <PostRow key={post.id} post={post} />)
          )}
        </div>
      </section>
    </div>
  );
}
