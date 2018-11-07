var i;
var j;
var product;
for (var i = 100; i < 999; i++) {
  for (var j = 999; j > 100; j--) {
    product = i * j;
    number = product.toString();
    reversed = number.split('').reverse().join('');
    if (reversed == product && product > 900000){
      console.log(product);
      break;
    }
  }
}

