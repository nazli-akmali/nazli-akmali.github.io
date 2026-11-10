(function () {
  var lang = document.documentElement.lang === "de" ? "de" : "en";
  var L = {
    en: { view: "View project", study: "Case study", code: "Code", soon: "Project page coming soon", shot: "Screenshot of " },
    de: { view: "Zum Projekt", study: "Fallstudie", code: "Code", soon: "Projektseite folgt bald", shot: "Screenshot von " },
  }[lang];

  function t(v) { return v && typeof v === "object" ? v[lang] || v.en : v; }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function link(href, cls, text) { var a = el("a", cls, text); a.href = href; return a; }

  var grid = document.getElementById("project-grid");
  (window.PROJECTS || []).forEach(function (p) {
    var card = el("article", "project");

    if (p.image) {
      // Shown only once the image has loaded, so a project whose page
      // isn't published yet gets a clean card instead of an empty box.
      var shot = el("div", "shot");
      shot.hidden = true;
      var img = el("img");
      img.alt = L.shot + p.title;
      img.onload = function () { shot.hidden = false; };
      img.onerror = function () { shot.remove(); };
      img.src = p.image;
      shot.appendChild(img);
      card.appendChild(shot);
    }

    var body = el("div", "project-body");
    var head = el("div", "project-head");
    head.appendChild(el("h3", "", p.title));
    if (p.status) head.appendChild(el("span", "badge", t(p.status)));
    body.appendChild(head);
    body.appendChild(el("p", "summary", t(p.summary)));

    if (p.tags && p.tags.length) {
      var tags = el("ul", "tags");
      p.tags.forEach(function (x) { tags.appendChild(el("li", "", x)); });
      body.appendChild(tags);
    }

    var actions = el("div", "btns");
    if (p.page) actions.appendChild(link(p.page, "btn primary small", L.view + " →"));
    if (p.caseStudy) actions.appendChild(link(p.caseStudy, "btn small", L.study));
    if (p.repo) actions.appendChild(link(p.repo, "btn small", L.code));
    if (!p.page) actions.appendChild(el("span", "soon", L.soon));
    body.appendChild(actions);

    card.appendChild(body);
    grid.appendChild(card);
  });

  // Same top-bar behaviour as the project pages.
  var bar = document.querySelector(".topbar");
  function onScroll() { bar.classList.toggle("scrolled", scrollY > 8); }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.getElementById("year").textContent = new Date().getFullYear();
})();
