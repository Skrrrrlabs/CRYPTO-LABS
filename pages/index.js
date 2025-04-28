import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textAlign: 'center', padding: '50px' }}>
      <h1>🚀 CRYPTO LABS 공식 레퍼럴 🚀</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
        {/* Binance Card */}
        <div style={cardStyle}>
          <img src="/binance.png" alt="Binance" style={logoStyle('#F0B90B')} />
          <p style={textStyle}>바이낸스 현물/선물 10% 수수료 할인!</p>
          <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" rel="noopener noreferrer" style={binanceBtn}>가입하기</a>
        </div>

        {/* OKX Card */}
        <div style={cardStyle}>
          <img src="/okx.png" alt="OKX" style={logoStyle('#000')} />
          <p style={textStyle}>OKX 평생 수수료 할인 + 20% 페이백!</p>
          <a href="https://www.okx.com/join/SKRRRR" target="_blank" rel="noopener noreferrer" style={okxBtn}>가입하기</a>
        </div>

        {/* Bitget Card */}
        <div style={cardStyle}>
          <img src="/bitget.png" alt="Bitget" style={logoStyle('#1c72c6')} />
          <p style={textStyle}>비트겟 평생 수수료 할인 + 20% 페이백!</p>
          <a href="https://www.bitget.com/register?ref=SKRRRR" target="_blank" rel="noopener noreferrer" style={okxBtn}>가입하기</a>
        </div>
      </div>
    </div>
  );
};

// 스타일 정의
const cardStyle = {
  border: '1px solid #eee',
  borderRadius: '12px',
  width: '250px',
  height: '280px', // 카드 높이 줄임
  padding: '20px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // 이미지와 버튼 사이를 동일하게 배치
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
  width: '160px',  // 이미지 너비를 고정
  height: 'auto',  // 자동으로 높이 맞추기
  maxHeight: '160px', // 최대 높이 설정
  marginBottom: '25px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderColor: color,
});

const textStyle = {
  fontSize: '14px',  // 폰트 크기를 한 치수 내려서 글씨가 두번째 줄로 넘어가지 않게 함
  lineHeight: '1.4',  // 줄 간격 조금 더 넓힘
};

export default Home;
