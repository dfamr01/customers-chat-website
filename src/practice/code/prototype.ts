Array.prototype.unique = function () {
  return Array.from(new Set(this));
};
const res = [1, 1, 3, 3, 4].unique();
console.log("🚀 ~ res:", res);
