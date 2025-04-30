// pages/index.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [lang, setLang] = useState('ko');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const t = lang === 'ko' ? TEXT_KO : TEXT_EN;
  const backgroundImage = isMobile ? '/background-mobile.png' : '/background.png';

  return (
    <div style={{ ...styles.pageWrapper }}>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ 미리보기 및 favicon 설정 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:image" content="https://yourdomain.com/background.png" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <link rel="icon" href="/skrrr_labs_favicon.ico" />
      </Head>

      <header style={styles.navbar}>
        <div style={styles.logo}>CRYPTO LABS</div>
        <nav style={styles.menu}>
          <a href="#" style={styles.menuLink}>{t.home}</a>
          <a href="https://t.me/masterlabs1O1" target="_blank" rel="noopener noreferrer" style={styles.menuLink}>{t.contact}</a>
          <button onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')} style={styles.langToggle}>{lang === 'ko' ? 'EN' : 'KR'}</button>
        </nav>
      </header>

      <main style={styles.mainContent}>
        <h1 style={styles.title}>{t.mainTitle}</h1>
        <div style={styles.cardContainer}>
          {referralCards.map((card, index) => (
            <div key={index} style={styles.card}>
              <img src={card.img} alt={card.name} style={styles.logoImg} />
              <p style={styles.description}>{card.desc[lang]}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.button,
                  backgroundColor: card.color,
                  color: card.textColor,
                  ...(card.name === 'Binance' ? styles.goldHover : {}),
                  ...(card.name === 'OKX' ? styles.okxHover : {}),
                  ...(card.name === 'Bitget' ? styles.bitgetHover : {})
                }}
                onMouseOver={e => {
                  if (card.name === 'Binance') {
                    e.target.style.filter = 'brightness(1.2) drop-shadow(0 0 6px gold)';
                  } else if (card.name === 'OKX') {
                    e.target.style.filter = 'brightness(1.15) drop-shadow(0 0 4px black)';
                  } else if (card.name === 'Bitget') {
                    e.target.style.filter = 'brightness(1.15) drop-shadow(0 0 4px #1c72c6)';
                  }
                }}
                onMouseOut={e => {
                  e.target.style.filter = 'none';
                }}
              >
                {t.joinNow}
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer style={styles.footer}>
        © 2025 SKRRRR. All rights reserved.
      </footer>

      <div style={{
        ...styles.background,
        backgroundImage: `url(${backgroundImage})`
      }} />
    </div>
  );
}

// 이하 TEXT_KO, TEXT_EN, referralCards는 그대로

const styles = {
  pageWrapper: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
  },
  background: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    filter: 'blur(1.5px) brightness(0.75)',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'relative',
    zIndex: 1,
    flexWrap: 'wrap',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  menu: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  menuLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  langToggle: {
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    color: '#fff',
    padding: '3px 8px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '12px'
  },
  mainContent: {
    textAlign: 'center',
    padding: '80px 20px 40px',
  },
  title: {
    fontSize: '22px',
    marginBottom: '40px',
    textShadow: '0 0 6px rgba(255,255,255,0.3)'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    color: '#000',
    borderRadius: '12px',
    padding: '20px',
    width: '240px',
    height: '270px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s ease',
  },
  logoImg: {
    width: '120px',
    maxHeight: '120px',
    objectFit: 'contain',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    textAlign: 'center',
    margin: '10px 0',
  },
  button: {
    padding: '8px 18px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'opacity 0.3s ease',
    cursor: 'pointer',
  },
  goldHover: {
    transition: 'all 0.3s ease',
  },
  okxHover: {
    transition: 'all 0.3s ease',
  },
  bitgetHover: {
    transition: 'all 0.3s ease',
  },
  footer: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#ccc',
    padding: '30px 10px 10px',
  },
};
