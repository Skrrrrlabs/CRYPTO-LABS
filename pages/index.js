// pages/index.js

export default function Home() {
  return (
    <div className="container">
      <main className="main-content">
        <h1 className="title">
          <span className="emoji">🔥</span> SKRRRR x CRYPTO LABS 공식 레퍼럴 <span className="emoji">🔥</span>
        </h1>

        <div className="card-container">
          <div className="card">
            <img src="/binance-logo.png" alt="Binance" className="logo" />
            <p className="description"> 바이네스 현무/선무 10% 수수료 할인! </p>
            <a href="#" className="btn binance"> 가입하기 </a>
          </div>

          <div className="card">
            <img src="/okx-logo.png" alt="OKX" className="logo" />
            <p className="description"> OKX 평상 수수료 할인 + 20% 페이벡! </p>
            <a href="#" className="btn okx"> 가입하기 </a>
          </div>

          <div className="card">
            <img src="/bitget-logo.png" alt="Bitget" className="logo" />
            <p className="description"> 비트겟 평상 수수료 할인 + 20% 페이벡! </p>
            <a href="#" className="btn bitget"> 가입하기 </a>
          </div>
        </div>

        <footer className="footer">
          © 2025 SKRRRR. All rights reserved.
        </footer>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: url('/background.jpg') no-repeat center center/cover;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          color: white;
          margin-bottom: 40px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .card-container {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          width: 260px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo {
          height: 60px;
          margin-bottom: 20px;
        }

        .description {
          font-size: 14px;
          color: #333;
          margin-bottom: 20px;
        }

        .btn {
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          font-weight: bold;
        }

        .btn.binance {
          background: #f0b90b;
        }

        .btn.okx {
          background: #000000;
        }

        .btn.bitget {
          background: #3081c8;
        }

        .footer {
          margin-top: 50px;
          font-size: 12px;
          color: white;
        }

        @media (max-width: 768px) {
          .card-container {
            flex-direction: column;
            gap: 30px;
          }

          .card {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
}
