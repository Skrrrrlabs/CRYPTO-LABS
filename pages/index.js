// pages/index.js

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* 상단 메뉴 */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-black/50 text-white z-50">
        <div className="text-sm font-bold">CRYPTO LABS</div>
        <nav className="flex space-x-6 text-sm">
          <a href="#home" className="hover:underline">홈</a>
          <a href="https://t.me/masterlabs1O1" target="_blank" rel="noopener noreferrer" className="hover:underline">문의하기</a>
        </nav>
      </header>

      {/* 메인 내용 */}
      <main id="home" className="flex flex-col items-center justify-center flex-grow pt-32 pb-16 text-center text-white">
        <h1 className="text-3xl font-bold mb-12">
          🔥 SKRRRR x CRYPTO LABS 공식 레퍼럴 🔥
        </h1>

        {/* 카드 섹션 */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Binance Card */}
          <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center hover:scale-105 transform transition">
            <img src="/binance.png" alt="Binance" className="w-24 h-24 mb-4" />
            <p className="text-sm text-center mb-6">바이낸스 현물/선물 10% 수수료 할인!</p>
            <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition">가입하기</a>
          </div>

          {/* OKX Card */}
          <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center hover:scale-105 transform transition">
            <img src="/okx.png" alt="OKX" className="w-24 h-24 mb-4" />
            <p className="text-sm text-center mb-6">OKX 평생 수수료 할인 + 20% 페이백!</p>
            <a href="https://www.okx.com/join/SKRRRR" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition">가입하기</a>
          </div>

          {/* Bitget Card */}
          <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center hover:scale-105 transform transition">
            <img src="/bitget.png" alt="Bitget" className="w-24 h-24 mb-4" />
            <p className="text-sm text-center mb-6">비트겟 평생 수수료 할인 + 20% 페이백!</p>
            <a href="https://www.bitget.com/register?ref=SKRRRR" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition">가입하기</a>
          </div>
        </div>
      </main>

      {/* 하단 제작자 표기 */}
      <footer className="text-center text-xs text-gray-300 py-4">
        © 2025 SKRRRR. All rights reserved.
      </footer>
    </div>
  );
}
