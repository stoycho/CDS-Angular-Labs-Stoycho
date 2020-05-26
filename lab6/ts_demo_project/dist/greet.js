// define greet() function, which takes userName and userLastName as optional parameter
function greet(userName, userLastName) {
    var msg = userLastName ?
        userName + " " + userLastName :
        "" + userName;
    console.log(msg);
}
greet('Ada');
greet('Ada', 'Byron');
// greet(5,4); // type error
// let output:string;
// output = greet('Ada'); // type error
// Hello Ada;
// Hello Ada Byron;
