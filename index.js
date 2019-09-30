
//Fisher-Yates Shuffle
function permutation(n) {
  var indices = [];
  var struck = Array(n).fill(false);
  var numUnstruck = n;
  do {
    const steps = Math.trunc( 1 + Math.random()*numUnstruck );
    let i, j;
    for (i = 0, j = 0; j < steps; ++i) {
      if (!struck[i]) ++j;
    }
    struck[i-1] = true;
    indices.push(i-1);
    --numUnstruck;
  } while (numUnstruck > 0);
  return indices;
}

module.exports = {permutation};
