import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textAlign: 'center', padding: '50px' }}>
      <h1>🚀 CRYPTO LABS 공식 레퍼럴 🚀</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
        {/* Binance Card */}
        <div style={cardStyle}>
          <img src="/binance.png" alt="Binance" style={logoStyle('#F0B90B')} />
          <p>바이낸스 현물/선물 10% 수수료 할인!</p>
          <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" rel="noopener noreferrer" style={binanceBtn}>가입하기</a>
        </div>

        {/* OKX Card */}
        <div style={cardStyle}>
          <img src="/okx.png" alt="OKX" style={{ ...logoStyle('#000'), width: '160px' }} />
          <p>OKX 평생 수수료 할인 + 20% 페이백!</p>
          <a href="https://www.okx.com/join/SKRRRR" target="_blank" rel="noopener noreferrer" style={okxBtn}>가입하기</a>
        </div>
      </div>
    </div>
  );
};

// 스타일 정의
const cardStyle = {
  border: '1px solid #eee',
  borderRadius: '12px',
  width: '200px',
  padding: '30px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  textAlign: 'center',
};

const binanceBtn = {
  display: 'inline-block',
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#F0B90B',
  color: '#000',
  textDecoration: 'none',
  borderRadius: '5px',
};

const okxBtn = {
  display: 'inline-block',
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#000',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
};

const logoStyle = (color) => ({
  width: '180px',
  height: 'auto',
  marginBottom: '25px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderColor: color,
});

const textStyle = {
  fontSize: '18px',
  marginBottom: '20px',
  lineHeight: '1.4',
};

export default Home;
