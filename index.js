import SNIPS from './snippet-data.js';
// map over the SNIPS
const renderSnips = snippets => {
  const snipsHTML = snippets
    .map(
      snippet => /* HTML */ `
        <div class="snip">
          <div class="text">
            <h2>${snippet.title}</h2>
            <p>${snippet.description}</p>
          </div>
          <br />
          <pre><code class="${snippet.language}">${he.encode(
            snippet.code
          )}</code></pre>
        </div>
      `
    )
    .join('');

  const snippetElem = document.getElementById('snippets');
  snippetElem.innerHTML = snipsHTML;
};
renderSnips(SNIPS);
hljs.initHighlightingOnLoad();
