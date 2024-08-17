
const fraction = {
  numerator: 1,
  denominator: 1,

  
  reduce() {
    const gcd = this.getGCD(this.numerator, this.denominator);
    this.numerator /= gcd;
    this.denominator /= gcd;
    return this;
  },

  getGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return this.getGCD(b, a % b);
  },

  
  add(fraction2) {
    const newNumerator =
      this.numerator * fraction2.denominator +
      fraction2.numerator * this.denominator;
    const newDenominator = this.denominator * fraction2.denominator;
    return createFraction(newNumerator, newDenominator).reduce();
  },

  
  subtract(fraction2) {
    const newNumerator =
      this.numerator * fraction2.denominator -
      fraction2.numerator * this.denominator;
    const newDenominator = this.denominator * fraction2.denominator;
    return createFraction(newNumerator, newDenominator).reduce();
  },


  multiply(fraction2) {
    const newNumerator = this.numerator * fraction2.numerator;
    const newDenominator = this.denominator * fraction2.denominator;
    return createFraction(newNumerator, newDenominator).reduce();
  },

  // Метод для ділення двох дробів
  divide(fraction2) {
    const newNumerator = this.numerator * fraction2.denominator;
    const newDenominator = this.denominator * fraction2.numerator;
    return createFraction(newNumerator, newDenominator).reduce();
  },

  
  toString() {
    return `${this.numerator}/${this.denominator}`;
  },
};


function createFraction(numerator, denominator) {
  return Object.assign(Object.create(fraction), {
    numerator,
    denominator,
  });
}


const fraction1 = createFraction(3, 4);
const fraction2 = createFraction(5, 6);

console.log(`Дріб 1: ${fraction1.toString()}`);
console.log(`Дріб 2: ${fraction2.toString()}`); 

const sum = fraction1.add(fraction2);
console.log(`Сума: ${sum.toString()}`); 

const difference = fraction1.subtract(fraction2);
console.log(`Різниця: ${difference.toString()}`); 

const product = fraction1.multiply(fraction2);
console.log(`Добуток: ${product.toString()}`); 

const quotient = fraction1.divide(fraction2);
console.log(`Частка: ${quotient.toString()}`); 
