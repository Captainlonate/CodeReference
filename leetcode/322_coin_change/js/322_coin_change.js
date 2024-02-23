/**
 * What is the fewest number of coins required to add up to `amount`.
 * If it's not possible to create the amount, return -1.
 *
 * ```
 * coinChange([1, 3], 7) // => 3 coins because 3cents + 3cents + 1cent = 7cents
 * ```
 * @param {number[]} coins in no particular order
 * @param {number} amount some positive number of cents
 */
function coinChange(unsortedCoins, amount) {
  const coins = [...unsortedCoins].sort();

  /**
   * This array will hold the "solved" fewest number of coins for
   * all possible "amounts" from 0 cents leading up to the "amount" we
   * actually want to solve for.
   * Each cell is initialized with a value that is impossibly high,
   * meaning, it's not possible to create 5 cents using 6 coins.
   */
  const fewestCoinsForEveryAmount = new Array(amount + 1).fill(Infinity);

  // Obviously there are no coins that add up to possibleSolutions[0] (zero cents)
  fewestCoinsForEveryAmount[0] = 0;

  // Find the fewest number of coins for each "amount", starting at 0
  for (let centsToSolveFor = 1; centsToSolveFor <= amount; centsToSolveFor++) {
    // For each of the actual coins that we have available to us
    for (const coin of coins) {
      // The coin that's being analyzed must be small enough to actually
      // fit in the "amount" that we're solving for.
      if (coin <= centsToSolveFor) {
        //
        fewestCoinsForEveryAmount[centsToSolveFor] = Math.min(
          fewestCoinsForEveryAmount[centsToSolveFor],
          1 + fewestCoinsForEveryAmount[centsToSolveFor - coin]
        );
      }
    }
  }

  // There's no way it can take more than 13 coins to compute 13 cents, even
  // if every coin was a penny.
  const fewestNumberOfCoins =
    fewestCoinsForEveryAmount[amount] > amount
      ? -1
      : fewestCoinsForEveryAmount[amount];

  return fewestNumberOfCoins;
}

// Multiple solutions
console.log(
  "coinChange([1, 3, 5, 7], 13)\n",
  coinChange([1, 3, 5, 7], 13),
  "\n"
);
// One solution, last number not used
console.log("coinChange([3, 5, 9], 13)\n", coinChange([3, 5, 7], 13), "\n");
// Not possible
console.log("coinChange([5, 7], 3)\n", coinChange([5, 7], 3), "\n");
// Not Possible
console.log("coinChange([5, 7], 8)\n", coinChange([5, 7], 8), "\n");
