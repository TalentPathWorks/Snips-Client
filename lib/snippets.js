import { Snip } from '../components/Snip.js';

export const highlightSnips = () => {
  const snips = document.querySelectorAll('pre code');
  snips.forEach(hljs.highlightBlock);
};

export const renderSnips = snippets => {
  const snippetHTML = snippets.map(Snip).join('');
  const snippetElem = document.getElementById('snippets');
  snippetElem.innerHTML = snippetHTML;
  highlightSnips();
};
export const fetchSnippets = () =>
  fetch('http://localhost:5000/api/snippets').then(response => response.json());
