module.exports = {
  FirstReverse: function (str) {
    return str.split('').reverse().join('');
  },

  LetterChanges: function (str) {
    replace_letters = function (letter) {
      var char = letter.charCodeAt();
      if (char >= 97 && char <= 122) {
        return String.fromCharCode(letter.charCodeAt() + 1);
      }
      else {
        return letter;
      }
    }

    capitalize_vowels = function (letter) {
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      if (vowels.indexOf(letter) >= 0) {
        return letter.toUpperCase();
      }
      else {
        return letter;
      }
    }

    return str.split('').map(replace_letters).map(capitalize_vowels).join('');
  },

  LongestWord: function (sen) {
    var reduce_longest_word = function (prev, next) {
      prev = prev || ''; next = next || '';
      return next.length > prev.length ? next : prev;
    }

    return sen.split(' ').reduce(reduce_longest_word);
  },

  SimpleAdding: function (num) {
    var sequential_map = function (el, i) {
      return i + 1;
    }

    var sum_reduce = function (prev, next) {
      return prev + next;
    }

    var arr = new Array(num);

    return arr.join().split(',').map(sequential_map).reduce(sum_reduce);
  },

  FirstFactorial: function (num) {
    var sequential_map = function (el, i) {
      return i + 1;
    }

    var mult_reduce = function (prev, next) {
      return prev * next;
    }

    var arr = new Array(num);

    return arr.join().split(',').map(sequential_map).reduce(mult_reduce);
  },

  // 'xxoo'

  ExOh: function (str) {
    var reduce_count_str = function (prev, next) {
      prev[next] = prev[next] ? prev[next] + 1 : 1;
      return prev;
    }

    var xo_obj = str.split('').reduce(reduce_count_str, {});
    return xo_obj.x === xo_obj.o;
  }
};
