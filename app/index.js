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
