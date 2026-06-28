import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* 1. Header 導覽列（已移除重複嵌套） */}
      <header className="site-header">
        <div className="header-container">
          <div className="brand-logo">Yvonne's Space🐷</div>
          <nav className="navigation">
            <ul>
              <li><a href="#hero">首頁</a></li>
              <li><a href="#about">關於我</a></li>
              <li><a href="#articles">職人知識庫</a></li>
              <li><a href="#contact">服務洽談</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 主要內容區 */}
      <main>
        {/* 2. Hero 主視覺區（已移除重複嵌套） */}
        <section id="hero" className="hero-section">
          <div className="container">
            <h1 className="hero-title">用專利的嚴謹守護生命💓，<br />用科技的秩序溫暖中途🏠。</h1>
            <p className="hero-subtitle">
              我是 Yvonne，結合 14 年科技大廠與智財合約經驗，導入工業級良率改善與 AI 轉型思維，為動保組織與中途之家架構安全、高效且經得起檢驗的幸福制度。
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary">洽談跨界合作 / 顧問諮詢</a>
            </div>
          </div>
        </section>

        {/* 3. About 關於我 */}
        <section id="about" className="about-section">
          <div className="container">
            <h2 className="section-title">關於 Yvonne</h2>
            <div className="about-grid">
              
              {/* 左欄：硬核技術與智財防禦力 */}
              <div className="about-left">
                <h3>技術 × 法律 × 數位的三棲通才</h3>
                <ul className="experience-list">
                  <li>
                    <strong>11 年面板大廠資深 RD</strong>
                    <p>深諳技術細節，專精於前段製造到後段模組的工業級良率改善與系統化分析。</p>
                  </li>
                  <li>
                    <strong>3 年光學大廠專利工程師</strong>
                    <p>精通台美中智財法規、專利檢索分析，具備營業秘密保護與嚴謹的合約草擬實力。</p>
                  </li>
                  <li>
                    <strong>生成式 AI 敏捷自學力</strong>
                    <p>深度將 GAI 工具日常工作流程化，擅長將碎片資訊與混亂流程梳理成高效系統。</p>
                  </li>
                </ul>
              </div>

              {/* 右欄：心理韌性與利他共感 */}
              <div className="about-right">
                <div className="profile-card">
                  <h4>溫和如日的職人氣質</h4>
                  <p className="profile-text">
                    外表溫和穩定，內在極有邊界與原則。擅長冷層抽離情緒，用Facts與事實邏輯掌控大局。
                  </p>
                  <h4>動靜皆宜的心理韌性</h4>
                  <p className="profile-text">
                    透過舞蹈發現身體與音樂結合的律動，同時藉由閱讀《金剛經》講解追求人生的平靜喜悅，具備極高的自我療癒與抗壓韌性。
                  </p>
                  <blockquote className="profile-quote">
                    「對人類保持清晰的社交邊界，但對貓咪擁有極深的共感。我願意將關懷轉化為中長期的具體制度化實踐。」
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Courses 課程或服務 */}
        {/* 4. 合作與顧問服務 (Services) */}
        <section id="services" className="services-section">
          <div className="container">
            <h2 className="section-title">合作與顧問服務</h2>
            <p className="section-subtitle-text">
              將頂尖科技業的系統化天賦，以降維方式注入動保福利，為您架構高效、安全且具備防禦力的幸福制度。
            </p>
            
            <div className="services-grid">
              
              {/* 卡片 1：動保制度顧問 */}
              <div className="service-card">
                <div className="card-tag">法律防禦力</div>
                <h3>動保制度顧問</h3>
                <p>專門為貓咪中途之家、動保組織研擬嚴謹的流浪貓領養合約、共同照護協議，從源頭智慧型預防並解決潛在的領養糾紛。</p>
              </div>

              {/* 卡片 2：科技動保架構師 */}
              <div className="service-card">
                <div className="card-tag">數位轉型力</div>
                <h3>科技動保架構師</h3>
                <p>運用生成式 AI（GAI）工具與高階碎片資訊整理天賦，協助非營利動保組織導入自動化工作流、行政優化與高效知識管理系統。</p>
              </div>

              {/* 卡片 3：企業 CSR 跨界聯名 */}
              <div className="service-card">
                <div className="card-tag">跨界資源鏈</div>
                <h3>企業 CSR 跨界聯名</h3>
                <p>串接科技大廠與企業端資源，草擬全新的動物福利組織共同合作模式合約，協助企業實踐社會責任，同時為動保爭取核心資源。</p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Articles 文章或知識 */}
        {/* 5. 職人知識庫 (Articles / Blog) */}
        <section id="articles" className="blog-section">
          <div className="container">
            <h2 className="section-title">職人知識庫</h2>
            
            <div className="blog-list">
              
              {/* 文章 1：法律防禦力 */}
              <article className="blog-item">
                <div className="blog-meta">
                  <span className="blog-category">法律防禦力</span>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <a href="#articles">如何用專利合約思維研擬嚴謹的貓咪領養協議，從源頭預防領養糾紛</a>
                  </h3>
                  <p className="blog-excerpt">
                    流浪動物領養糾紛頻傳，多數是因為前期協議權責模糊。本文結合 3 年光學大廠專利工程師與草擬智財合約的實戰經驗，教你如何用嚴謹的法律防禦力，為中途之家架構經得起檢驗的幸福契約。
                  </p>
                </div>
              </article>

              {/* 文章 2：數位轉型力 */}
              <article className="blog-item">
                <div className="blog-meta">
                  <span className="blog-category">數位轉型力</span>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <a href="#articles">生成式 AI（GAI）如何降維應用於非營利動保組織的行政優化與知識管理</a>
                  </h3>
                  <p className="blog-excerpt">
                    動保組織普遍缺乏系統化的行政管理。我們將分享如何利用主流 AI 工具，建立自動化知識管理幕僚系統，把碎片的流浪貓資料、領養追蹤流程快速自動化，實現高效率的數位行政轉型。
                  </p>
                </div>
              </article>

              {/* 文章 3：秩序重建力 */}
              <article className="blog-item">
                <div className="blog-meta">
                  <span className="blog-category">秩序重建力</span>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <a href="#articles">導入工業級良率改善思維：中途之家的減法打掃與高效空間學</a>
                  </h3>
                  <p className="blog-excerpt">
                    將 11 年面板大廠資深 RD 的良率改善與環境秩序感，應用於多貓中途之家。透過系統化的「減法清掃流程」，在多變數的動保環境中建立高標準、乾爽、高效的貓咪照顧空間管理學。
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* 6. Resources 資源 */}
        {/* 6. 數位工具與資源 (Resources) */}
        <section id="resources" className="resources-section">
          <div className="container">
            <h2 className="section-title">數位工具與資源</h2>
            
            <div className="resources-grid">
              
              {/* 資源 1 */}
              <div className="resource-item-card">
                <span className="resource-type-tag">工具</span>
                <h3>多貓中途之家：環境打掃良率點檢表 (Excel)</h3>
                <p>導入面板大廠前段製造 5S 秩序管理思維，將繁雜的貓舍清掃流程、通風濾網更換與消毒頻率，拆解成可量化的日常點檢工具。</p>
                <div className="resource-download-arrow">→</div>
              </div>

              {/* 資源 2 */}
              <div className="resource-item-card">
                <span className="resource-type-tag">範本</span>
                <h3>動保行政轉型：AI 知識管理與公文速寫 Prompt 模板</h3>
                <p>專為動保組織設計的生成式 AI 指令集。協助行政幕僚快速將碎片化的流浪貓故事、領養追蹤資料，一鍵轉化為標準且具備溫度的文章與公告。</p>
                <div className="resource-download-arrow">→</div>
              </div>

              {/* 資源 3 */}
              <div className="resource-item-card">
                <span className="resource-type-tag">合約</span>
                <h3>智財防禦級：貓咪領養協議共同照護協議防禦條款</h3>
                <p>提取 3 年專利工程師與台美中法規防範實戰經驗，針對常見的領養後醫療糾紛、家訪爭議，提供具備實質法律效力的合約段落範本。</p>
                <div className="resource-download-arrow">→</div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Results 成果 */}
        {/* 7. 專業實績與精準度 (Results) */}
        <section id="results" className="results-section">
          <div className="container">
            <h2 className="section-title">專業實績與精準度</h2>
            
            {/* 上方：數據化大指標 */}
            <div className="results-counter-grid">
              <div className="metric-item">
                <div className="metric-number">14<span>Years</span></div>
                <div className="metric-label">頂尖大廠研發與智財跨界實力</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">100<span>+件</span></div>
                <div className="metric-label">台美中智財合約與法規檢索</div>
              </div>
              <div className="metric-item">
                <div className="metric-number">60<span>分</span></div>
                <div className="metric-label">敏捷迭代與方向對齊效率</div>
              </div>
            </div>

            {/* 下方：細部專案實績 */}
            <div className="results-details">
              <div className="details-column">
                <h3>工業級秩序與防禦力</h3>
                <p>過去 14 年深入頂尖科技大廠一線，將複雜、碎片化且模糊未知的資訊進行系統化梳理。這份對「秩序感」的極致追求，現已轉化為守護動物福利的堅實後盾。</p>
              </div>
              <div className="details-column">
                <ul className="results-bullet-list">
                  <li><strong>良率改善分析：</strong> 11 年面板大廠資深 RD 經驗，深諳前段製造至後段模組的技術細節與系統化製程優化。</li>
                  <li><strong>智財合約安全：</strong> 3 年光學大廠專利工程師背景，精通法規解讀、營業秘密保護與共同合作模式草擬。</li>
                  <li><strong>高效敏捷迭代：</strong> 完美克服完美主義盲點，的面對未知擅長以半成品快速對齊方向，開創跨界合作新模式。</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 8. Contact 聯絡我 */}
        {/* 8. Contact 聯絡我（已整合 Google 表單引導） */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">服務洽談與聯絡</h2>
            
            <div className="contact-card">
              <h3>啟動您的動保制度優化專案</h3>
              <p>
                無論您是尋求合約優化的中途之家創辦人、期待導入 AI 行政幕僚的動保組織，或是規劃動物福利專案的企業 CSR 經理人，歡迎點擊下方按鈕填寫諮詢表單。
              </p>
              <p className="contact-notice">
                ※ 為了維持工業級的顧問品質，我會親自檢視每份表單，並於 3 個工作天內透過 Email 與您取得聯繫。
              </p>
              
              <div className="contact-cta-wrapper">
                {/* 備註：此處 href 未來可直接替換為你的 Google 表單網址 */}
                <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  立即填寫合作洽談表單 →
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* 9. Footer 頁尾 */}
      <footer className="site-footer">
        <div className="container footer-container-inner">
          <div className="footer-brand">Yvonne's Space</div>
          <p className="footer-slogan">用專利的嚴謹守護生命，用科技的秩序溫暖中途。</p>
          <div className="footer-copyright">
            &copy; 2026 Yvonne's Space. All Rights Reserved. 版權所有。
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;