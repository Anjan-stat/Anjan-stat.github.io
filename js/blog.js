/* ============================================================
   Renders blog list or single post based on ?post=<slug>
   No backend, no build step — reads from POSTS in posts.js.
   ============================================================ */

(function () {
  const root = document.getElementById("blog-root");
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("post");

  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }

  function renderList() {
    if (!POSTS || POSTS.length === 0) {
      root.innerHTML = `
        <section style="padding-top:44px;">
          <div class="section-head"><h2>Blog</h2><span class="rule"></span></div>
          <div class="empty-state">No posts yet — check back soon.</div>
        </section>`;
      return;
    }

    const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
    const items = sorted.map(p => `
      <li class="post-item">
        <div class="post-date">${formatDate(p.date)}</div>
        <h3>${p.title}</h3>
        <p>${p.excerpt || ""}</p>
        <a class="read-more" href="?post=${encodeURIComponent(p.slug)}">read &rarr;</a>
      </li>
    `).join("");

    root.innerHTML = `
      <section style="padding-top:44px; border-bottom:none;">
        <div class="section-head"><span class="num">/</span><h2>Blog</h2><span class="rule"></span></div>
        <ul class="post-list">${items}</ul>
      </section>`;
  }

  function renderPost(post) {
    document.title = post.title + " — Anjan Mandal";
    const html = window.marked ? marked.parse(post.markdown) : post.markdown;
    root.innerHTML = `
      <div class="post-body">
        <a class="back-link" href="index.html">&larr; all posts</a>
        <div class="post-date">${formatDate(post.date)}</div>
        <h1>${post.title}</h1>
        <article>${html}</article>
      </div>`;
  }

  function renderNotFound() {
    root.innerHTML = `
      <div class="post-body">
        <a class="back-link" href="index.html">&larr; all posts</a>
        <div class="empty-state">Couldn't find that post.</div>
      </div>`;
  }

  if (slug) {
    const post = (POSTS || []).find(p => p.slug === slug);
    post ? renderPost(post) : renderNotFound();
  } else {
    renderList();
  }
})();
