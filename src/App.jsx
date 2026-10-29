import { useState } from "react";

const ASSET = "https://ferdiandito153.github.io/Silverqueen/assets/";

const flavors = [
  {
    id: "milk",
    name: "Milk Chocolate",
    detail: "with Cashews",
    tone: "pink",
    note: "Klasik yang selalu disukai.",
    emoji: "🥜",
    tag: "THE CLASSIC",
    image: `${ASSET}02-silverqueen-milk-chocolate.jpg`,
  },
  {
    id: "dark",
    name: "Dark Chocolate",
    detail: "with Cashews",
    tone: "dark",
    note: "Lebih intens, lebih bold.",
    emoji: "🍫",
    tag: "BOLD & RICH",
    image: `${ASSET}03-silverqueen-dark-chocolate.jpg`,
  },
  {
    id: "chunky",
    name: "Chunky Bar",
    detail: "Creamy Crunch",
    tone: "yellow",
    note: "Lebih tebal untuk sensasi puas.",
    emoji: "✨",
    tag: "EXTRA CRUNCH",
    image: `${ASSET}04-silverqueen-chunkybar.jpg`,
  },
  {
    id: "fruity",
    name: "Fruity & Nutty",
    detail: "Berry Mood",
    tone: "lilac",
    note: "Perpaduan buah dan kacang.",
    emoji: "🍓",
    tag: "PLAYFUL BITE",
    image: `${ASSET}05-silverqueen-fruity-nutty.jpg`,
  },
];

const gallery = [
  {
    image: `${ASSET}01-silverqueen-colorful.jpg`,
    label: "01 / COLORFUL MOMENT",
    title: "A LITTLE JOY.",
  },
  {
    image: `${ASSET}02-silverqueen-milk-chocolate.jpg`,
    label: "02 / THE CLASSIC",
    title: "SWEET PAUSE.",
  },
  {
    image: `${ASSET}03-silverqueen-dark-chocolate.jpg`,
    label: "03 / BOLD & RICH",
    title: "OWN YOUR MOOD.",
  },
  {
    image: `${ASSET}04-silverqueen-chunkybar.jpg`,
    label: "04 / EXTRA CRUNCH",
    title: "MAKE IT CRUNCHY.",
  },
  {
    image: `${ASSET}05-silverqueen-fruity-nutty.jpg`,
    label: "05 / FRUITY & NUTTY",
    title: "SWEET MOMENT.",
  },
];

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="SilverQueen beranda">
      Silver<span>Queen</span><i>♥</i>
    </a>
  );
}

function ProductArt() {
  return (
    <div className="hero-art" aria-label="Produk cokelat SilverQueen">
      <div className="art-sunburst">✳</div>
      <span className="doodle doodle-heart">♡</span>
      <span className="doodle doodle-spark">✳</span>
      <div className="chocolate-splash splash-one" />
      <div className="chocolate-splash splash-two" />
      <span className="cashew cashew-one">◔</span>
      <span className="cashew cashew-two">◔</span>
      <span className="cashew cashew-three">◔</span>

      <div className="hero-product-image">
        <img
          src={`${ASSET}01-silverqueen-colorful.jpg`}
          alt="Konsep visual produk SilverQueen colorful"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="art-sticker">
        <span>GOOD</span><b>MOOD!</b><i>☺</i>
      </div>
      <div className="art-caption">a little bite<br />of happiness <span>♥</span></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFlavor, setActiveFlavor] = useState(flavors[0]);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);

  const orderedGallery = [
    ...gallery.slice(galleryIndex),
    ...gallery.slice(0, galleryIndex),
  ];

  function subscribe(event) {
    event.preventDefault();
    if (email.trim() && email.includes("@")) setSubscribed(true);
  }

  return (
    <div className="site-shell" id="home">
      <div className="top-confetti" aria-hidden="true">
        <span>✳</span><span>♡</span><span>✦</span><span>✳</span>
      </div>

      <header className="navbar">
        <Logo />
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Products", "#products"],
            ["Why Special", "#special"],
            ["Gallery", "#gallery"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#products">
          Find Your Flavor <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> MOMEN KECIL, RASA BESAR
            </div>
            <h1>
              GOOD<br /><em>CHOCOLATE.</em><br />GOOD <span>MOOD!</span>
              <b className="smile">☺</b>
            </h1>
            <p>
              Rasa cokelat yang selalu bikin momen biasa jadi luar biasa.
              Buka satu, bagikan senyum, bikin hari lebih manis.
            </p>
            <div className="hero-actions">
              <a className="button button-red" href="#products">
                Jelajahi Rasanya <span>↗</span>
              </a>
              <button
                className="button button-outline"
                onClick={() => setStoryOpen(true)}
              >
                Tonton Cerita <span>▶</span>
              </button>
            </div>
            <div className="hero-footnote">
              <span>01.</span> SHARE A LITTLE HAPPINESS <span>♥</span>
            </div>
          </div>
          <ProductArt />
          <div className="hero-side-note">
            SWEETNESS<br />IN EVERY<br /><b>SHARE.</b>
          </div>
        </section>

        <section className="mini-benefits" id="special">
          <div className="benefit-intro">
            <span>✳</span>
            <p>Lebih dari<br /><b>sekadar cokelat!</b> <i>♡</i></p>
          </div>
          <div className="benefit">
            <span className="benefit-icon">♡</span>
            <b>Cokelat Berkualitas</b>
            <small>Untuk momen spesialmu.</small>
          </div>
          <div className="benefit">
            <span className="benefit-icon yellow">♧</span>
            <b>Kacang Mede Pilihan</b>
            <small>Renyah di setiap gigitan.</small>
          </div>
          <div className="benefit">
            <span className="benefit-icon pink">☺</span>
            <b>Selalu Temani</b>
            <small>Berbagi jadi lebih seru.</small>
          </div>
        </section>

        <section className="products-section section-pad" id="products">
          <div className="section-heading">
            <div>
              <span className="eyebrow red-eyebrow">PILIH FAVORITMU</span>
              <h2>VARIAN RASA<br /><em>SILVERQUEEN.</em></h2>
            </div>
            <p>
              Dari yang klasik sampai yang unik, selalu ada rasa yang pas buat
              setiap mood kamu.
            </p>
          </div>

          <div className="flavor-layout">
            <div className="flavor-list">
              {flavors.map((flavor, index) => (
                <button
                  key={flavor.id}
                  className={`flavor-card ${flavor.tone} ${
                    activeFlavor.id === flavor.id ? "selected" : ""
                  }`}
                  onClick={() => setActiveFlavor(flavor)}
                >
                  <span className="flavor-index">0{index + 1} / FLAVOR</span>
                  <span className="flavor-emoji">{flavor.emoji}</span>
                  <span className="flavor-name">{flavor.name}</span>
                  <span className="flavor-detail">{flavor.detail}</span>
                  <span className="flavor-arrow">↗</span>
                </button>
              ))}
            </div>

            <div className={`flavor-feature ${activeFlavor.tone}`}>
              <div className="feature-copy">
                <span className="eyebrow">{activeFlavor.tag}</span>
                <h3>{activeFlavor.name}<br /><em>{activeFlavor.detail}</em></h3>
                <p>{activeFlavor.note}</p>
                <span className="feature-caption">FIND YOUR HAPPY BITE ✳</span>
              </div>
              <div className="feature-product">
                <img
                  className="flavor-product-image"
                  src={activeFlavor.image}
                  alt={`Konsep visual ${activeFlavor.name} SilverQueen`}
                  loading="lazy"
                />
                <span className="feature-cashew">◔</span>
                <span className="feature-spark">✳</span>
              </div>
            </div>
          </div>
          <p className="small-disclaimer">
            Varian di atas merupakan konsep visual untuk portfolio, bukan
            katalog resmi produk.
          </p>
        </section>

        <section className="story-section section-pad" id="about">
          <div className="story-copy">
            <span className="eyebrow red-eyebrow">MOMEN LEBIH BERMAKNA</span>
            <h2>SETIAP GIGITAN,<br /><em>PUNYA CERITA.</em></h2>
            <p>
              SilverQueen selalu hadir di momen spesial, atau bahkan momen
              sederhana yang tetap berarti. Karena kebahagiaan sering dimulai
              dari hal kecil.
            </p>
            <a href="#gallery" className="text-link">
              Lihat Ceritanya <span>→</span>
            </a>
          </div>
          <div className="memory-board">
            <div className="memory-photo photo-one">
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=700&q=85"
                alt="Teman-teman berkumpul dalam momen bahagia"
                loading="lazy"
              />
              <span>Teman selalu bikin seru ♥</span>
            </div>
            <div className="memory-photo photo-two">
              <img
                src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=700&q=85"
                alt="Teman-teman menikmati waktu bersama"
                loading="lazy"
              />
              <span>Small moments, big smiles</span>
            </div>
            <div className="memory-note">SWEET<br />MEMORIES <b>♡</b></div>
            <span className="memory-confetti confetti-one">✳</span>
            <span className="memory-confetti confetti-two">♥</span>
          </div>
        </section>

        <section className="why-section section-pad">
          <div className="why-heading">
            <span className="eyebrow">KENAPA SILVERQUEEN?</span>
            <h2>HAL KECIL YANG<br /><em>BIKIN SPESIAL.</em></h2>
          </div>
          <div className="why-grid">
            <article>
              <span className="why-icon pink">♡</span>
              <h3>Chocolate Love</h3>
              <p>Cokelat untuk menemani momen sederhana dan spesial.</p>
            </article>
            <article>
              <span className="why-icon yellow">♧</span>
              <h3>Cashew Crunch</h3>
              <p>Inspirasi tekstur renyah dalam setiap gigitan.</p>
            </article>
            <article>
              <span className="why-icon red">✿</span>
              <h3>Share the Joy</h3>
              <p>Lebih manis saat dinikmati dan dibagikan bersama.</p>
            </article>
            <article>
              <span className="why-icon lilac">✦</span>
              <h3>Everyday Treat</h3>
              <p>Jeda kecil yang bisa mengubah mood harianmu.</p>
            </article>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="section-heading">
            <div>
              <span className="eyebrow red-eyebrow">GALERI</span>
              <h2>MOMEN MANIS<br /><em>BERSAMA.</em></h2>
            </div>
            <div className="gallery-controls">
              <button
                aria-label="Foto sebelumnya"
                onClick={() =>
                  setGalleryIndex((galleryIndex + gallery.length - 1) % gallery.length)
                }
              >
                ←
              </button>
              <button
                aria-label="Foto berikutnya"
                onClick={() => setGalleryIndex((galleryIndex + 1) % gallery.length)}
              >
                →
              </button>
            </div>
          </div>
          <div className="gallery-grid">
            {orderedGallery.map((item) => (
              <figure key={item.label} className="gallery-card">
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>
                  <small>{item.label}</small>
                  <b>{item.title}</b>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-decoration cta-left">✳</div>
          <div className="cta-decoration cta-right">♡</div>
          <span className="eyebrow">SHARE A LITTLE HAPPINESS</span>
          <h2>SIAP BIKIN<br /><em>MOMENMU MANIS?</em></h2>
          <p>Temukan varian favoritmu dan bagikan momen manis hari ini.</p>
          <a className="button button-white" href="#products">
            Cari Favoritmu <span>♥</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <Logo />
          <p>Little bites, lovely moments.<br />Sebuah konsep landing page kreatif.</p>
          <div className="social-links">
            <a href="#gallery" aria-label="Instagram">◎</a>
            <a href="#gallery" aria-label="TikTok">♪</a>
            <a href="#gallery" aria-label="Video">▶</a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <b>Explore</b>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#special">Why Special</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div>
            <b>Stay in the loop</b>
            <p>Dapatkan kabar manis terbaru.</p>
            <form className="newsletter" onSubmit={subscribe}>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribed(false);
                }}
                placeholder="Masukkan email kamu"
                aria-label="Email kamu"
                required
              />
              <button type="submit" aria-label="Daftar newsletter">→</button>
            </form>
            {subscribed && (
              <small className="success-message">Makasih! Ini demo newsletter ya 💌</small>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SilverQueen concept. Portfolio demo.</span>
          <span>Konsep tidak resmi · Bukan situs brand resmi.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

      {storyOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setStoryOpen(false)}
        >
          <div
            className="story-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setStoryOpen(false)}
              aria-label="Tutup"
            >
              ×
            </button>
            <span className="eyebrow red-eyebrow">A LITTLE STORY</span>
            <h2 id="story-title">Good chocolate.<br /><em>Better together.</em></h2>
            <p>
              Kadang momen paling manis bukan soal seberapa besar acaranya,
              tapi siapa yang ada di samping kita. Bagikan satu gigitan, satu
              cerita, dan satu senyum hari ini.
            </p>
            <a
              className="button button-red"
              href="#gallery"
              onClick={() => setStoryOpen(false)}
            >
              Lihat Momen Manis ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
