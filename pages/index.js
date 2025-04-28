export default function Home() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 CRYPTO LABS 공식 레퍼럴 🚀</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '30px' }}>
        {/* Binance 카드 */}
        <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px', width: '200px' }}>
          <img src="/binance.png" alt="Binance" style={{ width: '100px', marginBottom: '10px' }} />
          <p>바이낸스 현물/선물 10% 수수료 할인!</p>
          <a href="https://accounts.binance.com/register?ref=V5EBF1SH" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#f0b90b', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              가입하기
            </button>
          </a>
        </div>

        {/* OKX 카드 */}
        <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '20px', width: '200px' }}>
          <img src="/okx.png" alt="OKX" style={{ width: '100px', marginBottom: '10px' }} />
          <p>OKX 평생 수수료 할인 + 20% 페이백!</p>
          <a href="https://www.okx.com/join/SKRRRR" target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: '#000', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              가입하기
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
