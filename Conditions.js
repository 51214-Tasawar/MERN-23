console.log("Counting the days of Month")
a =2023 ;
b=2
if(a%4==0){
    console.log("This Is Year Of Leap")
    switch(b){
     case 1 :
     case 3 :
     case 5 :
     case 7 :
     case 8 :
     case 10 :
     case 12 :
        console.log("This is  month of 31 Day");
        break ;
        case 2:
        console.log("This is month of 29 Days") ;
        break ;
        case 1 :
            case 4 :
            case 6 :
            case 9 :
            case 11 :
                console.log("This is month of 30 Days") ;
             break;
             default :
             console.log ("Invalid Input");
             break ;
    }
} else{
    switch(b){
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 :
           console.log("This is  month of 31 Day");
           break ;
           case 2:
           console.log("This is month of 28 Days") ;
           break ;
           case 1 :
               case 4 :
               case 6 :
               case 9 :
               case 11 :
                   console.log("This is month of 30 Days") ;
                break;
                default :
                console.log ("Invalid Input");
                break ;
       }
}