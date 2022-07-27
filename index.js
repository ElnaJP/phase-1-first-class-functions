function receivesAFunction(callback) {
let Spy;
callback(Spy);
}

function returnsANamedFunction() {
    let aNamedFunction;
return function aNamedFunction() {
  console.log(aNamedFunction());
}
 }

function returnsAnAnonymousFunction() {
    let anonymousFunction;
    return () => 'anonymousFunction'
}


