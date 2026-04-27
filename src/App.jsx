export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>🏠 포스코사랑공인중개사</div>
        <nav style={styles.nav}>
          <a href="#home">홈</a>
          <a href="#service">서비스</a>
          <a href="#property">추천매물</a>
          <a href="#contact">상담문의</a>
        </nav>
      </header>

      <section id="home" style={styles.hero}>
        <div>
          <p style={styles.badge}>대전 부동산 상담 전문</p>
          <h1 style={styles.title}>
            믿고 맡기는<br />
            대전 부동산 파트너
          </h1>
          <p style={styles.subtitle}>
            아파트 매매 · 전세 · 월세 · 상가 · 원룸까지<br />
            고객 상황에 맞는 맞춤 매물을 안내드립니다.
          </p>

          <div style={styles.buttonBox}>
            <a href="tel:010-1234-5678" style={styles.primaryBtn}>
              📞 전화상담
            </a>
            <a
              href="https://open.kakao.com/"
              target="_blank"
              rel="noreferrer"
              style={styles.kakaoBtn}
            >
              💬 카카오톡 상담
            </a>
          </div>
        </div>

        <div style={styles.heroCard}>
          <h3>빠른 상담 가능</h3>
          <p>원하시는 지역, 예산, 입주 시기를 알려주시면 맞춤 매물을 추천드립니다.</p>
          <ul>
            <li>✔ 대전 아파트 전문</li>
            <li>✔ 실거주 · 투자 상담</li>
            <li>✔ 친절한 1:1 상담</li>
          </ul>
        </div>
      </section>

      <section id="service" style={styles.section}>
        <h2 style={styles.sectionTitle}>주요 서비스</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>🏢 아파트 매매</h3>
            <p>실거주와 투자 목적에 맞는 아파트 매물을 안내합니다.</p>
          </div>
          <div style={styles.card}>
            <h3>🔑 전세 · 월세</h3>
            <p>예산과 생활권에 맞는 전월세 매물을 빠르게 찾아드립니다.</p>
          </div>
          <div style={styles.card}>
            <h3>🏬 상가 · 사무실</h3>
            <p>창업, 이전, 확장에 필요한 상권 중심 매물을 상담합니다.</p>
          </div>
        </div>
      </section>

      <section id="property" style={styles.sectionLight}>
        <h2 style={styles.sectionTitle}>추천 매물</h2>
        <div style={styles.grid}>
          <div style={styles.propertyCard}>
            <div style={styles.imageBox}>아파트 이미지</div>
            <h3>대전 인기 아파트</h3>
            <p>방 3개 · 화장실 2개 · 실거주 추천</p>
            <strong>상담 문의</strong>
          </div>
          <div style={styles.propertyCard}>
            <div style={styles.imageBox}>전세 매물</div>
            <h3>역세권 전세</h3>
            <p>교통 편리 · 신혼부부 추천</p>
            <strong>상담 문의</strong>
          </div>
          <div style={styles.propertyCard}>
            <div style={styles.imageBox}>상가 매물</div>
            <h3>상권 좋은 상가</h3>
            <p>카페 · 사무실 · 소형창업 추천</p>
            <strong>상담 문의</strong>
          </div>
        </div>
      </section>

      <section style={styles.reviewSection}>
        <h2 style={styles.sectionTitle}>고객 후기</h2>
        <p style={styles.review}>
          “처음 집을 알아보는 과정이 어려웠는데, 조건에 맞는 매물을 친절하게 안내해주셔서 안심하고 계약할 수 있었습니다.”
        </p>
      </section>

      <section id="contact" style={styles.contact}>
        <h2>상담 문의</h2>
        <p>전화 또는 카카오톡으로 편하게 문의 주세요.</p>
        <div style={styles.buttonBox}>
          <a href="tel:010-1234-5678" style={styles.primaryBtn}>
            📞 010-1234-5678
          </a>
          <a
            href="https://open.kakao.com/"
            target="_blank"
            rel="noreferrer"
            style={styles.kakaoBtn}
          >
            💬 카카오톡 상담하기
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <h3>포스코사랑공인중개사</h3>
        <p>주소: 대전광역시 서구</p>
        <p>대표번호: 010-1234-5678</p>
        <p>© 2026 POSCO LOVE REALTY. All rights reserved.</p>
      </footer>
    </div>
  )
}

const styles = {
  page: {
    fontFamily: '"맑은 고딕", Arial, sans-serif',
    color: '#222',
    lineHeight: 1.6,
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    background: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 8%',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '22px',
    color: '#0d47a1',
  },
  nav: {
    display: 'flex',
    gap: '18px',
  },
  hero: {
    minHeight: '620px',
    padding: '80px 8%',
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '40px',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
  },
  badge: {
    display: 'inline-block',
    background: '#0d47a1',
    color: 'white',
    padding: '8px 14px',
    borderRadius: '999px',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '52px',
    lineHeight: 1.2,
    margin: '20px 0',
    color: '#0d2b55',
  },
  subtitle: {
    fontSize: '19px',
    color: '#444',
  },
  buttonBox: {
    marginTop: '28px',
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    background: '#0d47a1',
    color: 'white',
    padding: '15px 24px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  kakaoBtn: {
    background: '#fee500',
    color: '#222',
    padding: '15px 24px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  heroCard: {
    background: 'white',
    padding: '34px',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
  },
  section: {
    padding: '80px 8%',
    background: 'white',
  },
  sectionLight: {
    padding: '80px 8%',
    background: '#f5f8fc',
  },
  sectionTitle: {
    fontSize: '34px',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#0d2b55',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
  },
  card: {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  },
  propertyCard: {
    background: 'white',
    padding: '22px',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  },
  imageBox: {
    height: '170px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #bbdefb, #e3f2fd)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0d47a1',
    fontWeight: 'bold',
    marginBottom: '18px',
  },
  reviewSection: {
    padding: '70px 8%',
    background: '#ffffff',
    textAlign: 'center',
  },
  review: {
    maxWidth: '780px',
    margin: '0 auto',
    fontSize: '20px',
    background: '#f5f8fc',
    padding: '30px',
    borderRadius: '18px',
  },
  contact: {
    padding: '80px 8%',
    background: '#0d47a1',
    color: 'white',
    textAlign: 'center',
  },
  footer: {
    background: '#111',
    color: 'white',
    textAlign: 'center',
    padding: '34px',
  },
}