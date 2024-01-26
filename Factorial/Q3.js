function factorial(n){
  var fact=1;
  for(let i=n;i>0;i--){
    fact*=i;
  }
  return fact;
}
function find(){
  var num=parseInt(document.getElementById("num").value);
  document.write("Factrorial of "+num+" is "+factorial(num));
}