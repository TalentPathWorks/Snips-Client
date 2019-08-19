import SNIPS from './lib/snippet-data.js';
import { renderSnips } from './lib/snippets.js';

// map over the SNIPS
import { search } from './lib/search.js';

renderSnips(SNIPS);

const searchForm = document.getElementById('search-bar');
// const searchText = document.getElementById('search-text');

searchForm.addEventListener('submit', event => {
  const searchText = event.target['search-text'].value;
  event.preventDefault();
  search(searchText);
});

hljs.initHighlightingOnLoad();
