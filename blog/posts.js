/* ============================================================
   POSTS DATA
   Add a new post by adding an object to this array. Write the
   body in Markdown — headings, lists, code, links, etc. all work.
   `slug` must be unique and URL-safe (used as ?post=slug).
   ============================================================ */

const POSTS = [
  {
    slug: "welcome",
    title: "Starting this blog",
    date: "2026-06-20",
    excerpt: "Why I'm writing here: notes on Bayesian methods, directional statistics, and the occasional detour into job-market reflections.",
    markdown: `
I'm starting this blog as a place to write up smaller things that don't
belong in a paper — implementation notes, sampler diagnostics, things I
wish someone had told me when I started working with directional and
compositional data.

A few things you can expect here:

- Notes on **Bayesian methods** for directional and spatial data
- Walkthroughs of pieces of my research, including the [CircSimplex](https://github.com/Anjan-stat/CircSimplex)
  package
- Occasional posts on the academic-to-industry job search

\`\`\`r
# a preview of what's coming: sampling on the simplex
library(CircSimplex)
v <- c(.25, .25, .2, .15, .15)
Get_PropStepS3(v, 5, c(10, 10, 10, 10, 10))
\`\`\`

More soon.
`
  }
];
