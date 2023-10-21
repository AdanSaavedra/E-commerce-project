/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */

export const totalPrice = (products) => {
  const sum = products.map((item) => item.price);
  let total = sum.reduce((a, b) => {
    return a + b;
  }, 0);
  return total;
};
