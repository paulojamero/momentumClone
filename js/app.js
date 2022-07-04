///////////DOM SELECTORS

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const userName = document.getElementById('userName');
const focus = document.getElementById('focus');
const ampm = document.getElementById('ampm');


const showAmPm = true;

//////////FUNCTIONS

//Time function

function showTime(){
   // let today = new Date(2022, 07, 04, 19, 00, 00, 00);
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();


    //SET the AM or PM
    
    const amPm = hour >= 12 ? 'PM' : 'AM';
   // ampm.innerHTML = amPm;
    
    //Convert to 12hr Format
    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span style='font-size: 2rem'>${showAmPm ? amPm : ''}</span>`;
    amPm.style
    
    // WITH SECONDS 
    // time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}
//ADD ZEROs to time if less than 10 seconds
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//SETUP Background and Greetings based on current time

function setBg(){
    ///let today = new Date(2022, 07, 04, 19, 00, 00, 00);
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        document.body.style.backgroundImage = "url('../assets/bg/morning.jpg')";
        greeting.textContent = "Good morning, ";
    }
    else if(hour < 18){
        document.body.style.backgroundImage = "url('assets/bg/afternoon.jpg')";
        greeting.textContent = "Good Afternoon, ";
    } else {
        document.body.style.backgroundImage = "url('assets/bg/night.jpg')";
        greeting.textContent = "Good Evening, ";
    }
}

//SET NAME
function getName(){
    if(localStorage.getItem('userName') == null || localStorage.getItem('userName') == ""){
        userName.textContent = "[name here]";
        localStorage.removeItem('userName');

    } else {
        userName.textContent = localStorage.getItem('userName');
    }
}

function setName(e){
    if(e.type == 'click'){
        userName.textContent = "";
    }
    if(e.type == 'keypress'){
        //to make sure that ENTER key was pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('userName', e.target.innerText);
            userName.blur();
        } else {
            localStorage.setItem('userName', e.target.innerText);
        
            
        }
    }
}


//FOR FOCUS!
//Get Focus Text
function getFocus(){
    if(localStorage.getItem('focus') == null || localStorage.getItem('focus') === ""){
        localStorage.removeItem('focus');
        focus.textContent = "[Write it here]";
        
        
        
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e){
    if(e.type == 'click'){
        focus.textContent = "";
    }
    if(e.type == 'keypress'){
        //TO SAVE USING ENTER KEY
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        } else {
            localStorage.setItem('focus', e.target.innerText);
            
        }
    }


}



//ADD EVENT LISTENER
//Name
userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);
userName.addEventListener('click', setName);
//Focus
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', setFocus);


//RUNNING THE FUNCTION

showTime();
setBg();
getName();
//setName();
getFocus();
//setFocus();
