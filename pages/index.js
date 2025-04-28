// CRYPTO LABS - 카드형 레퍼럴 링크 UI

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', background: '#f5f5f5' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>🚀 CRYPTO LABS 공식 레퍼럴 🚀</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {/* Binance Card */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
          <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="Binance" style={{ height: '50px', marginBottom: '10px' }} />
          <p>바이낸스 현물/선물 10% 수수료 할인!</p>
          <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" style={{ display: 'inline-block', marginTop: '10px', padding: '10px 20px', backgroundColor: '#f3ba2f', color: '#000', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>가입하기</a>
        </div>

        {/* OKX Card */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
          <img src="https://static.okx.com/cdn/assets/imgs/221/7F6A626F2C0D4F8F.png" alt="OKX" style={{ height: '50px', marginBottom: '10px' }} />
          <p>OKX 평생 수수료 할인 + 20% 페이백!</p>
          <a href="https://www.okx.com/join/SKRRRR" target="_blank" style={{ display: 'inline-block', marginTop: '10px', padding: '10px 20px', backgroundColor: '#000', color: '#fff', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>가입하기</a>
        </div>
      </div>
    </div>
  );
}
