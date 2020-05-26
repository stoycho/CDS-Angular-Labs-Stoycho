// create a decorator
function logDecor(f) {
    return function (name) {
        console.log("{{{{{{{{{{{{{{{{{{{{{{{");
        f(name);
        console.log("}}}}}}}}}}}}}}}}}}}}}}}");
    };
}
//a function, to be decorated:
var greet;
greet = function (name) {
    console.log("Howdy " + name + "!");
};
// decorate the function:
greet = logDecor(greet);
// use the decorated function
greet("Ada");
