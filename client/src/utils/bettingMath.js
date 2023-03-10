// American odds
function moneylineMath(moneyline, betAmount) {
  if (moneyline > 0) {
    const winAmount = betAmount * (moneyline / 100);
    const totalAmount = winAmount + betAmount;
    return totalAmount;
  } else {
    const winAmount = betAmount / (-100 / moneyline);
    const totalAmount = winAmount + betAmount;
    return totalAmount;
  }
}


// For point spread knowing who covered
function favCovered(favScore, dogScore, spread) {
  const favCovered = false;
  const finalSpread = dogScore - favScore;
  if (finalSpread < spread) {
    favCovered = true;
  }
  return favCovered;
}


// Determines total based on who covered
function pointSpread(oddsFav, oddsDog, betAmount) {
  const dogWins = favCovered();
  if (dogWins) {
    const winAmount = betAmount * (oddsDog / 100);
    const totalAmount = winAmount + betAmount;
    return totalAmount;
  } else {
    const winAmount = betAmount / (-100 / oddsFav);
    const totalAmount = winAmount + betAmount;
    return totalAmount;
  }
}


// Calculates total based on over/under
function pointTotal(totalPoints, overUnder, betAmount, overPrice, underPrice) {
  if (totalPoints > overUnder) {
    const totalAmount = betAmount * overPrice;
    return totalAmount;
  }
  if (totalPoints < overUnder) {
    const totalAmount = betAmount * underPrice;
    return totalAmount;
  }
}
