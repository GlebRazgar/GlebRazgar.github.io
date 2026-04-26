# Bionic Font Recipe

Canonical rule for how blog paragraph text is styled. Implemented by `js/bionic.js`
and applied via `_layouts/post.html` (so it covers `_posts/` and `_research/`).

## Scope

- Applies to: paragraph text (`<p>`) inside `.post-content` on blog post pages.
- Does NOT apply to: titles (`h1`–`h6`), site header, site footer, post meta,
  share links, code/`pre`, MathJax output, or anything tagged `.bionic-skip`.

## Per-word formula

For each word, apply 3 font weights in this order: bold, then semi-bold,
then regular.

Bold characters:

- `len ≤ 3`  -> 1 char
- `len 4-5`  -> 2 chars
- `len ≥ 6`  -> `len - 3` chars

Semi-bold characters:

- `len ≤ 2`  -> 0 chars
- `len ≥ 3`  -> 1 char

Regular characters: whatever remains.

## Font weights

- Bold: `700`
- Semi-bold: `600`
- Regular: `400`

## Examples

- `the` (3) -> `t` + `h` + `e`
- `people` (6) -> `peo` + `p` + `le` (6 - 3 = 3 bold)
- `performance` (11) -> `performa` + `n` + `ce` (11 - 3 = 8 bold)

## Opting out

Add the `bionic-skip` class to any element (or wrap text in
`<span class="bionic-skip">…</span>`) to keep its text untouched.
