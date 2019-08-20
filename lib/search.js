import SNIPS from './snippet-data.js';
import { renderSnips } from './snippets.js';

export const search = text => {
  const list = SNIPS.filter(snippet => snippet.title.includes(text));
  const descriptionSnips = SNIPS.filter(snippet =>
    snippet.description.includes(text)
  );
  const languageSnips = SNIPS.filter(snippet =>
    snippet.language.includes(text)
  );
  Array.prototype.push.apply(list, descriptionSnips);
  Array.prototype.push.apply(list, languageSnips);
  // filteredSnips.push(languageSnips);
  const uniq = [...new Set(list)];
  renderSnips(uniq);
};
