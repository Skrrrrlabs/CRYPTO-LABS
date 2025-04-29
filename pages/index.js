import React from 'react';

const Home = () => {
  return (
    <div style={styles.wrapper}>
      {/* 흐림 + 어둡게 처리한 배경 오버레이 */}
      <div style={styles.backgroundOverlay}></div>

      {/* 상단 메뉴 */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>CRYPTO LABS</div>
        <div style={styles.menuContainer}>
          <a href="#home" style={styles.menuItem}>홈</a>
          <a href="https://t.me/masterlabs1O1" target="_blank" rel="noopener noreferrer" style={styles.menuItem}>문의하기</a>
        </div>
      </nav>

      {/* 메인 타이틀 + 카드 영역 */}
      <div style={styles.mainContainer} id="home">
        <h1 style={styles.header}>🔥 SKRRRR X CRYPTO LABS 공식 레퍼럴 🔥</h1>
        <div style={styles.cardsContainer}>
          {/* Binance */}
          <div style={styles.card}>
            <img src="/binance.png" alt="Binance" style={styles.logoImg} />
            <p style={styles.cardText}>바이낸스 현물/선물 10% 수수료 할인!</p>
            <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" rel="noopener noreferrer" style={styles.binanceButton}>가입하기</a>
          </div>

          {/* OKX */}
          <div style={styles.card}>
            <img src="/okx.png" alt="OKX" style={styles.logoImg} />
            <p style={styles.cardText}>OKX 평생 수수료 할인 + 20% 페이백!</p>
            <a href="https://www.okx.com/join/SKRRRR" target="_blank" rel="noopener noreferrer" style={styles.okxButton}>가입하기</a>
          </div>

          {/* Bitget */}
          <div style={styles.card}>
            <img src="/bitget.png" alt="Bitget" style={styles.logoImg} />
            <p style={styles.cardText}>비트겟 평생 수수료 할인 + 20% 페이백!</p>
            <a href="https://www.bitget.com/register?ref=SKRRRR" target="_blank" rel="noopener noreferrer" style={styles.bitgetButton}>가입하기</a>
          </div>
        </div>
      </div>

      {/* 하단 제작자 문구 */}
      <footer style={styles.footer}>© 2025 SKRRRR. All rights reserved.</footer>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    position: 'relative',
    backgroundImage: 'url(/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '40px',
    overflow: 'hidden',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    zIndex: 1,
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    zIndex: 10,
  },
  logo: {
    color: '#ffffff',
    fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  menuContainer: {
    display: 'flex',
    gap: '20px',
  },
  menuItem: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  mainContainer: {
    marginTop: '100px',
    textAlign: 'center',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: '#f5f5f7',
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
    marginBottom: '40px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    zIndex: 2,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '250px',
    height: '320px',
    borderRadius: '16px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImg: {
    width: '120px',
    height: 'auto',
  },
  cardText: {
    color: '#333',
    fontSize: '14px',
    textAlign: 'center',
    fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
  },
  binanceButton: {
    backgroundColor: '#F0B90B',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  okxButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  bitgetButton: {
    backgroundColor: '#2D8CFF',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: '40px',
    color: '#aaa',
    fontSize: '12px',
    textAlign: 'center',
    fontFamily: '"SF Pro Display", "Helvetica Neue", sans-serif',
    zIndex: 2,
  },
};

export default Home;

