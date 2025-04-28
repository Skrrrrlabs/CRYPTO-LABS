import React from 'react';

const Home = () => {
  return (
    <div style={wrapperStyle}>
      <h1 style={titleStyle}>🚀 CRYPTO LABS 공식 레퍼럴 🚀</h1>
      <div style={cardWrapper}>
        {cards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <img src={card.img} alt={card.alt} style={card.alt === 'OKX' ? logoStyleSmall : logoStyle} />
            <p style={textStyle}>{card.text}</p>
            <a href={card.link} target="_blank" rel="noopener noreferrer" style={card.buttonStyle}>
              가입하기
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// 스타일
const wrapperStyle = {
  fontFamily: 'Poppins, Noto Sans KR, sans-serif',
  textAlign: 'center',
  padding: '60px 20px',
  backgroundColor: '#f9fafb',
  minHeight: '100vh',
};

const titleStyle = {
  fontSize: '32px',
  marginBottom: '40px',
  color: '#333',
};

const cardWrapper = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  flexWrap: 'wrap',
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
  width: '260px',
  height: '360px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'transform 0.3s',
};

const logoStyle = {
  width: '120px',
  height: 'auto',
  margin: '20px 0 10px',
};

const logoStyleSmall = {
  width: '100px',
  height: 'auto',
  margin: '30px 0 10px',
};

const textStyle = {
  fontSize: '15px',
  color: '#555',
  marginBottom: '20px',
  lineHeight: '1.5',
};

const buttonCommon = {
  display: 'inline-block',
  width: '120px',
  height: '40px',
  lineHeight: '40px',
  fontWeight: 'bold',
  textDecoration: 'none',
  borderRadius: '8px',
  transition: 'background-color 0.3s',
};

const cards = [
  {
    img: '/binance.png',
    alt: 'Binance',
    text: '바이낸스 현물/선물 10% 수수료 할인!',
    link: 'https://accounts.binance.com/register?ref=V5EBF1SH',
    buttonStyle: {
      ...buttonCommon,
      backgroundColor: '#F0B90B',
      color: '#000',
    },
  },
  {
    img: '/okx.png',
    alt: 'OKX',
    text: 'OKX 평생 수수료 할인 + 20% 페이백!',
    link: 'https://www.okx.com/join/SKRRRR',
    buttonStyle: {
      ...buttonCommon,
      backgroundColor: '#000',
      color: '#fff',
    },
  },
  {
    img: '/bitget.png',
    alt: 'Bitget',
    text: '비트겟 평생 수수료 할인 + 20% 페이백!',
    link: 'https://www.bitget.com/register?ref=SKRRRR',
    buttonStyle: {
      ...buttonCommon,
      backgroundColor: '#1c72c6',
      color: '#fff',
    },
  },
];

export default Home;
