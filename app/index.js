const cdns = [
  "http://127.0.0.1:8000/dist"
];

let currentCdn = 0;

const original = __webpack_chunk_load__;
__webpack_chunk_load__ = (id) => {
  let n = cdns.length;
  return (function tryCdn() {
    if(--n === 0)
      return original(id);
    return original(id).catch(e => {
      currentCdn = (currentCdn + 1) % cdns.length;
      __webpack_public_path__ = cdns[currentCdn];
      return tryCdn();
    })
  }());
}

function component () {
  var element = document.createElement('div');

  import('./lodashLoader').then(function(chunk) {
    const _ = chunk.default;
    element.innerHTML = _.join(['Hello','webpack'], ' ');
  }).catch(function(err) {
    console.log('Failed to load lodash loader', err);
  });

  return element;
}

document.body.appendChild(component());
