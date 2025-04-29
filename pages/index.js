<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRYPTO LABS 공식 레퍼럴</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background: url('/background.jpg') no-repeat center center fixed;
      background-size: cover;
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
      backdrop-filter: blur(6px) brightness(80%);
      z-index: 0;
    }

    nav {
      width: 100%;
      padding: 20px 50px;
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      font-size: 14px;
      font-weight: 600;
      color: white;
      z-index: 2;
    }

    .container {
      margin-top: 10vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      z-index: 2;
      position: relative;
      flex: 1;
    }

    h1 {
      color: white;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    .card-wrapper {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .card {
      background: white;
      border-radius: 16px;
      width: 220px;
      padding: 30px 20px;
      text-align: center;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }

    .card img {
      height: 50px;
      margin-bottom: 20px;
    }

    .card p {
      font-size: 14px;
      margin-bottom: 20px;
      min-height: 40px;
    }

    .card a {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      color: white;
    }

    .binance-btn {
      background-color: #F0B90B;
      color: black;
    }

    .okx-btn {
      background-color: black;
    }

    .bitget-btn {
      background-color: #1C72C6;
    }

    footer {
      font-size: 12px;
      color: white;
      margin-bottom: 20px;
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
      z-index: 2;
    }

    @media (max-width: 768px) {
      .card-wrapper {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>

<body>
  <div class="overlay"></div>

  <nav>
    <a href="#home">홈</a>
    <a href="https://t.me/masterlabs1O1" target="_blank">문의하기</a>
  </nav>

  <div class="container" id="home">
    <h1>🔥 SKRRRR x CRYPTO LABS 공식 레퍼럴 🔥</h1>

    <div class="card-wrapper">
      <div class="card">
        <img src="/binance.png" alt="Binance">
        <p>바이낸스 현물/선물 10% 수수료 할인!</p>
        <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" class="binance-btn">가입하기</a>
      </div>
      <div class="card">
        <img src="/okx.png" alt="OKX">
        <p>OKX 평생 수수료 할인 + 20% 페이백!</p>
        <a href="https://www.okx.com/join/SKRRRR" target="_blank" class="okx-btn">가입하기</a>
      </div>
      <div class="card">
        <img src="/bitget.png" alt="Bitget">
        <p>비트겟 평생 수수료 할인 + 20% 페이백!</p>
        <a href="https://www.bitget.com/register?ref=SKRRRR" target="_blank" class="bitget-btn">가입하기</a>
      </div>
    </div>
  </div>

  <footer>
    © 2025 SKRRRR. All rights reserved.
  </footer>
</body>
</html>
