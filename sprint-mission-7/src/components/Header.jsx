import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-[#DFDFDF] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/boards" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="판다마켓 로고"
              width={153}
              height={41}
              priority
              className="object-contain"
            />
          </Link>

          <nav className="flex items-center">
            <Link
              href="/boards"
              className="w-[109px] h-[69px] flex items-center justify-center text-[#3692FF] text-[18px] font-bold leading-none cursor-pointer"
            >
              자유게시판
            </Link>
            <Link
              href="/market"
              className="w-[109px] h-[69px] flex items-center justify-center text-[#4B5563] text-[18px] font-bold leading-none cursor-pointer"
            >
              중고마켓
            </Link>
          </nav>
        </div>

        <button className="inline-flex items-center justify-center h-[42px] px-[23px] bg-[#3692FF] text-white text-sm font-semibold rounded-lg tracking-wide shadow-sm cursor-pointer ">
          로그인
        </button>
      </div>
    </header>
  );
}
