/**
 * What is the fewest number of coins required to add up to `amount`.
 * Return the fewest number of coins used to create the amount, or -1 if it's not possible.
 * And also return the actual coins used in the solution.
 *
 * ```
 * coinChange([1, 3], 7) // => 3 coins because 3cents + 3cents + 1cent = 7cents
 * ```
 * @param {number[]} coins in no particular order
 * @param {number} amount some positive number of cents
 */
function coinChangeWithCombo(unsortedCoins, amount) {
  const coins = [...unsortedCoins].sort();

  /**
   * This array will hold the "solved" fewest number of coins for
   * all possible "amounts" from 0 cents leading up to the "amount" we
   * actually want to solve for.
   * Each cell is initialized with a value that is impossibly high,
   * meaning, it's not possible to create 5 cents using 6 coins.
   */
  const fewestCoinsForEveryAmount = new Array(coins.length)
    .fill(null)
    .map(() => new Array(amount + 1).fill(Infinity));

  // For each of the actual coins that we have available to us
  for (let rowIdx = 0; rowIdx < coins.length; rowIdx++) {
    // Find the fewest number of coins for each "amount", starting at 0
    for (let colIdx = 0; colIdx <= amount; colIdx++) {
      // Obviously there are no coins that add up to possibleSolutions[0] (zero cents)
      if (colIdx === 0) {
        fewestCoinsForEveryAmount[rowIdx][colIdx] = 0;
        continue;
      }

      // The coin that's being analyzed must be small enough to actually
      // fit in the "amount" that we're solving for.
      const canLookUp = rowIdx > 0;
      const canLookLeft = coins[rowIdx] <= colIdx;

      if (canLookUp && canLookLeft) {
        fewestCoinsForEveryAmount[rowIdx][colIdx] = Math.min(
          fewestCoinsForEveryAmount[rowIdx - 1][colIdx],
          1 + fewestCoinsForEveryAmount[rowIdx][colIdx - coins[rowIdx]]
        );
      } else if (canLookLeft) {
        fewestCoinsForEveryAmount[rowIdx][colIdx] =
          1 + fewestCoinsForEveryAmount[rowIdx][colIdx - coins[rowIdx]];
      } else if (canLookUp) {
        fewestCoinsForEveryAmount[rowIdx][colIdx] =
          fewestCoinsForEveryAmount[rowIdx - 1][colIdx];
      }
    }
  }

  const minimumNumberOfCoins =
    fewestCoinsForEveryAmount[fewestCoinsForEveryAmount.length - 1][amount] ===
    Infinity
      ? -1
      : fewestCoinsForEveryAmount[fewestCoinsForEveryAmount.length - 1][amount];

  const coinsUsed = [];
  if (minimumNumberOfCoins > 0) {
    let rowIdx = fewestCoinsForEveryAmount.length - 1;
    let colIdx = fewestCoinsForEveryAmount[0].length - 1;

    while (true) {
      const canLookUp = rowIdx > 0;
      const canLookLeft = coins[rowIdx] <= colIdx;

      if (canLookLeft && canLookUp) {
        // If left is smaller or equal, prefer left. Else go up
        if (
          fewestCoinsForEveryAmount[rowIdx][colIdx - coins[rowIdx]] <
          fewestCoinsForEveryAmount[rowIdx - 1][colIdx]
        ) {
          // If moving left, then register the coin. Move, then register
          colIdx -= coins[rowIdx];
          coinsUsed.push(coins[rowIdx]);
        } else {
          rowIdx -= 1;
        }
      } else if (canLookLeft) {
        colIdx -= coins[rowIdx];
        coinsUsed.push(coins[rowIdx]);
      } else if (canLookUp) {
        rowIdx -= 1;
      } else {
        break;
      }
    }
  }

  return { minimumNumberOfCoins, coinsUsed };
}

// Multiple solutions
console.log(
  "coinChangeWithCombo([1, 3, 5, 7], 13)\n",
  coinChangeWithCombo([1, 3, 5, 7], 13),
  "\n"
);
// One solution, last number not used
console.log(
  "coinChangeWithCombo([3, 5, 9], 13)\n",
  coinChangeWithCombo([3, 5, 7], 13),
  "\n"
);
// Not possible
console.log(
  "coinChangeWithCombo([5, 7], 3)\n",
  coinChangeWithCombo([5, 7], 3),
  "\n"
);
// Not Possible
console.log(
  "coinChangeWithCombo([5, 7], 8)\n",
  coinChangeWithCombo([5, 7], 8),
  "\n"
);
