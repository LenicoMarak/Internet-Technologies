
function largest(n1,n2,n3){
  var result=n1;
  if(n2>result){
    result=n2;
  }
  if(n3>result){
    result=n3;
  }
  return result;
}
function result(){
  var n1=parseInt(document.getElementById("n1").value);
  var n2=parseInt(document.getElementById("n2").value);
  var n3=parseInt(document.getElementById("n3").value);
  var root=document.getElementById("result");
  root.innerText=largest(n1,n2,n3);
}