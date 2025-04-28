import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
      <h1 style={{ marginTop: '40px' }}>🚀 CRYPTO LABS 공식 레퍼럴 🚀</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '40px' }}>
        
        {/* Binance 카드 */}
        <div style={cardStyle}>
          <img 
            src="/binance.png" 
            alt="Binance" 
            style={logoStyle('#F0B90B')} 
          />
          <p style={textStyle}>
            바이낸스 현물/선물 10% 수수료 할인!
          </p>
          <button style={buttonStyle('#F0B90B', '#000')}>
            가입하기
          </button>
        </div>

        {/* OKX 카드 */}
        <div style={cardStyle}>
          <img 
            src="/okx.png" 
            alt="OKX" 
            style={logoStyle('#000')} 
          />
          <p style={textStyle}>
            OKX 평생 수수료 할인 + <br />20% 페이백!
          </p>
          <button style={buttonStyle('#000', '#fff')}>
            가입하기
          </button>
        </div>

      </div>
    </div>
  );
}

// 스타일 정의
const cardStyle = {
  width: '250px',
  padding: '30px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  borderRadius: '12px',
  backgroundColor: '#fff'
};

const logoStyle = (color) => ({
  width: '180px',
  height: 'auto',
  marginBottom: '25px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
});

const textStyle = {
  fontSize: '18px',
  marginBottom: '20px',
  lineHeight: '1.4'
};

const buttonStyle = (bgColor, textColor) => ({
  backgroundColor: bgColor,
  color: textColor,
  padding: '14px 32px',
  fontSize: '18px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
});
