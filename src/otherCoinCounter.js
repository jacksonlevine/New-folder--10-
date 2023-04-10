export default function RecursiveCount(dollarAmount, quarters, dimes, nickles, pennies) {
  if (isNaN(dollarAmount)) {
    return;
  }
  
  if (dollarAmount = 0)  
  {
   const object = {
    "quarters": quarters,
    "dimes" : dimes,
    "nickles" : nickles,
    "pennies" : pennies
   }
   return object
  } else if(dollarAmount % 0.25 > .25) {
    return recursiveCount((dollarAmount % .25).toFixed(2), Math.floor(dollarAmount/.25), dimes, nickles, pennies);
  } else if(dollarAmount % 0.10 > .10) {
    return recursiveCount((dollarAmount % .10).toFixed(2), quarters, Math.floor(dollarAmount/.10), nickles, pennies);
  } else if(dollarAmount % 0.05 > .05) {
    return recursiveCount((dollarAmount % .05).toFixed(2), quarters, dimes, Math.floor(dollarAmount/.05), pennies); 
  } else if(dollarAmount % 0.01  > 0.01) {
    return recursiveCount((dollarAmount % .01).toFixed(2), quarters, dimes, Math.floor(dollarAmount/.01)) 
  }
}
