function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const monthlyRate = ratePerHour * 8 * 22;
  const monthlyRateWithDiscount = monthlyRate * (1 - discount);
  const totalMonths = Math.floor(numDays / 22);
  const extraDays = numDays % 22;
  const extraDaysCost = extraDays * ratePerHour * 8;
  const finalCost = Math.ceil(
    totalMonths * monthlyRateWithDiscount + extraDaysCost
  );
  return finalCost;
}

// console.log(priceWithMonthlyDiscount(89, 230, 0.42)); // => 97972
// console.log(priceWithMonthlyDiscount(16, 70, 0)); // => 8960
console.log(priceWithMonthlyDiscount(16, 130, 0.15)); // => 14528
