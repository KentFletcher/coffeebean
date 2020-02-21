
    


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


// function name(){
//     var intro = prompt("what is your name?";<enter name here>);
    
    
//     if howdy{ (confirm("Welcome + name + !")) 
// }
    
//     return howdy
// }

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


