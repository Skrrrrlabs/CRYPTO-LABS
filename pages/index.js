// pages/index.js
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={styles.pageWrapper}>
      <Head>
        <title>SKRRRR X CRYPTO LABS 공식 레퍼럴</title>
        <meta name="description" content="SKRRRR X CRYPTO LABS 레퍼럴 페이지" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 상단 내비게이션 */}
      <header style={styles.navbar}>
        <div style={styles.logo}>CRYPTO LABS</div>
        <nav style={styles.menu}>
          <a href="#" style={styles.menuLink}>홈</a>
          <a href="#" style={styles.menuLink}>문의하기</a>
        </nav>
      </header>

      {/* 메인 콘텐츠 */}
      <main style={styles.mainContent}>
        <h1 style={styles.title}>🚀 SKRRRR X CRYPTO LABS 공식 레퍼럴 🚀</h1>
        <div style={styles.cardContainer}>
          {referralCards.map((card, index) => (
            <div key={index} style={styles.card}>
              <img src={card.img} alt={card.name} style={styles.logoImg} />
              <p style={styles.description}>{card.desc}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, backgroundColor: card.color, color: card.textColor }}
              >
                가입하기
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* 하단 푸터 */}
      <footer style={styles.footer}>
        © 2025 SKRRRR. All rights reserved.
      </footer>

      {/* 배경 이미지 */}
      <div style={styles.background} />
    </div>
  );
}

const referralCards = [
  {
    name: 'Binance',
    img: '/binance.png',
    desc: '바이낸스 현물/선물 10% 수수료 할인!',
    link: 'https://accounts.binance.com/register?ref=V5EBF1SH',
    color: '#F0B90B',
    textColor: '#000',
  },
  {
    name: 'OKX',
    img: '/okx.png',
    desc: 'OKX 평생 수수료 할인 + 20% 페이백!',
    link: 'https://www.okx.com/join/SKRRRR',
    color: '#000',
    textColor: '#fff',
  },
  {
    name: 'Bitget',
    img: '/bitget.png',
    desc: '비트겟 평생 수수료 할인 + 20% 페이백!',
    link: 'https://www.bitget.com/register?ref=SKRRRR',
    color: '#1c72c6',
    textColor: '#fff',
  },
];

const styles = {
  pageWrapper: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
  },
  background: {
    backgroundImage: 'url(/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    filter: 'blur(4px) brightness(0.6)',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'relative',
    zIndex: 1,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  menu: {
    display: 'flex',
    gap: '20px',
  },
  menuLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  mainContent: {
    textAlign: 'center',
    padding: '80px 20px 40px',
  },
  title: {
    fontSize: '22px',
    marginBottom: '40px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  },
  card: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '12px',
    padding: '20px',
    width: '240px',
    height: '270px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
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
  },
  footer: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#ccc',
    padding: '30px 10px 10px',
  },
};
