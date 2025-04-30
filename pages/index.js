import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const [lang, setLang] = useState('ko');
  const [isMobile, setIsMobile] = useState(false);
  const [bgmMuted, setBgmMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = bgmMuted;
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }
  }, [bgmMuted]);

  const t = lang === 'ko' ? TEXT_KO : TEXT_EN;
  const backgroundImage = isMobile ? '/background-mobile.png' : '/background.png';

  return (
    <div style={{ ...styles.pageWrapper }}>
      <Head>
        <title>SKRRRR x CRYPTO LABS 공식 레퍼럴</title>
        <meta name="description" content="SKRRRR x CRYPTO LABS 레퍼럴 페이지" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/skrrr_labs_favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SKRRRR x CRYPTO LABS 공식 레퍼럴" />
        <meta property="og:description" content="SKRRRR x CRYPTO LABS 레퍼럴 페이지" />
        <meta property="og:image" content="https://crypto-labs-zeta.vercel.app/og-thumbnail.jpg" />
        <meta property="og:url" content="https://crypto-labs-zeta.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SKRRRR x CRYPTO LABS 공식 레퍼럴" />
        <meta name="twitter:description" content="SKRRRR x CRYPTO LABS 레퍼럴 페이지" />
        <meta name="twitter:image" content="https://crypto-labs-zeta.vercel.app/og-thumbnail.jpg" />
      </Head>

      <audio ref={audioRef} src="/banggooseok_trader_full.mp3" loop autoPlay />

      <button onClick={() => setBgmMuted(!bgmMuted)} style={{
        position: 'fixed', bottom: 20, right: 20, zIndex: 10,
        backgroundColor: '#000', color: '#fff',
        padding: '8px 12px', borderRadius: '8px',
        cursor: 'pointer', fontSize: '12px'
      }}>
        🎵 BGM {bgmMuted ? '켜기' : '끄기'}
      </button>

      <header style={styles.navbar}>
        <div style={styles.logo}>CRYPTO LABS</div>
        <nav style={styles.menu}>
          <a href="#" style={styles.menuLink}>{t.home}</a>
          <a href="https://t.me/masterlabs1O1" target="_blank" rel="noopener noreferrer" style={styles.menuLink}>{t.contact}</a>
          <button onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')} style={styles.langToggle}>
            {lang === 'ko' ? 'EN' : 'KR'}
          </button>
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
        © 2025 CRYPTO LABS LEADER ALPHA. All rights reserved.
      </footer>

      <div style={{
        ...styles.background,
        backgroundImage: `url(${backgroundImage})`
      }} />
    </div>
  );
}
