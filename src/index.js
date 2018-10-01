module.exports = function getZerosCount(number, base) {
  debugger;
  const simple=[];
  const countzero=[];
  let rate = 1;
  let i = 2;
  while (i <= base) {
    if (base % i == 0) {
      simple.push(i);
      base = base / i;
    } else i++;
  };
  for (let i = 0; i < simple.length; i++) {
    let tempsimple = simple[i];
    if (simple[i - 1] == tempsimple) {
      rate++;
      continue;
    } else if (i > 0) {
      countzero[countzero.length - 1] = Math.floor(countzero[countzero.length - 1] / rate);
      rate = 1;
    }
    let tempzero = 0;
    let tempnumber = number;
    while (tempnumber >= tempsimple) {
      tempnumber = Math.floor(tempnumber / tempsimple);
      tempzero += tempnumber;
    }
    countzero.push(tempzero); 
  }
  if (rate > 1) countzero[countzero.length - 1] = Math.floor(countzero[countzero.length - 1] / rate);
  return Math.min(...countzero);
  
}
 
