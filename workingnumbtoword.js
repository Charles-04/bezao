var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
//var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

var unit="zero one two three four five six seven eight nine";
var tens="ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety";
var unitTens="zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety";
var numbValue=[];
//{number:0,value:zero}
//1=hundred,2=thousand,3=million,4=billion;
const numberkeypair=()=>{
    let gV=10;
    unitTens.split(" ").map((e,i)=>{
       
        if(i>19){
            gV+=10;
          //  console.log(e,gV);
            numbValue.push({number:gV,value:e});
        }else{
          //  console.log(e,i);
            numbValue.push({number:i,value:e});
        }
    });
    // key pair value
    //console.log(numbValue);
}
numberkeypair();

const numbers ={
    unit:1,
    tens:2,
    hundreds:[

    ],
    thousands:4,
    tenThousands:5,
    hundredThousands:6,
    millions:7,
    tenMillions:8,
    hundredMillions:9,
    billion:10
}
let gCount=0;
let word={};

const checkCount =(nums)=>{  

let count =nums.toString()

let b=0;
let total=0;
let tempArr=[];
for(var i=count.length-1; i>=0;i--){
    total++;

    console.log(count[i]);
    tempArr.push(count[i]);
    
    b++;
    if(b%3===0){
        // to keep count 
        gCount++;
        tempArr.reverse();
        numberArray(gCount,tempArr);   
        //console.log(tempArr)
      //  console.log("Good")
        tempArr=[];
    }
    if(total===count.length){
        gCount++;
        tempArr.reverse();
        numberArray(gCount,tempArr);   
        //console.log("The loop has ended");
       // console.log(tempArr);
        tempArr=[];
        console.log(word);
    }
//console.log(b%3,"check")
    
}
}
const numberArray=(count,countArray)=>{
       switch(count){
        case 1:word['hundred']=countArray;
        break;
        case 2:word['thousand']=countArray;
        break;
        case 3:word['million']=countArray;
        break;
        case 4:word['billion']=countArray;
        break;
        case 5:word['trillion']=countArray;
        break;
        default:
            console.log("Stop looking for trouble");
            break;
       }
}
const threeDigitCount=(countArray,wordRep)=>{
  switch(countArray.toString().length){
      case 1: //console.log("case 1");
      if(countArray.toString().split('')[0]!=0){
        if(wordRep=='hundred'){
            const val=numbValue.find((e)=>e.number==countArray.toString().split('')[0]);
            console.log(val.value," ");
        }else{
            const val=numbValue.find((e)=>e.number==countArray.toString().split('')[0]);
            console.log(val.value," "+wordRep);  
        }
      }
      
        break;
        case 2: //console.log("case 2");
        if (countArray.toString().split('')[0]!=0){
            if(countArray.toString().split('')[0]>1){
                const val=numbValue.find((e)=>e.number==countArray.toString().split('')[0]+"0");
                const val1=numbValue.find((e)=>e.number==countArray.toString().split('')[1]);
               if(wordRep!='hundred'){
                if(countArray.toString().split('')[1]!=0){
                    console.log(val.value+val1.value+" "+wordRep)
                }else{
                    console.log(val.value+" "+wordRep);
                }
               }else{
                if(countArray.toString().split('')[1]!=0){
                    console.log(val.value+val1.value+" "+wordRep)
                }else{
                    console.log(val.value+" "+wordRep);
                }
               }
                
                
            }else{
                const val=numbValue.find((e)=>e.number==countArray.toString().split('')[0]+countArray.toString().split('')[1]);   
                if(wordRep!='hundred'){
                    console.log(val.value+" "+wordRep)
                }else{
                    console.log(val.value)
                }
            }
        }
            break;
        case 3:if(countArray.toString().split('')[0]==0){
                // do nothing
               
            }
            if(countArray.toString().split('')[1]==0){
                // do nothing
               
            } 
            if (countArray.toString().split('')[2]==0){
                // if wordrep is 1 return unit else return wordrep word value;
              
            }
            if(countArray.toString().split('')[0]!=0){
                const val=numbValue.find((e)=>e.number==countArray.toString().split('')[0]);
                console.log(val.value," "+"hundred and");
            }else{
                console.log(val.value," "+wordRep);
            }
            if (countArray.toString().split('')[1]!=0){
                if(countArray.toString().split('')[1]>1){
                    const val=numbValue.find((e)=>e.number==countArray.toString().split('')[1]+"0");
                    const val1=numbValue.find((e)=>e.number==countArray.toString().split('')[2]);
                   if(wordRep!="hundred"){
                    if(countArray.toString().split('')[2]!=0){
                        console.log("and "+val.value+val1.value+ " "+wordRep)
                    }else{
                        console.log("and "+val.value+" "+wordRep)
                    }
                   }else{
                    if(countArray.toString().split('')[2]!=0){
                        console.log("and "+val.value+val1.value)
                    }else{
                        console.log("and "+val.value)
                    }
                   }
                    
                    
                }else{
                    const val=numbValue.find((e)=>e.number==countArray.toString().split('')[1]+countArray.toString().split('')[2]);   
                    if(wordRep!='hundred'){
                        console.log("and "+val.value+" "+wordRep)
                    }else{
                        console.log("and "+val.value)
                    }
                }

            }
              
                break;
                default:
                    console.log('stop looking for truble');
                    break;
  } 
}

threeDigitCount(12,"hundred");
checkCount(20263222222223);
const readWords=()=>{
    Object.keys(word).reverse().map((e)=>{
        //console.log(e,"danny")
       // console.log(word[e].join('').toString());
        threeDigitCount(word[e].join('').toString(),e);
    })
}
readWords();









// function number2words(n){
//     if (n < 20) return num[n];
//     var digit = n%10;
//     if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
//     if (n < 1000) return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " and " + number2words(n%100));
//     return number2words(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + number2words(n%1000): "");
// }