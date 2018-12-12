// var run = {};
// (function(context) {
//
//   context.equal = function (argument, expectedValue) {
//     try {
//       if (argument !== expectedValue) throw new Error ("doesnt equal the expected value")
//       if (argument === expectedValue) console.log("%c - Pass", "color: green")
//       }
//     catch(err) {
//       console.log("%c - " + err.stack, "color: red")
//     }
//   }
//
//   context.test = function(func, message, argument, expectedvalue) {
//     console.log(message)
//     if (func === 'equal') {
//       this.equal(argument, expectedvalue)
//     }
//   }
// })
//
// (run);
//
// run.test('equal', 'it compares two values', showText(4), 4);
