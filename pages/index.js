// pages/index.js

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 text-white bg-black/50">
        <div className="text-sm font-bold">CRYPTO LABS</div>
        <nav className="flex gap-6 text-sm">
          <a href="#home" className="hover:underline">홈</a>
          <a href="https://t.me/masterlabs1O1" target="_blank" rel="noopener noreferrer" className="hover:underline">문의하기</a>
        </nav>
      </header>

      {/* Main Content */}
      <main id="home" className="flex flex-col items-center text-center mt-8 mb-16">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-12">
          <span role="img" aria-label="fire">🔥</span> SKRRRR x CRYPTO LABS 공식 레퍼럴 <span role="img" aria-label="fire">🔥</span>
        </h1>

        {/* Card Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Binance Card */}
          <div className="w-72 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition">
            <img src="/binance.png" alt="Binance" className="h-16 mb-4" />
            <p className="text-gray-700 text-sm mb-6">바이낸스 현물/선물 10% 수수료 할인!</p>
            <a href="#" className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 transition">가입하기</a>
          </div>

          {/* OKX Card */}
          <div className="w-72 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition">
            <img src="/okx.png" alt="OKX" className="h-16 mb-4" />
            <p className="text-gray-700 text-sm mb-6">OKX 평생 수수료 할인 + 20% 페이백!</p>
            <a href="#" className="bg-black text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition">가입하기</a>
          </div>

          {/* Bitget Card */}
          <div className="w-72 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition">
            <img src="/bitget.png" alt="Bitget" className="h-16 mb-4" />
            <p className="text-gray-700 text-sm mb-6">비트겟 평생 수수료 할인 + 20% 페이백!</p>
            <a href="#" className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 transition">가입하기</a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-300 text-xs py-4">
        © 2025 SKRRRR. All rights reserved.
      </footer>
    </div>
  );
}
