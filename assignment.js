// (Task:1) unit convert feet to mile 

function feetToMile(feet){
    if(feet<0){
        return "Invalid Input";
    }
    else{
    const mile= feet * 0.000189393939;
        return mile;
    }
}

let result = feetToMile(-2);
console.log(result);



// (Task:2) Calculate the total number of woods 

function woodCalculator(chair, table, bed){
    if (chair<0 || table<0 || bed<0){
        return "Elements cannot be negative. Please Enter valid Inputs !";
    }
    else{
        const total_wood= (chair + (table*3) + (bed*5));
        return total_wood;
    }
}
let result = woodCalculator(1,-1,1);
console.log(result);



// (Task:3) Calculate total bricks of a building

function brickCalculator(n){
    if(n<=0){
        return "Please enter a valid Input !";
    }
    else{
        if(n>=1 && n<=10){
            total_brick= n*150000;
            return total_brick;
        }
        else if(n>=11 && n<=20){
            let extra = n-10;
            total_brick= ((extra*120000) + 150000);
            return total_brick;
        }
        else if(n>20){
            let extra = n-20;
            total_brick= ((extra*10000) + 120000 + 150000);
            return total_brick;
        }
    }
}
let result = brickCalculator(30);
console.log(result);



// (Task:4) Finding the smallest name among my friend's name

function tinyFriends(names){
  var smallestName = names[0];
  

    for(let i=0;i<names.length ; i++){
      let currentName= names[i];
      if(currentName.length==0 || currentName.charAt(0)==' ' || ((currentName.charAt(0)>=0) && (currentName.charAt(0)<=9))){
        return "Please Enter A valid Name List To Compare !!";   //if start with space or digit
      }
      else if((currentName.length<smallestName.length)){
        smallestName=currentName;
      } 

  }
  return smallestName;
  }
  

let result = tinyFriends([' ppppp','Abb','Aaaaaaa']);
 console.log(result);