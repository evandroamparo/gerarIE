var randomiza = function (n) {
   var ranNum = Math.round(Math.random()*n);
   return ranNum;
};

var mod = function (dividendo, divisor) {
   return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
};

var geraInscricaoEstadual = function (somenteDigitos) {
  var n1 = 1;
  var n2 = 1;
  var n3 = randomiza(1);
  var n4 = randomiza(9);
  var n5 = randomiza(9);
  var n6 = randomiza(9);
  var n7 = randomiza(9);
  var n8 = randomiza(9);
  var somaProdutos = n8 * 2 + n7 * 3 + n6 * 4 + n5 * 5 + n4 * 6 + n3 * 7 + n2 * 8 + n1 * 9;
   
  var resto11 = mod(somaProdutos, 11);
  
  var digito;
   
   if ((resto11 === 1) || (resto11 === 0)) {
     digito = 0;
   }
   else {
     digito = 11 - resto11;
   }
   
   if (somenteDigitos) {
      return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + digito;
   }
   else {
      return '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + '-' + digito;
   }
};