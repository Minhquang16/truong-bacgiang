// Việc Làm Miền Bắc – tương tác giao diện
(function () {
  // Menu di động
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Ô tìm kiếm
  const sBtn = document.querySelector('.search-btn');
  const sPanel = document.querySelector('.search-panel');
  if (sBtn && sPanel) sBtn.addEventListener('click', () => {
    sPanel.classList.toggle('open');
    const i = sPanel.querySelector('input'); if (i) i.focus();
  });

  // Slider: data-autoplay (ms), class "fade" cho hiệu ứng mờ dần
  document.querySelectorAll('.slider').forEach((el) => {
    const track = el.querySelector('.slides');
    const slides = [...el.querySelectorAll('.slide')];
    if (slides.length < 2) return;
    const fade = el.classList.contains('fade');
    const dotsBox = el.parentElement.querySelector('.dots[data-for="' + el.id + '"]');
    const bar = el.parentElement.querySelector('.progress[data-for="' + el.id + '"] i');
    const delay = +el.dataset.autoplay || 0;
    let i = 0, timer;
    const dots = dotsBox ? slides.map((_, k) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', 'Ảnh ' + (k + 1));
      b.addEventListener('click', () => go(k, true));
      dotsBox.appendChild(b); return b;
    }) : [];
    function go(k, user) {
      i = (k + slides.length) % slides.length;
      if (fade) slides.forEach((s, n) => s.classList.toggle('on', n === i));
      else track.style.transform = 'translateX(' + (-100 * i) + '%)';
      dots.forEach((d, n) => d.classList.toggle('on', n === i));
      if (bar) { bar.style.transition = 'none'; bar.style.width = '0'; void bar.offsetWidth; bar.style.transition = 'width ' + delay + 'ms linear'; bar.style.width = '100%'; }
      if (user) restart();
    }
    function restart() { clearInterval(timer); if (delay) timer = setInterval(() => go(i + 1), delay); }
    el.querySelectorAll('.prev').forEach((b) => b.addEventListener('click', () => go(i - 1, true)));
    el.querySelectorAll('.next').forEach((b) => b.addEventListener('click', () => go(i + 1, true)));
    // vuốt trên điện thoại
    let x0 = null;
    el.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', (e) => {
      if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1), true); x0 = null;
    });
    go(0); restart();
  });

  // Form ứng tuyển (bản mẫu: chưa gửi đi đâu, chờ nối email/Google Sheet)
  document.querySelectorAll('form.apply-form').forEach((f) => f.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = f.querySelector('.form-ok'); if (ok) ok.style.display = 'block';
    f.reset();
  }));

  // Tìm kiếm tin tuyển dụng (trang tim-kiem.html)
  const out = document.getElementById('search-results');
  if (out && window.VLMB_JOBS) {
    const q = (new URLSearchParams(location.search).get('q') || '').trim();
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
    const input = document.querySelector('#search-page-input'); if (input) input.value = q;
    const hits = q ? window.VLMB_JOBS.filter((j) => norm(j.text).includes(norm(q))) : window.VLMB_JOBS;
    document.getElementById('result-count').textContent = q
      ? 'Tìm thấy ' + hits.length + ' tin phù hợp với "' + q + '"'
      : 'Tất cả ' + hits.length + ' tin tuyển dụng';
    out.innerHTML = hits.length ? hits.map((j) => j.html).join('') : '<p>Chưa có tin phù hợp. Gọi <a href="tel:0899284079">0899 284 079</a> để được tư vấn việc làm miễn phí.</p>';
  }

  // Nhạc nền: chỉ phát khi người xem bấm (trình duyệt chặn tự phát)
  const mBtn = document.querySelector('.music-toggle');
  const audio = document.getElementById('bg-music');
  if (mBtn && audio) mBtn.addEventListener('click', () => {
    if (!audio.getAttribute('src')) { mBtn.textContent = '♪ Chưa có file nhạc'; return; }
    if (audio.paused) { audio.play(); mBtn.textContent = '❚❚ Tắt nhạc'; }
    else { audio.pause(); mBtn.textContent = '♪ Bật nhạc'; }
  });
})();
