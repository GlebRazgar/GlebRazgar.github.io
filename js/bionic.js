/*
 * Bionic font styling for blog paragraphs.
 *
 * See BIONIC_FONT.md at the repo root for the canonical recipe.
 *
 * Per word:
 *   bold    : len <= 3 -> 1   | len 4-5 -> 2   | len >= 6 -> len - 3
 *   semi    : len <= 2 -> 0   | len >= 3 -> 1
 *   regular : whatever remains
 *   order   : bold, then semi-bold, then regular
 */
(function () {
  var SKIP_TAGS = {
    CODE: 1, PRE: 1, SCRIPT: 1, STYLE: 1, MATH: 1,
    KBD: 1, SAMP: 1, VAR: 1, TEXTAREA: 1, INPUT: 1
  };

  function bionicSplit(word) {
    var len = word.length;
    var bold = len <= 3 ? 1 : (len <= 5 ? 2 : len - 3);
    var semi = len <= 2 ? 0 : 1;
    if (bold > len) bold = len;
    if (bold + semi > len) semi = len - bold;
    return [
      word.slice(0, bold),
      word.slice(bold, bold + semi),
      word.slice(bold + semi)
    ];
  }

  function isSkipped(node) {
    var n = node.parentNode;
    while (n && n.nodeType === 1) {
      var tag = n.tagName;
      if (SKIP_TAGS[tag]) return true;
      if (tag.indexOf('MJX-') === 0) return true;
      if (n.classList) {
        if (n.classList.contains('bionic-skip')) return true;
        if (n.classList.contains('MathJax')) return true;
        if (n.classList.contains('MathJax_Preview')) return true;
      }
      n = n.parentNode;
    }
    return false;
  }

  function processTextNode(node) {
    var text = node.nodeValue;
    if (!text || !/[A-Za-z]/.test(text)) return;
    if (isSkipped(node)) return;

    var frag = document.createDocumentFragment();
    var re = /[A-Za-z\u00C0-\u024F]+/g;
    var last = 0;
    var m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      }
      var parts = bionicSplit(m[0]);
      if (parts[0]) {
        var b = document.createElement('span');
        b.className = 'bionic-b';
        b.textContent = parts[0];
        frag.appendChild(b);
      }
      if (parts[1]) {
        var s = document.createElement('span');
        s.className = 'bionic-s';
        s.textContent = parts[1];
        frag.appendChild(s);
      }
      if (parts[2]) {
        frag.appendChild(document.createTextNode(parts[2]));
      }
      last = m.index + m[0].length;
    }
    if (last < text.length) {
      frag.appendChild(document.createTextNode(text.slice(last)));
    }
    node.parentNode.replaceChild(frag, node);
  }

  function walk(node) {
    if (node.nodeType === 3) {
      processTextNode(node);
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.tagName;
    if (SKIP_TAGS[tag]) return;
    if (tag.indexOf('MJX-') === 0) return;
    if (node.classList) {
      if (node.classList.contains('bionic-skip')) return;
      if (node.classList.contains('MathJax')) return;
    }
    var children = [];
    for (var i = 0; i < node.childNodes.length; i++) children.push(node.childNodes[i]);
    for (var j = 0; j < children.length; j++) walk(children[j]);
  }

  function run() {
    var root = document.querySelector('.post-content');
    if (!root) return;
    var paragraphs = root.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i++) {
      var p = paragraphs[i];
      if (p.dataset.bionic) continue;
      if (p.classList.contains('post-meta')) continue;
      if (p.classList.contains('bionic-skip')) continue;
      walk(p);
      p.dataset.bionic = '1';
    }
  }

  function start() {
    if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
      window.MathJax.startup.promise.then(run).catch(run);
    } else {
      run();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
