function display(){
var table = "Number\tSquare\tCube\n";
for (var i = 5; i <= 15; i++) {
  var square = i * i;
  var cube = i * i * i;
  table +="\n"+i +"\t" + square + "\t" + cube;
}
alert(table);
}