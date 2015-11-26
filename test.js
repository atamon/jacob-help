function fn1(arg1, arg2, arg3) {
  console.log(this, arguments);
}

fn1('test');
fn1.call('a string, I am this!', 'a second string', 'a third string');
fn1.apply('a string, I am also this!', ['a sdf', 'sadsf']);

var fn2 = function g() {
  console.log('arguments.length', arguments.length);
  var arr = Array.prototype.map.call(arguments, function (x) {
    return x * 2;
  });
  console.log(arr);
};

fn2(1,2);