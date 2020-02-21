
    

//working
function love(){
    var txt;
    var yeah = confirm("Do you love coffee?");
    if (yeah == true) {
    txt = "Great, we have the BEST beans!";
    } else {
    txt = "Oh Well, buy beans for someone you love!";
}
    return txt
}



// function is working
function name(){
    
    var intro = prompt("what is your name?", "<enter name here>");
    var howdy;
    
    if (intro === ''){
        howdy = "Welcome " + intro + "!";

    }else if(intro === '<enter name here>'){
        howdy = "bye"
   }
   else{
        howdy = "Hi " + intro + "!";
    }  

    return howdy;
}


// working
function greet(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening, great time for coffee!';
    } else if (hourNow >12) {
        greeting = 'Good afternoon, great time for coffee!';
    } else if (hourNow > 0){
        greeting = 'Good morning, great time for coffee!';
    }else{
        greeting = 'Great time for coffee!';
    }    

    return greeting;
}


// working
var coffee = function(){
    var order = prompt ('How many cups do you want?');
    var item = '<img src="coffeecup.png">';
    var total = '';

    while( order === '0' || isNaN(order)){

        order = prompt ('Please enter a number greater than 0!');
    }

    for(var i = 0; i < order; i++){
        total = total + item
    }
    return total;
}
