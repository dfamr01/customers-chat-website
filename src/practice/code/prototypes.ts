Array.prototype.unique = function () {
  return Object.values(
    this.reduce((acc, el) => {
      acc[el] = el;
      return acc;
    }, {})
  );
};
