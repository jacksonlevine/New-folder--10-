
export default function CountCoins(moneyAmount) {
  if (isNaN(moneyAmount)) {
    return "Please enter a number."
  };
  if (moneyAmount === 0) {
    return "";
  }
  else if (moneyAmount / 0.25 >= 1) {
    const quarters = Math.floor(moneyAmount / 0.25);
    return `${quarters} quarters ` + CountCoins(moneyAmount - quarters * 0.25);
  }
  else if (moneyAmount / 0.1 >= 1) {
    const dimes = Math.floor(moneyAmount / 0.1);
    return `${dimes} dimes ` + CountCoins(moneyAmount - dimes * 0.1);
  }
  else if (moneyAmount / 0.05 >= 1) {
    const nickels = Math.floor(moneyAmount / 0.05);
    return `${nickels} nickels ` + CountCoins(moneyAmount - nickels * 0.05);
  }
  else if (moneyAmount / 0.01 >= 1) {
    const pennies = Math.round(moneyAmount / 0.01);
    return `${pennies} pennies `;
  }
  else {
    return "";
  }
}

export function CountCoinsWithClosures(moneyAmount) {
  let result = [];
  function QuartersCount() {
    result.push(Math.floor(moneyAmount / 0.25));
    moneyAmount = moneyAmount - result[0] * 0.25;
    return result;
  }
  function DimesCount() {
    result.push(Math.floor(moneyAmount / 0.1));
    moneyAmount = moneyAmount - result[1] * 0.1;
    return result;
  }
  function NickelsCount() {
    result.push(Math.floor(moneyAmount / 0.05));
    moneyAmount = moneyAmount - result[2] * 0.05;
    return result;
  }
  function PenniesCount() {
    result.push(Math.round(moneyAmount / 0.01));
    return result;
  }
  QuartersCount();
  DimesCount();
  NickelsCount();
  PenniesCount();
  return result;
}

export function CountCoinsWithClosures1(moneyAmount) {
  let result = [];
  return function QuartersCount() {
    result.push(Math.floor(moneyAmount / 0.25));
    moneyAmount = moneyAmount - result[0] * 0.25;
    return function DimesCount() {
      result.push(Math.floor(moneyAmount / 0.1));
      moneyAmount = moneyAmount - result[1] * 0.1;
      return function NickelsCount() {
        result.push(Math.floor(moneyAmount / 0.05));
        moneyAmount = moneyAmount - result[2] * 0.05;
        return function PenniesCount() {
          result.push(Math.round(moneyAmount / 0.01));
          return result;
        }
      }
    }
  }
}

function countCoinsRecursive(moneyAmount) {
  
}


