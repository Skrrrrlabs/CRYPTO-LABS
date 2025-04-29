import React from 'react';

const Home = () => {
  return (
    <div style={backgroundWrapper}>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      <div style={backgroundOverlay}></div>
      <nav style={navStyle}>
        <div style={navLeft}>CRYPTO LABS</div>
        <div style={navRight}>
          <a href="#home" style={navLink}>홈</a>
          <a href="https://t.me/masterlabs1O1" target="_blank" rel="noopener noreferrer" style={navLink}>문의하기</a>
        </div>
      </nav>
      <div style={contentWrapper}>
        <div style={mainContent}>
          <h1 style={titleStyle}>🔥 SKRRRR x CRYPTO LABS 공식 레퍼럴 🔥</h1>
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
        <footer style={footerStyle}>© 2025 SKRRRR. All rights reserved.</footer>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .cardWrapper {
              flex-direction: column;
              align-items: center;
            }
            .cardStyle {
              width: 90%;
              height: auto;
              margin-bottom: 20px;
            }
            .titleStyle {
              font-size: 28px;
            }
            .buttonCommon {
              width: 160px;
              height: 50px;
              line-height: 50px;
            }
          }
        `}
      </style>
    </div>
  );
};

// 스타일
const backgroundWrapper = {
  position: 'relative',
  minHeight: '100vh',
  backgroundImage: 'url(/background.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center left',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

const backgroundOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(14, 22, 40, 0.7)',
  backdropFilter: 'blur(2px)',
  zIndex: 1,
};

const navStyle = {
  position: 'relative',
  zIndex: 2,
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

const contentWrapper = {
  position: 'relative',
  zIndex: 2,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const mainContent = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: 'calc(100vh - 160px)',
  paddingTop: '8vh',
};

const titleStyle = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '36px',
  marginBottom: '40px',
  color: '#f1f1f1',
  fontWeight: '700',
  textAlign: 'center',
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
  height: '340px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  transition: 'transform 0.3s ease-in-out',
};

const imageContainerStyle = {
  height: '140px',
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
  fontWeight: 'bold',
  textAlign: 'center',
};

const buttonCommon = {
  display: 'inline-block',
  width: '140px',
  height: '45px',
  lineHeight: '45px',
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
};

const footerStyle = {
  color: '#cccccc',
  fontSize: '14px',
  marginTop: '30px',
  paddingBottom: '20px',
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
