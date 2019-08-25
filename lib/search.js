// import SNIPS from './snippet-data.js';
import { renderSnips, fetchSnippets } from './snippets.js';

export const search = async text => {
  const snips = await fetchSnippets('http://localhost:5000/api/snippets');
  const list = snips.filter(snippet => snippet.title.includes(text));
  const descriptionSnips = snips.filter(snippet =>
    snippet.description.includes(text)
  );
  const languageSnips = snips.filter(snippet =>
    snippet.language.includes(text)
  );
  Array.prototype.push.apply(list, descriptionSnips);
  Array.prototype.push.apply(list, languageSnips);
  // filteredSnips.push(languageSnips);
  const uniq = [...new Set(list)];
  renderSnips(uniq);
};
