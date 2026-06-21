import "./globals.css"; // Tailwind 설정이 들어있는 파일 import!
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="m-0 p-0 bg-gray-50 min-h-screen flex flex-col">
        {/* 공통 헤더 */}
        <Header />

        {/* 본문 영역 (피그마처럼 중앙 정렬 및 최대 가로폭 제한) */}
        <main className="max-w-6xl w-full mx-auto px-4 py-8 flex-1">
          {children}
        </main>

        {/* 공통 푸터 */}
        <Footer />
      </body>
    </html>
  );
}
