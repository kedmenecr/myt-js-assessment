exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },


  sum: function (arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      sum += arr[index];
      
    }
    return sum;
  },

  remove: function (arr, item) {
    return arr.filter(a => a !== item );
  },

  removeWithoutCopy: function (arr, item) {
    var saved;
    while ((saved = arr.indexOf(item)) > -1) {
      arr.splice(saved,1);
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
    arr.splice(index,0,item);
    return arr;
  },

  count: function (arr, item) {
    /** filter solution
    return arr.filter( _item => _item === item ).length;
    **/
    let occur = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] == item) {
        occur++;
      }
    }
    return occur;
  },

  duplicates: function (arr) {
    var duplicates = []; 
    for(let i = 0; i < arr.length;i++){
      for(let j = i + 1; j < arr.length;j++){
        if(arr[i]=== arr[j] && duplicates.indexOf(arr[i]) <= -1){
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
  }
};
