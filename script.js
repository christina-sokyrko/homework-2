let initialNumber = +prompt ("Введіть початкове число");
while ((!Number.isInteger(initialNumber)) || (Number.isNaN(initialNumber))) {
  initialNumber = +prompt ("Введіть ціле число");
}

let endingNumber = +prompt ("Введіть кінцеве число");
while ((!Number.isInteger(endingNumber)) || (Number.isNaN(endingNumber)) || (endingNumber < initialNumber)) {
  endingNumber = +prompt ("Введіть ціле число, більше за попереднє");
}

const pairedSkip = confirm ("Пропустити парні числа?");

let sum = 0;

if (pairedSkip) {
  for (let a = initialNumber; a <= endingNumber; a ++) {
      if (a % 2 === 0) continue;
      sum = sum + a;
  }
}

else {
  for (let a = initialNumber; a <= endingNumber; a ++) {
      sum = sum + a;
  }
}

alert (sum);
