module.exports = function toReadable (n) {
    let num = n.toString();
    let result = '';
    let numbers = {
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
    };
    
      let specialNumbers = {
      '10': 'ten',
      '11': 'eleven',
      '12': 'twelve',
      '13': 'thirteen',
      '14': 'fourteen',
      '15': 'fifteen',
      '16': 'sixteen',
      '17': 'seventeen',
      '18': 'eighteen',
      '19': 'nineteen',
      '20': 'twenty',
      '30': 'thirty',
      '40': 'forty',
      '50': 'fifty',
      '60': 'sixty',
      '70': 'seventy',
      '80': 'eighty',
      '90': 'ninety',
    };
    
    const first = num[0];
    const second = num[1];
    const last = num[2];
    
    if (n < 10 && n >= 0) {
      result = numbers[first];
    } else if (n >= 10 && n < 100) {
      if (!!specialNumbers[first + second]) {
        result = specialNumbers[first + second]
      } else {
        result = `${specialNumbers[first + '0']} ${numbers[second]}`;
      }
    } else if (n >= 100) {
      result = `${numbers[first]} hundred`;
      if (!!specialNumbers[second + last]) {
       result = result +  " " + specialNumbers[second + last]
      } else if (second === '0' && last !== '0') {
          result = result +  " " + numbers[last]
      } else if (last !== '0') {
        result = result + ` ${specialNumbers[second + '0']} ${numbers[last]}`;
      }
    } 
    
   return result; 
}
