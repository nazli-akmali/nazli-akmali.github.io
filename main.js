(function () {
  var grid = document.getElementById("project-grid");
  var projects = window.PROJECTS || [];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function link(href, cls, text) {
    var a = el("a", cls, text);
    a.href = href;
    return a;
  }

  projects.forEach(function (p) {
    var card = el("article", "card");

    if (p.image) {
      var img = el("img", "shot");
      img.src = p.image;
      img.alt = "Screenshot of " + p.title;
      img.loading = "lazy";
      card.appendChild(img);
    }

    var body = el("div", "card-body");
    var head = el("div", "card-head");
    head.appendChild(el("h3", "", p.title));
    if (p.status) head.appendChild(el("span", "badge", p.status));
    body.appendChild(head);

    body.appendChild(el("p", "summary", p.summary));

    if (p.tags && p.tags.length) {
      var tags = el("ul", "tags");
      p.tags.forEach(function (t) { tags.appendChild(el("li", "", t)); });
      body.appendChild(tags);
    }

    var actions = el("div", "actions");
    if (p.page) {
      actions.appendChild(link(p.page, "btn small", "View project →"));
    } else {
      actions.appendChild(el("span", "soon", "Showcase page coming soon"));
    }
    if (p.repo) actions.appendChild(link(p.repo, "btn small ghost", "Code"));
    body.appendChild(actions);

    card.appendChild(body);
    grid.appendChild(card);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
