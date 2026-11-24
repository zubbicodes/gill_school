/* Gills Driving School — demo interactions */
(() => {
  const PHONE = "096 73030";
  const PHONE_LINK = "tel:+3539673030";
  const EMAIL = "info@gillgroup.ie";
  const page = document.body.dataset.page || "home";

  const icon = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6.5c0-.7.2-1.2 1.3-1.2H17V2.2c-.3 0-1.4-.2-2.6-.2C11.9 2 10.5 3.5 10.5 6.2V8H8v3.3h2.5V22H14V11.3h2.7L17 8h-3z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    li: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/></svg>',
  };
  window.GILLS_ICON = icon;

  const WHEEL = `<svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
      <defs><linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f4fd1"/><stop offset="1" stop-color="#5fb0ff"/></linearGradient></defs>
      <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="4"/>
      <path d="M5 23.5 H17 M31 23.5 H43 M24 30 V43" stroke="currentColor" stroke-width="4.2" stroke-linecap="round"/>
      <circle cx="24" cy="24" r="7.5" fill="url(#bm-g)"/>
      <circle cx="24" cy="24" r="2.6" fill="#fff"/>
    </svg>`;
  const LOGO = `${WHEEL}<span class="brand-text">GILLS<small>Driving School</small></span>`;
  window.GILLS_WHEEL = WHEEL;

  /* ---------- Header + mobile menu ---------- */
  const links = [
    ["index.html", "Home", "home"],
    ["courses.html", "Courses", "courses"],
    ["gift-vouchers.html", "Gift Vouchers", "vouchers"],
    ["about.html", "Our Story", "about"],
    ["contact.html", "Contact", "contact"],
  ];
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="container">
      <a href="index.html" class="brand" aria-label="Gills Driving School home">
        ${LOGO}
      </a>
      <nav class="nav" aria-label="Main">
        ${links.map(([h, t, k]) => `<a href="${h}" class="${k === page ? "is-active" : ""}">${t}</a>`).join("")}
      </nav>
      <div class="header-cta">
        <a class="header-phone" href="${PHONE_LINK}">${icon.phone}${PHONE}</a>
        <a class="btn btn--sm" href="contact.html#enquire">Book a Lesson ${icon.arrow}</a>
        <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
      </div>
    </div>`;
  document.body.prepend(header);

  const mm = document.createElement("div");
  mm.className = "mobile-menu";
  mm.innerHTML = `
    <nav>${links.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}<a href="contact.html#enquire"><span>Book a Lesson →</span></a></nav>
    <div class="mm-foot"><span>Call us Mon–Sat</span><a href="${PHONE_LINK}">${PHONE}</a><span>${EMAIL}</span></div>`;
  document.body.append(mm);

  const progress = document.createElement("div");
  progress.className = "progress";
  document.body.append(progress);

  const toggle = header.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
    if (window.lenis) open ? lenis.stop() : lenis.start();
  });
  mm.querySelectorAll("a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

  /* ---------- Footer ---------- */
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <a href="index.html" class="brand">${LOGO}</a>
          <p>Family-run in Ballina, Co. Mayo for 55 years. Licence training, advanced driving and Driver CPC — nationally and internationally.</p>
          <div class="socials">
            <a href="https://facebook.com/Gillgroupballina/" target="_blank" rel="noopener" aria-label="Facebook">${icon.fb}</a>
            <a href="https://www.instagram.com/gillsdrivingschool/" target="_blank" rel="noopener" aria-label="Instagram">${icon.ig}</a>
            <a href="https://ie.linkedin.com/company/gillgroupireland" target="_blank" rel="noopener" aria-label="LinkedIn">${icon.li}</a>
          </div>
        </div>
        <div>
          <h5>Licences</h5>
          <ul>
            <li><a href="courses.html#car-b">Car (B)</a></li>
            <li><a href="courses.html#jeep-trailer-be">Jeep &amp; Trailer (BE)</a></li>
            <li><a href="courses.html#light-truck-c1">Light Truck (C1)</a></li>
            <li><a href="courses.html#rigid-c">Rigid (C)</a></li>
            <li><a href="courses.html#artic-ce">Artic (CE)</a></li>
            <li><a href="courses.html#minibus-d1">Minibus (D1)</a></li>
            <li><a href="courses.html#bus-d">Bus (D)</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">Our Story</a></li>
            <li><a href="courses.html#training">Training Courses</a></li>
            <li><a href="gift-vouchers.html">Gift Vouchers</a></li>
            <li><a href="index.html#testimonials">Testimonials</a></li>
            <li><a href="contact.html">Contact &amp; Location</a></li>
          </ul>
        </div>
        <div>
          <h5>Stay in the loop</h5>
          <form class="subscribe" data-demo-form="Thanks — you're subscribed!">
            <input type="email" placeholder="Your e-mail" aria-label="Email address" required>
            <button aria-label="Subscribe">${icon.arrow}</button>
          </form>
          <div class="hours">
            <div><b>Mon – Fri</b> 8am – 6pm</div>
            <div><b>Saturday</b> 8am – 5pm (closed 1–2pm)</div>
            <div><b>Sunday</b> Closed</div>
            <div style="margin-top:8px">Church Road, Ballina, Co. Mayo, F26 P2E9</div>
          </div>
        </div>
      </div>
      <div class="footer-word" aria-hidden="true">Gills Driving</div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Gills Driving School · Part of Gill Group</span>
        <nav><a href="#">Terms</a><a href="#">Privacy</a><a href="#">Cookies</a></nav>
      </div>
    </div>`;
  document.body.append(footer);

  /* ---------- Toast + demo forms ---------- */
  const toast = document.createElement("div");
  toast.className = "toast";
  document.body.append(toast);
  let toastT;
  window.showToast = msg => {
    toast.innerHTML = `<i>✓</i>${msg}`;
    toast.classList.add("is-on");
    clearTimeout(toastT);
    toastT = setTimeout(() => toast.classList.remove("is-on"), 3400);
  };
  document.querySelectorAll("[data-demo-form]").forEach(f =>
    f.addEventListener("submit", e => {
      e.preventDefault();
      showToast(f.dataset.demoForm);
      f.reset();
    })
  );

  /* ---------- Split words ---------- */
  document.querySelectorAll("[data-split]").forEach(el => {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) return frag.append(document.createTextNode(" "));
            const w = document.createElement("span");
            w.className = "w";
            w.innerHTML = `<span style="--i:${i++}">${part}</span>`;
            frag.append(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
      });
    };
    walk(el);
    el.classList.add("split-words");
    el.setAttribute("data-reveal-words", "");
  });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
  );
  // clip-path hidden elements have zero visible area for IO, so watch a proxy instead
  const clipIO = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target._clipTarget.classList.add("is-in"); clipIO.unobserve(e.target); }
  }), { threshold: 0.1 });
  document.querySelectorAll('[data-reveal="clip"]').forEach(el => {
    const proxy = el.parentElement;
    proxy._clipTarget = el;
    clipIO.observe(proxy);
  });
  document.querySelectorAll('[data-reveal]:not([data-reveal="clip"]), [data-reveal-words], .timeline').forEach(el => io.observe(el));
  document.querySelectorAll("[data-stagger]").forEach(group => {
    const step = parseFloat(group.dataset.stagger) || 0.08;
    [...group.children].forEach((c, i) => {
      if (!c.hasAttribute("data-reveal")) c.setAttribute("data-reveal", "");
      c.style.setProperty("--d", `${i * step}s`);
      io.observe(c);
    });
  });

  /* ---------- Counters ---------- */
  const cio = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = parseFloat(el.dataset.count), dur = 1800, t0 = performance.now();
    const tick = t => {
      const p = Math.min((t - t0) / dur, 1), v = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(end * v);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    cio.unobserve(el);
  }), { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(el => cio.observe(el));

  /* ---------- Smooth scroll (Lenis) ---------- */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (window.Lenis && !reduce) {
    window.lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length > 1 && document.querySelector(id)) { e.preventDefault(); lenis.scrollTo(id, { offset: -90 }); }
    }));
  }

  /* ---------- Scroll-driven: header, progress, parallax ---------- */
  const parallax = [...document.querySelectorAll("[data-parallax]")];
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 20);
    header.classList.toggle("is-hidden", y > 400 && y > lastY && !document.body.classList.contains("menu-open"));
    lastY = y;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    parallax.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > innerHeight + 100) return;
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const off = (r.top + r.height / 2 - innerHeight / 2) * -speed;
      el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
    });
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Hero car: drive out with scroll ---------- */
  const heroCar = document.querySelector(".hero-car");
  if (heroCar) {
    const onHero = () => {
      const y = Math.min(scrollY, 700);
      heroCar.style.translate = `0 ${y * 0.12}px`;
    };
    addEventListener("scroll", onHero, { passive: true });
  }

  /* ---------- Filter chips ---------- */
  document.querySelectorAll("[data-filter-group]").forEach(group => {
    const target = document.querySelector(group.dataset.filterGroup);
    group.querySelectorAll(".chip").forEach(chip => chip.addEventListener("click", () => {
      group.querySelectorAll(".chip").forEach(c => c.classList.toggle("is-active", c === chip));
      const f = chip.dataset.filter;
      target.querySelectorAll("[data-cat]").forEach((card, i) => {
        const show = f === "all" || card.dataset.cat.split(" ").includes(f);
        if (show) {
          card.classList.remove("is-hidden");
          card.animate([{ opacity: 0, transform: "translateY(24px) scale(.97)" }, { opacity: 1, transform: "none" }],
            { duration: 700, delay: i * 50, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
        } else card.classList.add("is-hidden");
      });
    }));
  });

  /* ---------- Load ---------- */
  const ready = () => requestAnimationFrame(() => document.documentElement.classList.add("is-loaded"));
  const fontsReady = document.fonts ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 900))]) : Promise.resolve();
  const loader = document.getElementById("loader");
  if (!loader || reduce) { loader && loader.classList.add("is-gone"); fontsReady.then(ready); return; }

  const CAR = `<svg viewBox="0 0 330 130" aria-hidden="true">
    <defs>
      <linearGradient id="ld-paint" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#eef3fb"/><stop offset="1" stop-color="#c9d6ea"/></linearGradient>
      <linearGradient id="ld-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b2f5c"/><stop offset="1" stop-color="#0a1a3f"/></linearGradient>
      <clipPath id="ld-clip"><path d="M18 84 L18 58 Q18 48 30 44 L62 26 Q70 22 82 22 L182 22 Q194 22 204 30 L238 52 L286 58 Q302 61 304 72 L306 84 Q306 92 298 92 L268 92 A24 24 0 0 0 220 92 L104 92 A24 24 0 0 0 56 92 L26 92 Q18 92 18 84 Z"/></clipPath>
    </defs>
    <ellipse cx="162" cy="114" rx="150" ry="7" fill="#000" opacity=".45"/>
    <g class="ld-body">
      <rect x="112" y="8" width="44" height="14" rx="3" fill="#fff"/>
      <text x="134" y="18.5" text-anchor="middle" font-family="Urbanist,Arial" font-weight="800" font-size="8.5" fill="#1f4fd1">GILLS</text>
      <path d="M18 84 L18 58 Q18 48 30 44 L62 26 Q70 22 82 22 L182 22 Q194 22 204 30 L238 52 L286 58 Q302 61 304 72 L306 84 Q306 92 298 92 L268 92 A24 24 0 0 0 220 92 L104 92 A24 24 0 0 0 56 92 L26 92 Q18 92 18 84 Z" fill="url(#ld-paint)"/>
      <g clip-path="url(#ld-clip)">
        <rect x="0" y="60" width="330" height="13" fill="#1f4fd1"/>
        <rect x="0" y="73" width="330" height="3" fill="#5fb0ff"/>
      </g>
      <path d="M62 48 L76 31 Q80 28 88 28 L138 28 L138 48 Z" fill="url(#ld-glass)"/>
      <path d="M146 28 L180 28 Q190 28 198 34 L222 48 L146 48 Z" fill="url(#ld-glass)"/>
      <path d="M30 47 L58 30 L58 48 L28 50 Z" fill="url(#ld-glass)" opacity=".9"/>
      <path d="M142 26 L142 59 M142 77 L142 90" stroke="#b7c5dc" stroke-width="1.2"/>
      <path d="M206 92 L206 52" stroke="#b7c5dc" stroke-width="1"/>
      <rect x="120" y="54" width="14" height="3" rx="1.5" fill="#9fb0cc"/>
      <rect x="186" y="54" width="14" height="3" rx="1.5" fill="#9fb0cc"/>
      <text x="166" y="69.5" text-anchor="middle" font-family="Urbanist,Arial" font-weight="800" font-size="8" letter-spacing="1.2" fill="#fff">GILLS DRIVING SCHOOL</text>
      <rect x="244" y="60" width="11" height="11" rx="1.5" fill="#fff"/><path d="M247 62.5 V68.5 H252.5" stroke="#e11d2a" stroke-width="2" fill="none"/>
      <path d="M290 62 Q300 63 302 69 L292 68 Z" fill="#dff0ff"/>
      <path d="M19 54 L26 53 L26 62 L19 63 Z" fill="#e11d2a"/>
      <path d="M296 84 L306 84" stroke="#9fb0cc" stroke-width="3" stroke-linecap="round"/>
    </g>
    <g class="wheel"><circle cx="80" cy="92" r="20" fill="#0b1226"/><circle cx="80" cy="92" r="12.5" fill="#c9d3e3"/><circle cx="80" cy="92" r="3.5" fill="#5b6b88"/><path d="M80 80.5V103.5M68.5 92H91.5M71.9 83.9L88.1 100.1M88.1 83.9L71.9 100.1" stroke="#7b8aa6" stroke-width="2.2"/></g>
    <g class="wheel"><circle cx="244" cy="92" r="20" fill="#0b1226"/><circle cx="244" cy="92" r="12.5" fill="#c9d3e3"/><circle cx="244" cy="92" r="3.5" fill="#5b6b88"/><path d="M244 80.5V103.5M232.5 92H255.5M235.9 83.9L252.1 100.1M252.1 83.9L235.9 100.1" stroke="#7b8aa6" stroke-width="2.2"/></g>
  </svg>`;

  const first = !sessionStorage.getItem("gills-intro");
  sessionStorage.setItem("gills-intro", "1");
  loader.innerHTML = `
    <div class="ld-stage">
      <div class="ld-road"></div>
      <div class="ld-car"><div class="ld-speed"><i></i><i></i><i></i></div><div class="ld-beam"></div>${CAR}</div>
      <div class="ld-brand"><div class="wm"><span>GILLS</span></div><small>DRIVING SCHOOL · BALLINA</small></div>
    </div>
    <span class="ld-since">Since 1971 · 55 years</span>
    <span class="ld-count">000</span>
    <span class="ld-bar"></span>`;
  if (window.lenis) lenis.stop();
  document.documentElement.style.overflow = "hidden";

  const car = loader.querySelector(".ld-car"), count = loader.querySelector(".ld-count"), bar = loader.querySelector(".ld-bar");
  const T = first ? { in: 1300, hold: 900, out: 750 } : { in: 650, hold: 250, out: 500 };
  const easeOut = "cubic-bezier(.16,1,.3,1)", easeIn = "cubic-bezier(.6,0,.9,.4)";
  const t0 = performance.now(), total = T.in + T.hold;
  const tickCount = () => {
    const p = Math.min((performance.now() - t0) / total, 1);
    count.textContent = String(Math.round(p * 100)).padStart(3, "0");
    bar.style.transform = `scaleX(${p})`;
    if (p < 1) requestAnimationFrame(tickCount);
  };
  requestAnimationFrame(tickCount);

  const wait = ms => new Promise(r => setTimeout(r, ms));
  const pageLoaded = new Promise(r => document.readyState === "complete" ? r() : addEventListener("load", r, { once: true }));
  (async () => {
    // drive in and brake with a slight nose-dip
    await car.animate([
      { transform: "translateX(-120vw)" },
      { transform: "translateX(8px) rotate(.6deg)", offset: .85 },
      { transform: "translateX(0) rotate(0)" }
    ], { duration: T.in, easing: easeOut, fill: "forwards" }).finished;
    loader.classList.add("is-parked");
    await Promise.all([wait(T.hold), Promise.race([Promise.all([pageLoaded, fontsReady]), wait(2500)])]);
    loader.classList.remove("is-parked");
    // squat back, then launch off to the right
    await car.animate([
      { transform: "translateX(0)" },
      { transform: "translateX(-14px) rotate(-.8deg)", offset: .25 },
      { transform: "translateX(130vw) rotate(0)" }
    ], { duration: T.out, easing: easeIn, fill: "forwards" }).finished;
    loader.classList.add("is-out");
    document.documentElement.style.overflow = "";
    if (window.lenis) lenis.start();
    setTimeout(ready, 250);
    await wait(1100);
    loader.classList.add("is-gone");
  })();
})();
