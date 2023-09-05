alert(` مرحبا في موقعي ,انا الهاجري وسوف احسب درجتك`)
console.log('%c color: blue; font-size: 18px;');
 let grade = prompt("ادخل درجتك")
 
 console.log(grade);
 if(grade >= 90){
    console.log(" %c لقد حصلت على امتياز 🥳 ", "color:lightgreen;")
 }
 else if(grade >= 80 && grade < 90){
    console.log(" %c لقد حصلت على جيد جداً🤩", "color:green;");

 }
 else if(grade >= 70 && grade < 80){
    console.log("%c لقد حصلت على جيد🙂", "color:darkgreen;")
     }
     else if(grade >= 60 && grade < 70){
        console.log("%c لقد حصلت على مقبول😕", "color:orange;")
         }
         else if(grade >= 50 && grade < 60){
            console.log(console.log("%c  لقد حصلت على ضعيف☹️", "color:red;")); 
             }
             else if(grade < 50){
                console.log("راسب💔")
                 }
        //  جافا سكربت ليس جافا