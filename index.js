const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = name => cats.push(name);
const destructivelyPrependCat = name => cats.unshift(name);
const destructivelyRemoveFirstCat = () => cats.shift();
const destructivelyRemoveLastCat = () => cats.pop();

const appendCat = name => [...cats, name];
 
const prependCat = name => [name, ...cats];

const removeFirstCat = () => cats.slice(1);

const removeLastCat = () => cats.slice(0, -1);