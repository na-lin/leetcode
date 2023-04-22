/**
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    let toLeft = flowerbed[i - 1] || 0;
    let toRight = flowerbed[i + 1] || 0;
    let isAvailable = flowerbed[i] + toLeft + toRight === 0;
    if (isAvailable) {
      n -= 1;
      flowerbed[i] = 1;
    }
  }
  return n <= 0;
}

const result = canPlaceFlowers([1, 0, 0, 0, 1], 1);
console.log(result);
