# anjan-mandal.github.io — personal site

Static site: CV / projects on the homepage, a no-backend Markdown blog at `/blog`.
No build step — just HTML, CSS, and vanilla JS.

## Structure

```
index.html        the CV / projects / publications page — edit this directly
css/style.css      all styling (design tokens at the top of the file)
blog/index.html    blog list + post renderer (don't usually need to touch this)
blog/posts.js      <-- THIS is where you add new blog posts
js/blog.js         renders posts.js into HTML (Markdown via marked.js, from a CDN)
```

## Adding a blog post

Open `blog/posts.js` and add a new object to the `POSTS` array:

```js
{
  slug: "my-new-post",          // unique, URL-safe
  title: "My New Post",
  date: "2026-07-01",           // YYYY-MM-DD
  excerpt: "One-line teaser shown on the list page.",
  markdown: `
Write the body here in **Markdown**. Headings, lists, links, and
\`\`\`r
code blocks
\`\`\`
all work.
`
}
```

Save, commit, push — that's it. No build step.

## Editing your CV / projects

Edit `index.html` directly — it's plain HTML, organized into `<section>` blocks
(Education, Research & Teaching, Experience, Projects, Publications, Achievements).
Each project under `#projects` is a `.project-card` block; copy one to add another.

## Local preview

Just open `index.html` in a browser, or for the blog's relative paths to work
cleanly, run a tiny local server from the repo root:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying with GitHub Pages (free hosting)

1. Push this folder to a GitHub repo — e.g. `Anjan-stat/anjan-stat.github.io`
   (naming it exactly `<username>.github.io` gives you a clean root URL;
   any other repo name works too, just served at `/reponame/`).
2. On GitHub: **Settings → Pages → Source → Deploy from a branch → `main` → `/ (root)`**.
3. Wait a minute or two — your site will be live at:
   - `https://anjan-stat.github.io/` (if you used the special repo name), or
   - `https://anjan-stat.github.io/<reponame>/` otherwise.

Pushing changes to `main` redeploys automatically within a minute or so.
