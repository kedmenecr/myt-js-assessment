exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },


  sum: function (arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      sum += element;
    }
    return sum;
  },

  remove: function (arr, item) {
    let newArr = arr.filter(a => { return a !== item });
    return newArr;
  },

  removeWithoutCopy: function (arr, item) {
    while (arr.indexOf(item) > -1 ){
      arr.splice(arr.indexOf(item),1);
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
     arr.pop();
     return arr;
  },

  prepend: function (arr, item) {
     arr.unshift(item);
     return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);


  },

  insert: function (arr, item, index) {
    arr.splice(index, item, item);
    return arr;
  },

  count: function (arr, item) {
    /** filter solution
    return arr.filter( _item => _item === item ).length;
    **/
    let occur = 0;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == item) {
        occur++;
      }
    }
    return occur;
  },

  duplicates: function (arr) {
    var occur;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];

    }
  }
};
