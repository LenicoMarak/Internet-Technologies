function openPrompt(){
   let list=[];
   let sum=0;
   let i=0;
   let num;
   do{
     num=parseInt(prompt("Enter a number"));
     if(num.length==0){
       alert("Please enter a number!!");
       continue;
     }
     if(num<0){
        alert("Please enter a positive number!!");
        continue;
     }
     list[i++]=num;
     sum+=num;
   }while(num!=0);
   var average=sum/list.length;
   document.write("Sum of all numbers is "+sum);
   document.write("<br>Average is "+average);
}
