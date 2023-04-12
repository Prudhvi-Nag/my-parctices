
         const operator=prompt("enter operator to caluculate(/,+,-,*): "); //operators
        const Number1=parseFloat(prompt("enter frist number:")); //number!
        const Number2=parseFloat(prompt("enter second number:"));//number2

        var result;  



        if(operator=='/'){result=Number1/Number2;}       //division
        else if(operator=='+'){result=Number1+Number2;}  //addition
        else if(operator=='-'){result=Number1-Number2;}  //subtruction
        else if(operator=='*'){result=Number1*Number2;}  //multplication
        else {result=NaN;}                               //not a number

        window.alert("RESULT IS " +result);              //result
    