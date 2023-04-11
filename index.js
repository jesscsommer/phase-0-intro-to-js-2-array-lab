const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = name => cats.push(name);
const destructivelyPrependCat = name => cats.unshift(name);
const destructivelyRemoveFirstCat = () => cats.shift();
const destructivelyRemoveLastCat = () => cats.pop();

const appendCat = name => {
    const newCats = [...cats, name];
    return newCats;
 }
 
 const prependCat = name => {
    const newCats = [name, ...cats];
    return newCats;
 }
 
 const removeFirstCat = () => {
    const newCats = [...cats];
    newCats.shift();
    return newCats;
 }
 
 const removeLastCat = () => {
    const newCats = [...cats];
    newCats.pop();
    return newCats;
 }