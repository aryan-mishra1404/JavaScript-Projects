


// const password =""
const upper_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_set = 'abcdefghijklmnopqurstuvwxyz';
const number_set = '1234567890';
const symbol_set = '!@#$%^&*(){}?/';
// console.log(symbol_set);
const slider = document.querySelector('.slider');
const value = document.getElementById('value');

const bg = slider.style.background.value ;
console.log((bg))

const pasBox = document.getElementById('pass-box');
const totalChar = document.getElementById("total-char");
console.log(totalChar)
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');

value.innerHTML = slider.value;
totalChar.value = slider.value;

const getRandom = (dataset)=> {
  // return 1;
  return dataset[Math.floor(Math.random()*dataset.length)];
}

const getRandomData = function(dataset){

    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePassword = function(password=""){
    if(upperInput.checked){
        password += getRandomData(upper_set);
    }
    if(lowerInput.checked){
        password += getRandomData(lower_set);
    }
    if(numberInput.checked){
        password += getRandomData(number_set);
    }
    if(symbolInput.checked){
        password += getRandomData(symbol_set);
    }
    
    if(password.length< totalChar.value){
        return generatePassword(password);
    }
    else{
       return trimPassword(password,totalChar.value);
    }
    
}
var pass = "";

document.getElementById("btn").addEventListener('click',()=>{
    pass = generatePassword();
    pasBox.innerHTML = pass
    // console.log(pass+" => "+ pass.length);
})
slider.oninput = function(){
    totalChar.value= this.value;
    value.innerHTML = this.value;
    pass = generatePassword();
    pasBox.innerHTML = pass
}

const trimPassword = function(password, total){
    if(password.length > total){
        // console.log(password +", "+ password.length);
        return password.substring(0,total);
    }
    else{
        return password;
    }
}