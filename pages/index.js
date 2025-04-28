import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textAlign: 'center', padding: '50px' }}>
      <h1>🚀 CRYPTO LABS 공식 레퍼럴 🚀</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
        {/* Binance Card */}
        <div style={cardStyle}>
          <img src="/binance.png" alt="Binance" style={{ width: '100px', marginBottom: '20px' }} />
          <p>바이낸스 현물/선물 10% 수수료 할인!</p>
          <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" rel="noopener noreferrer" style={binanceBtn}>가입하기</a>
        </div>
        {/* OKX Card */}
        <div style={cardStyle}>
          <img src="/okx.png" alt="OKX" style={{ width: '80%', maxWidth: '120px', marginBottom: '20px' }} />
          <p>OKX 평생 수수료 할인 + 20% 페이백!</p>
          <a href="https://www.okx.com/join/SKRRRR" target="_blank" rel="noopener noreferrer" style={okxBtn}>가입하기</a>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #eee',
  borderRadius: '10px',
  padding: '30px',
  width: '200px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff'
};

const binanceBtn = {
  display: 'inline-block',
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#F0B90B',
  color: '#000',
  textDecoration: 'none',
  borderRadius: '5px'
};

const okxBtn = {
  display: 'inline-block',
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#000',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px'
};

export default Home;
