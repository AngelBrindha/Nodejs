function add(data) {
  return data.reduce(function (a, b) {
    return a + b;
  }, 0);
}
module.exports.sum = add;
