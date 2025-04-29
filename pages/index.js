import React from 'react';

const Home = () => {
  return (
    <div style={styles.wrapper}>
      {/* 헤더 영역 */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>CRYPTO LABS</div>
        <div style={styles.menuContainer}>
          <a href="#home" style={styles.menuItem}>홈</a>
          <a href="https://t.me/masterlabs1O1" target="_blank" rel="noopener noreferrer" style={styles.menuItem}>문의하기</a>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <div style={styles.mainContainer} id="home">
        <h1 style={styles.header}>🔥 skrrrr x crypto labs 공식 레퍼럴 🔥</h1>
        <div style={styles.cardsContainer}>
          {/* Binance Card */}
          <div style={styles.card}>
            <img src="/binance.png" alt="Binance" style={styles.logoImg(120)} />
            <p style={styles.cardText}>바이낸스 현물/선물 10% 수수료 할인!</p>
            <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" rel="noopener noreferrer" style={styles.binanceButton}>가입하기</a>
          </div>

          {/* OKX Card */}
          <div style={styles.card}>
            <img src="/okx.png" alt="OKX" style={styles.logoImg(120)} />
            <p style={styles.cardText}>OKX 평생 수수료 할인 + 20% 페이백!</p>
            <a href="https://www.okx.com/join/SKRRRR" target="_blank" rel="noopener noreferrer" style={styles.okxButton}>가입하기</a>
          </div>

          {/* Bitget Card */}
          <div style={styles.card}>
            <img src="/bitget.png" alt="Bitget" style={styles.logoImg(120)} />
            <p style={styles.cardText}>비트겟 평생 수수료 할인 + 20% 페이백!</p>
            <a href="https://www.bitget.com/register?ref=SKRRRR" target="_blank" rel="noopener noreferrer" style={styles.bitgetButton}>가입하기</a>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer style={styles.footer}>© 2025 SKRRRR. All rights reserved.</footer>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    backgroundImage: 'url(/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbar: {
    width: '100%',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  menuContainer: {
    display: 'flex',
    gap: '20px',
  },
  menuItem: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
  },
  mainContainer: {
    marginTop: '120px',
    textAlign: 'center',
    flexGrow: 1,
  },
  header: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '50px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'white',
    width: '250px',
    height: '320px',
    borderRadius: '16px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImg: (size) => ({
    width: `${size}px`,
    height: 'auto',
    marginBottom: '15px',
  }),
  cardText: {
    fontSize: '14px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '15px',
  },
  binanceButton: {
    backgroundColor: '#F0B90B',
    padding: '10px 20px',
    color: '#000',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
  okxButton: {
    backgroundColor: '#000',
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
  bitgetButton: {
    backgroundColor: '#2D8CFF',
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
  footer: {
    color: 'white',
    fontSize: '12px',
    marginBottom: '20px',
  },
};

export default Home;
