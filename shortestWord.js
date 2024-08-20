function findShort(s) {
  var arr = s.split(" ");
  var min = arr[0].length;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  return min;
}
