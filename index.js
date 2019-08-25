import { renderSnips, highlightSnips, fetchSnippets } from './lib/snippets.js';

// map over the SNIPS
import { search } from './lib/search.js';

async function init() {
  const snippets = await fetchSnippets();
  renderSnips(snippets);
}
init();
const searchForm = document.getElementById('search-bar');
// const searchText = document.getElementById('search-text');

searchForm.addEventListener('submit', event => {
  const searchText = event.target['search-text'].value;
  event.preventDefault();
  search(searchText);
});

// hljs.initHighlightingOnLoad();
highlightSnips();
