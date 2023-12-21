const solveExpression = (expression) => {
  try {
    return math.evaluate(expression);
  } catch (err) {
    return new Error('Invalid input');
  }
};

export default solveExpression;
