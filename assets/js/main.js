/* ==========================================================================
   Trường Cao đẳng Bắc Giang — Script dùng chung
   Header/footer được dựng bằng JS để dùng chung cho mọi trang (chạy được cả khi
   mở file trực tiếp, không cần server).
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function icon(name, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (window.ICONS[name] || "") + "</svg>";
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function param(k) { return new URLSearchParams(location.search).get(k); }
  window.UI = { icon: icon, esc: esc };

  var LOGO = '<svg class="brand__logo" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="12" fill="#13315c"/><path d="M24 9 9 16.5 24 24l15-7.5z" fill="#e9a23b"/><path d="M14 20v8c5 5 15 5 20 0v-8l-10 5z" fill="#fff"/><circle cx="24" cy="37" r="3.2" fill="#e0243f"/></svg>';

  var NAV = [
    { href: "index.html", label: "Trang chủ", key: "home" },
    { href: "gioi-thieu.html", label: "Giới thiệu", key: "about" },
    { href: "dao-tao.html", label: "Đào tạo", key: "programs" },
    { href: "tuyen-sinh.html", label: "Tuyển sinh", key: "admission" },
    { href: "viec-lam.html", label: "Việc làm", key: "jobs" },
    { href: "tin-tuc.html", label: "Tin tức", key: "news" },
    { href: "lien-he.html", label: "Liên hệ", key: "contact" }
  ];
  var page = document.body.getAttribute("data-page") || "";
  var section = document.body.getAttribute("data-section") || page;

  function brand() {
    return '<a class="brand" href="index.html" aria-label="' + S.name + ' – Trang chủ">' + LOGO +
      '<span class="brand__text"><span class="brand__sub">' + S.sub + '</span><span class="brand__name">Bắc Giang</span></span></a>';
  }

  function navLinks() {
    return NAV.map(function (n) {
      var active = n.key === section;
      return '<li><a class="nav__link' + (active ? " is-active" : "") + '" href="' + n.href + '"' + (active ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>";
    }).join("");
  }

  function renderHeader() {
    var el = $("#site-header");
    if (!el) return;
    el.outerHTML =
      '<a class="skip-link" href="#main">Bỏ qua đến nội dung chính</a>' +
      '<div class="topbar"><div class="container">' +
        '<div class="topbar__info"><span>' + icon("phone") + "Hotline: <a href=\"tel:" + S.hotline.replace(/\s/g, "") + '">' + S.hotline + "</a></span>" +
        "<span>" + icon("mail") + '<a href="mailto:' + S.email + '">' + S.email + "</a></span>" +
        "<span>" + icon("clock") + "Thứ 2 – Thứ 7: 7:30 – 17:00</span></div>" +
        '<div class="topbar__links"><a href="viec-lam.html#nha-tuyen-dung">Nhà tuyển dụng</a><a href="tuyen-sinh.html#dang-ky">Tra cứu xét tuyển</a><a href="#">Cổng sinh viên</a></div>' +
      "</div></div>" +
      '<header class="header" id="header"><div class="container">' + brand() +
        '<nav class="nav" aria-label="Điều hướng chính"><ul class="nav__list">' + navLinks() + "</ul></nav>" +
        '<a class="btn btn--primary btn--sm header__cta" href="tuyen-sinh.html#dang-ky">Đăng ký xét tuyển</a>' +
        '<button class="menu-toggle" type="button" aria-label="Mở menu" aria-expanded="false" aria-controls="mobile-nav">' + icon("menu") + "</button>" +
      "</div></header>" +
      '<div class="mobile-nav" id="mobile-nav" aria-hidden="true"><div class="mobile-nav__backdrop" data-close></div>' +
        '<div class="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="Menu"><div class="mobile-nav__head">' + brand() +
        '<button class="menu-toggle" type="button" data-close aria-label="Đóng menu">' + icon("close") + "</button></div>" +
        '<nav aria-label="Điều hướng di động"><ul class="nav__list" style="flex-direction:column;align-items:stretch">' + navLinks() + "</ul></nav>" +
        '<a class="btn btn--primary btn--block" href="tuyen-sinh.html#dang-ky">Đăng ký xét tuyển</a>' +
        '<a class="btn btn--outline btn--block" href="viec-lam.html">Tìm việc làm</a>' +
      "</div></div>";
  }

  function renderFooter() {
    var el = $("#site-footer");
    if (!el) return;
    var progs = window.PROGRAMS.slice(0, 6).map(function (p) { return '<li><a href="nganh.html?id=' + p.id + '">' + p.name + "</a></li>"; }).join("");
    el.outerHTML =
      '<footer class="footer"><div class="container"><div class="footer__grid">' +
        "<div>" + brand() + '<p>Đào tạo nguồn nhân lực chất lượng cao, gắn kết doanh nghiệp, cam kết việc làm cho người học tại Bắc Giang và vùng Đông Bắc.</p>' +
          '<div class="socials"><a href="#" aria-label="Facebook">' + icon("facebook") + '</a><a href="#" aria-label="YouTube">' + icon("youtube") + '</a><a href="#" aria-label="Zalo">' + icon("zalo") + "</a></div></div>" +
        "<div><h4>Ngành đào tạo</h4><ul>" + progs + "</ul></div>" +
        '<div><h4>Liên kết nhanh</h4><ul><li><a href="gioi-thieu.html">Giới thiệu</a></li><li><a href="tuyen-sinh.html">Tuyển sinh 2027</a></li><li><a href="viec-lam.html">Việc làm sinh viên</a></li><li><a href="viec-lam.html#nha-tuyen-dung">Dành cho doanh nghiệp</a></li><li><a href="tin-tuc.html">Tin tức – Sự kiện</a></li><li><a href="lien-he.html">Liên hệ</a></li></ul></div>' +
        '<div><h4>Liên hệ</h4><ul class="info-list">' +
          "<li>" + icon("pin") + "<span>" + S.address + "</span></li>" +
          "<li>" + icon("phone") + "<span>" + S.phone + " · " + S.hotline + "</span></li>" +
          "<li>" + icon("mail") + "<span>" + S.email + "</span></li></ul>" +
          '<form class="newsletter" data-newsletter><label class="sr-only" for="nl-email">Email nhận tin</label><input id="nl-email" type="email" placeholder="Email nhận tin tuyển sinh" required><button class="btn btn--primary btn--sm" type="submit">Gửi</button></form></div>' +
      "</div>" +
      '<div class="footer__bottom"><span>© ' + new Date().getFullYear() + " " + S.name + '. Bảo lưu mọi quyền.</span><span><a href="#">Chính sách bảo mật</a> · <a href="#">Điều khoản sử dụng</a></span></div>' +
      "</div></footer>" +
      '<button class="to-top" type="button" aria-label="Lên đầu trang">' + icon("up") + "</button>" +
      '<div class="toast" role="status" aria-live="polite"></div>';
  }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $(".toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-visible"); }, 2800);
  }
  window.UI.toast = toast;

  /* ---------- Saved jobs (localStorage) ---------- */
  function getSaved() { try { return JSON.parse(localStorage.getItem("savedJobs") || "[]"); } catch (e) { return []; } }
  function setSaved(a) { try { localStorage.setItem("savedJobs", JSON.stringify(a)); } catch (e) { /* bỏ qua */ } }

  /* ---------- Components ---------- */
  function programCard(p) {
    return '<article class="program reveal"><div class="program__top"><span class="program__icon" style="background:' + p.color + '">' + icon(p.icon) + "</span>" +
      '<div><span class="badge' + (p.level === "Trung cấp" ? " badge--gold" : "") + '">' + p.level + '</span><h3><a href="nganh.html?id=' + p.id + '">' + p.name + "</a></h3></div></div>" +
      "<p>" + p.desc + "</p>" +
      '<div class="program__facts"><div><b>' + p.duration + "</b>Thời gian</div><div><b>" + p.quota + "</b>Chỉ tiêu</div><div><b>" + p.employ + "</b>Có việc làm</div></div>" +
      '<a class="link-arrow" href="nganh.html?id=' + p.id + '">Xem chi tiết ngành</a></article>';
  }

  function jobCard(j) {
    var saved = getSaved().indexOf(j.id) > -1;
    return '<article class="job' + (j.hot ? " is-hot" : "") + '"><span class="logo-box" style="background:' + j.color + '">' + j.logo + "</span>" +
      '<div><h3 class="job__title"><a href="viec-lam-chi-tiet.html?id=' + j.id + '">' + esc(j.title) + "</a></h3>" +
      '<div class="job__company">' + esc(j.company) + "</div>" +
      '<div class="job__tags">' + (j.hot ? '<span class="badge badge--accent">Tuyển gấp</span>' : "") +
        '<span class="badge">' + j.type + '</span><span class="badge badge--gold">' + j.exp + "</span></div></div>" +
      '<div class="job__side"><span class="card__meta"><span>' + icon("pin") + esc(j.location) + "</span><span>" + icon("clock") + j.posted + "</span></span>" +
        '<span class="flex items-center gap-2"><span class="job__salary">' + j.salary + '</span><button class="job__save' + (saved ? " is-saved" : "") + '" type="button" data-save="' + j.id + '" aria-pressed="' + saved + '" aria-label="Lưu việc làm">' + icon("heart") + "</button></span></div></article>";
  }

  function newsCard(n) {
    return '<article class="card reveal"><a class="card__media" href="tin-tuc-chi-tiet.html?id=' + n.id + '" tabindex="-1" aria-hidden="true"><div class="art art--' + n.art + '">' + icon(n.icon) + '</div><span class="badge badge--accent">' + n.cat + "</span></a>" +
      '<div class="card__body"><div class="card__meta"><span>' + icon("calendar") + n.date + "</span><span>" + icon("eye") + n.views.toLocaleString("vi-VN") + " lượt xem</span></div>" +
      '<h3><a href="tin-tuc-chi-tiet.html?id=' + n.id + '">' + esc(n.title) + "</a></h3><p>" + esc(n.excerpt) + "</p></div></article>";
  }
  window.UI.programCard = programCard;
  window.UI.jobCard = jobCard;
  window.UI.newsCard = newsCard;

  /* ---------- Global behaviours ---------- */
  function initGlobal() {
    var header = $("#header");
    var toTop = $(".to-top");
    function onScroll() {
      var y = window.scrollY;
      if (header) header.classList.toggle("is-scrolled", y > 8);
      if (toTop) toTop.classList.toggle("is-visible", y > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    var mnav = $("#mobile-nav");
    var openBtn = $(".header .menu-toggle");
    function setMenu(open) {
      mnav.classList.toggle("is-open", open);
      mnav.setAttribute("aria-hidden", String(!open));
      openBtn.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      if (open) { var f = $("a", mnav); if (f) f.focus(); } else openBtn.focus();
    }
    if (mnav && openBtn) {
      openBtn.addEventListener("click", function () { setMenu(true); });
      $$("[data-close]", mnav).forEach(function (b) { b.addEventListener("click", function () { setMenu(false); }); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && mnav.classList.contains("is-open")) setMenu(false); });
    }

    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-save]");
      if (!btn) return;
      e.preventDefault();
      var id = Number(btn.getAttribute("data-save"));
      var s = getSaved();
      var i = s.indexOf(id);
      if (i > -1) { s.splice(i, 1); toast("Đã bỏ lưu việc làm"); } else { s.push(id); toast("Đã lưu việc làm vào danh sách của bạn"); }
      setSaved(s);
      $$('[data-save="' + id + '"]').forEach(function (b) { b.classList.toggle("is-saved", i === -1); b.setAttribute("aria-pressed", String(i === -1)); });
    });

    $$("[data-newsletter]").forEach(function (f) {
      f.addEventListener("submit", function (e) { e.preventDefault(); f.reset(); toast("Cảm ơn bạn! Chúng tôi sẽ gửi tin tuyển sinh qua email."); });
    });

    // Tabs
    $$("[data-tabs]").forEach(function (wrap) {
      var tabs = $$(".tab", wrap);
      tabs.forEach(function (t) {
        t.addEventListener("click", function () {
          tabs.forEach(function (x) { x.classList.remove("is-active"); x.setAttribute("aria-selected", "false"); var p = document.getElementById(x.getAttribute("aria-controls")); if (p) p.hidden = true; });
          t.classList.add("is-active"); t.setAttribute("aria-selected", "true");
          var p = document.getElementById(t.getAttribute("aria-controls")); if (p) p.hidden = false;
        });
      });
    });

    // Số liệu chạy
    var counters = $$("[data-count]");
    var reveals = $$(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target;
          io.unobserve(el);
          if (el.hasAttribute("data-count")) countUp(el); else el.classList.add("is-visible");
        });
      }, { threshold: 0.15 });
      counters.concat(reveals).forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
      counters.forEach(function (el) { el.textContent = Number(el.dataset.count).toLocaleString("vi-VN") + (el.dataset.suffix || ""); });
    }
  }
  function countUp(el) {
    var end = Number(el.dataset.count), suf = el.dataset.suffix || "", t0 = null, dur = 1400;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString("vi-VN") + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  window.UI.observeReveal = function (root) {
    $$(".reveal", root).forEach(function (el) { el.classList.add("is-visible"); });
  };

  /* ---------- Form validation (dùng chung) ---------- */
  function bindForm(form, successMsg) {
    if (!form) return;
    form.setAttribute("novalidate", "");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      $$("[required]", form).forEach(function (inp) {
        var g = inp.closest(".form-group") || inp.closest(".check");
        var valid = inp.type === "checkbox" ? inp.checked : inp.checkValidity() && inp.value.trim() !== "";
        if (g) g.classList.toggle("has-error", !valid);
        if (!valid && ok) { inp.focus(); ok = false; }
      });
      if (!ok) return;
      var alert = $(".alert--success", form.parentNode);
      if (alert) { alert.hidden = false; alert.scrollIntoView({ behavior: "smooth", block: "center" }); }
      toast(successMsg || "Gửi thành công!");
      form.reset();
    });
    form.addEventListener("input", function (e) { var g = e.target.closest(".form-group"); if (g) g.classList.remove("has-error"); });
  }
  window.UI.bindForm = bindForm;

  /* ---------- Page: Trang chủ ---------- */
  function initHome() {
    var pg = $("#home-programs");
    if (pg) pg.innerHTML = window.PROGRAMS.slice(0, 6).map(programCard).join("");
    var jb = $("#home-jobs");
    if (jb) jb.innerHTML = window.JOBS.filter(function (j) { return j.hot; }).concat(window.JOBS.filter(function (j) { return !j.hot; })).slice(0, 6).map(jobCard).join("");
    var ev = $("#home-events");
    if (ev) ev.innerHTML = window.EVENTS.map(function (e) { return '<div class="event"><div class="event__date"><b>' + e.d + "</b><small>" + e.m + "</small></div><div><h3>" + e.title + "</h3><p>" + e.place + "</p></div></div>"; }).join("");
    var nw = $("#home-news");
    if (nw) {
      var n0 = window.NEWS[0];
      nw.innerHTML = '<article class="card news-main reveal"><a class="card__media" href="tin-tuc-chi-tiet.html?id=' + n0.id + '" tabindex="-1" aria-hidden="true"><div class="art art--' + n0.art + '">' + icon(n0.icon) + '</div><span class="badge badge--accent">' + n0.cat + '</span></a><div class="card__body"><div class="card__meta"><span>' + icon("calendar") + n0.date + '</span></div><h3><a href="tin-tuc-chi-tiet.html?id=' + n0.id + '">' + n0.title + "</a></h3><p>" + n0.excerpt + "</p></div></article>" +
        '<div class="news-list">' + window.NEWS.slice(1, 5).map(function (n) {
          return '<article class="news-item"><a class="thumb" href="tin-tuc-chi-tiet.html?id=' + n.id + '" tabindex="-1" aria-hidden="true"><div class="art art--' + n.art + '">' + icon(n.icon) + '</div></a><div><span class="badge">' + n.cat + '</span><h3><a href="tin-tuc-chi-tiet.html?id=' + n.id + '">' + n.title + "</a></h3><time>" + n.date + "</time></div></article>";
        }).join("") + "</div>";
    }
    var hs = $("#hero-search");
    if (hs) hs.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = $("[name=q]", hs).value, f = $("[name=field]", hs).value, l = $("[name=loc]", hs).value;
      location.href = "viec-lam.html?q=" + encodeURIComponent(q) + "&field=" + encodeURIComponent(f) + "&loc=" + encodeURIComponent(l);
    });
  }

  /* ---------- Page: Đào tạo ---------- */
  function initPrograms() {
    var grid = $("#program-grid"), chips = $("#program-chips");
    if (!grid) return;
    var groups = window.PROGRAM_GROUPS;
    chips.innerHTML = '<button class="chip is-active" data-g="all" type="button">Tất cả (' + window.PROGRAMS.length + ")</button>" +
      Object.keys(groups).map(function (k) {
        var c = window.PROGRAMS.filter(function (p) { return p.group === k; }).length;
        return '<button class="chip" data-g="' + k + '" type="button">' + groups[k] + " (" + c + ")</button>";
      }).join("");
    function draw(g) {
      var list = window.PROGRAMS.filter(function (p) { return g === "all" || p.group === g; });
      grid.innerHTML = list.map(programCard).join("");
      window.UI.observeReveal(grid);
    }
    chips.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", chips).forEach(function (c) { c.classList.toggle("is-active", c === b); });
      draw(b.dataset.g);
    });
    draw("all");
  }

  /* ---------- Page: Chi tiết ngành ---------- */
  function initProgram() {
    var p = window.PROGRAMS.filter(function (x) { return x.id === param("id"); })[0] || window.PROGRAMS[0];
    document.title = p.name + " – " + S.name;
    $$("[data-p]").forEach(function (el) { var k = el.dataset.p; if (p[k] != null) el.textContent = p[k]; });
    var ic = $("#program-icon"); if (ic) { ic.style.background = p.color; ic.innerHTML = icon(p.icon); }
    var cr = $("#program-careers"); if (cr) cr.innerHTML = p.careers.map(function (c) { return "<li>" + c + "</li>"; }).join("");
    $$("[data-p-group]").forEach(function (el) { el.textContent = window.PROGRAM_GROUPS[p.group]; });
    var jobs = window.JOBS.filter(function (j) { return j.field === p.id; });
    var rj = $("#program-jobs");
    if (rj) rj.innerHTML = jobs.length ? jobs.map(jobCard).join("") : '<div class="empty panel">Chưa có tin tuyển dụng cho ngành này. <a href="viec-lam.html">Xem tất cả việc làm</a></div>';
    var other = $("#program-others");
    if (other) other.innerHTML = window.PROGRAMS.filter(function (x) { return x.id !== p.id; }).slice(0, 3).map(programCard).join("");
    var reg = $("#program-register"); if (reg) reg.href = "tuyen-sinh.html?nganh=" + p.id + "#dang-ky";
  }

  /* ---------- Page: Tuyển sinh ---------- */
  function initAdmission() {
    var sel = $("#reg-program");
    if (sel) {
      sel.innerHTML = '<option value="">-- Chọn ngành --</option>' + window.PROGRAMS.map(function (p) { return '<option value="' + p.id + '">' + p.name + " (" + p.level + ")</option>"; }).join("");
      var pre = param("nganh"); if (pre) sel.value = pre;
    }
    var tb = $("#quota-table");
    if (tb) tb.innerHTML = window.PROGRAMS.map(function (p, i) {
      return "<tr><td>" + (i + 1) + '</td><td><a href="nganh.html?id=' + p.id + '">' + p.name + "</a></td><td>" + p.level + "</td><td>" + p.duration + "</td><td>" + p.quota + "</td><td>" + (p.level === "Trung cấp" ? "Tốt nghiệp THCS trở lên" : "Tốt nghiệp THPT hoặc tương đương") + "</td></tr>";
    }).join("");
    bindForm($("#reg-form"), "Đăng ký thành công! Nhà trường sẽ liên hệ trong 24 giờ.");
    var cd = $("#countdown");
    if (cd) {
      var end = new Date(S.admissionDeadline).getTime();
      var tick = function () {
        var d = Math.max(0, end - Date.now());
        var v = [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
        $$("b", cd).forEach(function (b, i) { b.textContent = String(v[i]).padStart(2, "0"); });
      };
      tick(); setInterval(tick, 1000);
    }
  }

  /* ---------- Page: Việc làm ---------- */
  function initJobs() {
    var list = $("#job-list"); if (!list) return;
    var form = $("#job-filters"), count = $("#job-count"), sort = $("#job-sort");
    var fieldBox = $("#filter-field");
    fieldBox.innerHTML = window.PROGRAMS.map(function (p) {
      var n = window.JOBS.filter(function (j) { return j.field === p.id; }).length;
      return '<label class="check"><input type="checkbox" name="field" value="' + p.id + '"> ' + p.name + ' <span class="text-muted">(' + n + ")</span></label>";
    }).join("");
    var q = param("q"), f = param("field"), l = param("loc");
    if (q) $("#job-q").value = q;
    if (l) $("#job-loc").value = l;
    if (f) $$('[name=field][value="' + f + '"]', form).forEach(function (c) { c.checked = true; });

    function draw() {
      var kw = $("#job-q").value.trim().toLowerCase();
      var loc = $("#job-loc").value;
      var fields = $$("[name=field]:checked", form).map(function (c) { return c.value; });
      var types = $$("[name=type]:checked", form).map(function (c) { return c.value; });
      var minSal = Number(($("[name=salary]:checked", form) || {}).value || 0);
      var onlySaved = $("#only-saved").checked;
      var saved = getSaved();
      var res = window.JOBS.filter(function (j) {
        return (!kw || (j.title + " " + j.company).toLowerCase().indexOf(kw) > -1) &&
          (!loc || j.location.indexOf(loc) > -1) &&
          (!fields.length || fields.indexOf(j.field) > -1) &&
          (!types.length || types.indexOf(j.type) > -1) &&
          j.salaryMin >= minSal &&
          (!onlySaved || saved.indexOf(j.id) > -1);
      });
      if (sort.value === "salary") res.sort(function (a, b) { return b.salaryMin - a.salaryMin; });
      else if (sort.value === "hot") res.sort(function (a, b) { return (b.hot ? 1 : 0) - (a.hot ? 1 : 0); });
      count.textContent = res.length;
      list.innerHTML = res.length ? res.map(jobCard).join("") : '<div class="empty panel"><p><b>Không tìm thấy việc làm phù hợp.</b></p><p>Thử bỏ bớt bộ lọc hoặc đổi từ khoá.</p><button class="btn btn--outline btn--sm" type="button" data-reset>Xoá bộ lọc</button></div>';
    }
    form.addEventListener("input", draw);
    form.addEventListener("change", draw);
    sort.addEventListener("change", draw);
    $("#job-search").addEventListener("submit", function (e) { e.preventDefault(); draw(); });
    $("#job-search").addEventListener("input", draw);
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-reset]")) { form.reset(); $("#job-q").value = ""; $("#job-loc").value = ""; draw(); }
      if (e.target.closest("[data-save]") && $("#only-saved").checked) setTimeout(draw, 0);
    });
    var tg = $(".filters-toggle");
    if (tg) tg.addEventListener("click", function () {
      var c = form.getAttribute("data-collapsed") === "true";
      form.setAttribute("data-collapsed", String(!c));
      tg.setAttribute("aria-expanded", String(c));
    });
    draw();
    bindForm($("#employer-form"), "Đã gửi! Phòng Quan hệ doanh nghiệp sẽ liên hệ lại.");
  }

  /* ---------- Page: Chi tiết việc làm ---------- */
  function initJob() {
    var j = window.JOBS.filter(function (x) { return String(x.id) === param("id"); })[0] || window.JOBS[0];
    document.title = j.title + " – Việc làm – " + S.name;
    $$("[data-j]").forEach(function (el) { var k = el.dataset.j; if (j[k] != null) el.textContent = j[k]; });
    var lg = $("#job-logo"); if (lg) { lg.style.background = j.color; lg.textContent = j.logo; }
    var prog = window.PROGRAMS.filter(function (p) { return p.id === j.field; })[0];
    $$("[data-j-field]").forEach(function (el) { el.textContent = prog ? prog.name : ""; });
    var fl = $("#job-field-link"); if (fl && prog) fl.href = "nganh.html?id=" + prog.id;
    var hot = $("#job-hot"); if (hot) hot.hidden = !j.hot;
    var sv = $("#job-save"); if (sv) { sv.setAttribute("data-save", j.id); var s = getSaved().indexOf(j.id) > -1; sv.classList.toggle("is-saved", s); sv.setAttribute("aria-pressed", String(s)); }
    var rel = $("#job-related");
    if (rel) rel.innerHTML = window.JOBS.filter(function (x) { return x.id !== j.id && (x.field === j.field || x.company === j.company); }).concat(window.JOBS.filter(function (x) { return x.id !== j.id; })).filter(function (x, i, a) { return a.indexOf(x) === i; }).slice(0, 3).map(jobCard).join("");
    bindForm($("#apply-form"), "Ứng tuyển thành công! Nhà tuyển dụng sẽ liên hệ với bạn.");
    var fi = $("#cv-file"), fn = $("#cv-name");
    if (fi) fi.addEventListener("change", function () { fn.textContent = fi.files[0] ? "Đã chọn: " + fi.files[0].name : "Kéo thả hoặc bấm để tải CV (PDF, DOC, tối đa 5MB)"; });
  }

  /* ---------- Page: Tin tức ---------- */
  function initNews() {
    var grid = $("#news-grid"), chips = $("#news-chips"); if (!grid) return;
    var cats = ["Tất cả"].concat(window.NEWS.map(function (n) { return n.cat; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
    chips.innerHTML = cats.map(function (c, i) { return '<button class="chip' + (i ? "" : " is-active") + '" type="button" data-c="' + c + '">' + c + "</button>"; }).join("");
    function draw(c) {
      grid.innerHTML = window.NEWS.filter(function (n) { return c === "Tất cả" || n.cat === c; }).map(newsCard).join("");
      window.UI.observeReveal(grid);
    }
    chips.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", chips).forEach(function (x) { x.classList.toggle("is-active", x === b); });
      draw(b.dataset.c);
    });
    draw("Tất cả");
    var pop = $("#news-popular");
    if (pop) pop.innerHTML = window.NEWS.slice().sort(function (a, b) { return b.views - a.views; }).slice(0, 4).map(function (n) {
      return '<article class="news-item"><a class="thumb" href="tin-tuc-chi-tiet.html?id=' + n.id + '" tabindex="-1" aria-hidden="true"><div class="art art--' + n.art + '">' + icon(n.icon) + '</div></a><div><h3><a href="tin-tuc-chi-tiet.html?id=' + n.id + '">' + n.title + "</a></h3><time>" + n.date + "</time></div></article>";
    }).join("");
  }

  function initArticle() {
    var n = window.NEWS.filter(function (x) { return String(x.id) === param("id"); })[0] || window.NEWS[0];
    document.title = n.title + " – " + S.name;
    $$("[data-n]").forEach(function (el) { var k = el.dataset.n; if (n[k] != null) el.textContent = k === "views" ? n.views.toLocaleString("vi-VN") : n[k]; });
    var cv = $("#article-cover"); if (cv) cv.innerHTML = '<div class="art art--' + n.art + '">' + icon(n.icon) + "</div>";
    var rel = $("#news-related");
    if (rel) rel.innerHTML = window.NEWS.filter(function (x) { return x.id !== n.id; }).slice(0, 3).map(newsCard).join("");
    var cp = $("#copy-link");
    if (cp) cp.addEventListener("click", function () {
      if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(function () { toast("Đã sao chép liên kết"); }, function () { toast("Không sao chép được, hãy copy từ thanh địa chỉ"); });
    });
  }

  function initContact() {
    bindForm($("#contact-form"), "Đã gửi tin nhắn! Chúng tôi sẽ phản hồi sớm.");
  }

  /* ---------- Boot ---------- */
  renderHeader();
  renderFooter();
  // <i data-icon="pin"></i> → SVG icon
  $$("i[data-icon]").forEach(function (el) { el.outerHTML = icon(el.getAttribute("data-icon"), el.className); });
  var inits = { home: initHome, programs: initPrograms, program: initProgram, admission: initAdmission, jobs: initJobs, job: initJob, news: initNews, article: initArticle, contact: initContact };
  if (inits[page]) inits[page]();
  initGlobal();
})();
