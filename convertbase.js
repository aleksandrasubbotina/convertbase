const convert = (digits, oldBase, newBase) => {
    // zero is zero in all bases
    if (digits.length === 1 && digits[0] === 0) return [0];
    
    // error cases for input
    if (oldBase < 2) throw new Error('Wrong input base');
    if (newBase < 2) throw new Error('Wrong output base');
    if (digits.length === 0 || digits[0] === 0) throw new Error('Input has wrong format');
    if (digits.findIndex((x) => (x >= oldBase) || (x < 0)) !== -1) throw new Error('Input has wrong format');
    let power = digits.length - 1;
    let decimal = 0;

    // multiply every digit to it's input base in power of it's place in a number.
    // power variable is descending for the next digit
    for (let i = 0; i < digits.length; i ++) {
      decimal += digits[i] * (oldBase ** power);
      power--;
    };

    let result = [];
    // divide decimal by output base, remainder goes to beginning of result number
    while (decimal !== 0) {
      result.unshift(decimal % newBase);
      decimal = Math.floor(decimal / newBase);
    };
    
    return result;
};