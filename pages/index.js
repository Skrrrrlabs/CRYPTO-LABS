import React from 'react';

const Home = () => {
  return (
    <div style={backgroundStyle}>
      <nav style={navStyle}>
        <div style={navLeft}>CRYPTO LABS</div>
        <div style={navRight}>
          <a href="#home" style={navLink}>홈</a>
          <a href="https://t.me/masterlabs1O1" target="_blank" rel="noopener noreferrer" style={navLink}>문의하기</a>
        </div>
      </nav>
      <div style={wrapperStyle}>
        <h1 style={titleStyle}>🚀 SKRRRR X CRYPTO LABS 공식 레퍼럴 🚀</h1>
        <div style={cardWrapper}>
          {cards.map((card, index) => (
            <div key={index} style={cardStyle}>
              <div style={imageContainerStyle}>
                <img src={card.img} alt={card.alt} style={logoStyle} />
              </div>
              <div style={contentContainerStyle}>
                <p style={textStyle}>{card.text}</p>
                <a href={card.link} target="_blank" rel="noopener noreferrer" style={card.buttonStyle}>
                  가입하기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 스타일
const backgroundStyle = {
  backgroundColor: '#0e1628',
  backgroundImage: 'url(/blockchain-pattern.png)',
  backgroundRepeat: 'repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  color: '#f1f1f1',
  backgroundColor: 'rgba(0,0,0,0.6)',
};

const navLeft = {
  fontWeight: 'bold',
  fontSize: '20px',
};

const navRight = {
  display: 'flex',
  gap: '20px',
};

const navLink = {
  color: '#f1f1f1',
  textDecoration: 'none',
  fontSize: '16px',
};

const wrapperStyle = {
  fontFamily: 'Poppins, Noto Sans KR, sans-serif',
  textAlign: 'center',
  padding: '60px 20px',
};

const titleStyle = {
  fontSize: '32px',
  marginBottom: '40px',
  color: '#f1f1f1',
};

const cardWrapper = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  flexWrap: 'wrap',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
  width: '260px',
  height: '360px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'transform 0.3s',
  padding: '20px',
};

const imageContainerStyle = {
  height: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const logoStyle = {
  width: '100px',
  height: 'auto',
  objectFit: 'contain',
};

const textStyle = {
  fontSize: '14px',
  color: '#333',
  marginBottom: '10px',
  lineHeight: '1.4',
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
      backgroundColor: '#0066FF',
      color: '#fff',
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

