module.exports = {
  // 1. When the input was 2 your output was incorrect.
  // So, only works on numbers greater than 2.
  PrimeTime: function (num) {
    var sequential_map = function (el, i) {
      return i + 2;
    }

    var mod_reduce = function (prev, next) {
      return prev || num % next === 0;
    }

    var arr = new Array(num - 2);

    return !arr.join().split(',').map(sequential_map).reduce(mod_reduce, false);
  },

  // Runs great! 5/5
  RunLength: function (str) {
    var map_collection = function (el) {
      return {
        char: el,
        count: 1
      };
    }

    var rle_reduce = function (prev, next) {
      if (prev.length) {
        var tail = prev.pop();
        if (tail.char === next.char) {
          tail.count += next.count;
          prev.push(tail);
        }
        else {
          prev.push(tail);
          prev.push(next);
        }
      }
      else {
        prev.push(next);
      }

      return prev;
    };

    var join_collection = function (prev, next) {
      return prev + next.count + next.char;
    }

    return str.split('')
      .map(map_collection)
      .reduce(rle_reduce, [])
      .reduce(join_collection, '');
  }
};
