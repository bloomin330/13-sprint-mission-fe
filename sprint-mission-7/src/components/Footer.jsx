import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full h-[160px] pt-[32px] pb-[32px] pl-[400px] pr-[400px] flex-col items-start gap-[10px] bg-[#111827] box-border text-[#6B7280]">
      <div className="flex w-full items-center justify-between mt-auto mb-auto">
        <div className="text-[15px] font-normal select-none">
          ©codeit - 2024
        </div>

        <div className="flex gap-[32px] text-[15px] font-normal">
          <Link
            href="/privacy"
            className="hover:text-gray-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/faq" className="hover:text-gray-300 transition-colors">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-[12px]">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ic_facebook.png"
              alt="Facebook"
              className="w-[20px] h-[20px] object-contain"
            />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ic_twitter.png"
              alt="Twitter"
              className="w-[20px] h-[20px] object-contain"
            />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ic_youtube.png"
              alt="YouTube"
              className="w-[20px] h-[20px] object-contain"
            />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ic_instagram.png"
              alt="Instagram"
              className="w-[20px] h-[20px] object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
