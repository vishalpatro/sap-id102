
// var myApp = myApp || {};

// (function () {
//     var i = 10;
//     myApp.mod2.doWork();
//     myApp.mod3.doWork();
//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };
//     myApp.mod1 = o; // export , abstract
// })();

//------------------------------------------------------------------------

console.log('-greet/index.js-');

const en=require('./en');
const ka=require('./ka');

function greet(lang) {
    if (lang === "en") {
        en(); return;
    }
    if (lang === "ka") {
        ka(); return;
    }
    console.log("give me ur lang , then ill greet u");
}
// greet();
module.exports = {
    greet
};