import React from 'react';

const Home = () => {
  return (
    <div style={contentWrapper}>
      <nav style={navStyle}>
        <div>CRYPTO LABS</div>
        <div>
          <a href="#home" style={navLink}>홈</a>
          <a href="https://t.me/masterlabs1O1" target="_blank" rel="noopener noreferrer" style={navLink}>문의하기</a>
        </div>
      </nav>

      <div style={headerStyle}>🔥 skrrrr x crypto labs 공식 레퍼럴 🔥</div>

      <div style={cardContainer}>
        {/* Binance Card */}
        <div style={cardStyle}>
          <img src="/binance.png" alt="Binance" style={logoStyle} />
          <p style={textStyle}>바이낸스 현물/선물 10% 수수료 할인!</p>
          <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" rel="noopener noreferrer" style={binanceBtn}>가입하기</a>
        </div>

        {/* OKX Card */}
        <div style={cardStyle}>
          <img src="/okx.png" alt="OKX" style={logoStyle} />
          <p style={textStyle}>OKX 평생 수수료 할인 + 20% 페이백!</p>
          <a href="https://www.okx.com/join/SKRRRR" target="_blank" rel="noopener noreferrer" style={okxBtn}>가입하기</a>
        </div>

        {/* Bitget Card */}
        <div style={cardStyle}>
          <img src="/bitget.png" alt="Bitget" style={logoStyle} />
          <p style={textStyle}>비트겟 평생 수수료 할인 + 20% 페이백!</p>
          <a href="https://www.bitget.com/register?ref=SKRRRR" target="_blank" rel="noopener noreferrer" style={bitgetBtn}>가입하기</a>
        </div>
      </div>

      <footer style={footerStyle}>
        © 2025 SKRRRR. All rights reserved.
      </footer>
    </div>
  );
};

// 스타일들
const contentWrapper = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundImage: 'url(/background.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: '12vh 20px 5vh 20px',
};

const navStyle = {
  width: '100%',
  height: '60px',
  backgroundColor: 'rgba(0,0,0,0.8)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '16px',
};

const navLink = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '20px',
};

const headerStyle = {
  fontSize: '26px',
  fontWeight: 'bold',
  color: 'white',
  marginTop: '80px',
  marginBottom: '40px',
  textAlign: 'center',
};

const cardContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
};

const cardStyle = {
  width: '250px',
  height: '320px',
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
};

const logoStyle = {
  width: '120px',
  height: 'auto',
  marginBottom: '15px',
};

const textStyle = {
  fontSize: '14px',
  color: '#333',
  textAlign: 'center',
  marginBottom: '10px',
};

const binanceBtn = {
  backgroundColor: '#F0B90B',
  color: 'black',
  padding: '10px 20px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const okxBtn = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const bitgetBtn = {
  backgroundColor: '#2E8BFF',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const footerStyle = {
  fontSize: '12px',
  color: 'white',
  textAlign: 'center',
  marginBottom: '10px',
};

export default Home;
