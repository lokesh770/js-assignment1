 let str1 = 'Today is';//1st answer
 let str2 = '      a beautiful day     '
 let str3 = ' In Hawaii.     '
 let result=str1.trim()+str2.trim()+str3.trim();
 console.log(result);

 
 let enteredalphabet="d"; //2nd answer//
 switch(enteredalphabet){
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":    
    case "U":    
        console.log("the entered value is a vowel")
        break;
        case "b":
        case "B":
        case "c":
        case "C":
        case "d":
        case "D":
        case "f":
        case "F":
        case "g":
        case "G":
        case "h":
        case "H":
        case "j":
        case "J":
        case "k":
        case "K":
        case "l":
        case "L":
        case "m":
        case "M":
        case "n":
        case "N":
        case "p":
        case "P":
        case "q":
        case "Q":
        case "r":
        case "R":
        case "s":
        case "S":
        case "t":
        case "T":
        case "v":
        case "V":
        case "w":
        case "W":
        case "x":
        case "X":
        case "y":
        case "Y":
        case "z":
        case "Z":
            console.log("it is a consonant value")
        break;
        default:
            console.log("it is a non alphabet")
        }

        let num1=2; // 3rd answer
        let num2=4;
        let operator= "*";
        switch(operator){
        case "+":
            console.log("the sum is", num1+num2);
            break;
        case "-":
            console.log("the substraction is", num1-num2);
            break;
        case "*":
            console.log("the multiplication is", num1*num2);
            break;
        case "/":
            console.log("the division is", num1/num2);
            break;
            default:
                console.log("entered input is invalid");
                break;
        }

        let a=25; //4th answer
        let b=25;
        let c=25;
        if(a==b&&b==c&&c==a){
            console.log("it is a equatorial triange")
        }
        else if (a==b||a==c||b==c){
            console.log("it is a Isosceles Triangle ")

        }
        else{
            console.log("it is a Scalene Triangle")
        }
        
        const units=300; //5th answer
        let bill=0;
        if(units<=50){
            bill=units*0.5;
        }
        else if(units<=150){
              bill=50*0.5+(units-50)*0.75;
        }
       else if(units<=250){
        bill=50*0.5+100*0.75+(units-150)*1.2;
       }
       else{
        bill=50*0.5+100*0.75+100*1.2+(units-250)*1.5;
        bill=bill+bill*0.2;
        console.log(`the total electricity bill  ${bill} INR`)
       }