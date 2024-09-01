/* Select a random element from values array. */
function choice(pokemonArr) {
  const randIdx = Math.floor(Math.random() * pokemonArr.length);
  return pokemonArr[randIdx];
}

export { choice };