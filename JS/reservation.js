function nameValidation(){
    var inputName = document.getElementById("name").value;
    var invalidtext_name = document.getElementById("invalidtext_name");
    if(inputName == ""){
        invalidtext_name.innerHTML = "Please Enter your Name";
    }else{
        invalidtext_name.innerHTML = "";
    }
}

function phoneNumberValidation(){
    var inputNumber = document.getElementById("number").value;
    var invalidtext_number = document.getElementById("invalidtext_number");
    if(inputNumber == ""){
        invalidtext_number.innerHTML = "Please Enter your Phone Number";
    }else if(isNaN(inputNumber)){
        invalidtext_number.innerHTML = "Please enter numbers";
    }else{
        invalidtext_number.innerHTML = "";
    }
}

function seatNumberValidation(){
    var inputSeat = document.getElementById("seat").value;
    var invalidtext_seat = document.getElementById("invalidtext_seat");
    if(inputSeat == ""){
        invalidtext_seat.innerHTML = "Please Enter the Number of Seats";
    }else if(isNaN(inputSeat)){
        invalidtext_seat.innerHTML = "You can only enter numbers";
    }else{
        invalidtext_seat.innerHTML = "";
    }
}

function codeValidation(){
    var inputCode = document.getElementById("code").value;
    var invalidtext_code = document.getElementById("invalidtext_code");
    if(inputCode.length != 6 && inputCode.length != 0){
        invalidtext_code.innerHTML = "Coupon Code Must be 6 Alphanumeric Characters";
    }else{
        invalidtext_code.innerHTML = "";
    }
}

function validateForm(){
    let name = document.forms['reservationForm']['name'].value;
    let number = document.forms['reservationForm']['number'].value;
    let seat = document.forms['reservationForm']['seat'].value;
    let datetime = document.forms['reservationForm']['datetime'].value;
    let chosenDate = new Date(datetime);
    let newDate = new Date();
    let code = document.forms['reservationForm']['code'].value;
    let valid = true;

    if(name.length == 0){
        document.getElementById('invalidtext_name').innerHTML='Please Enter your Name!';
        valid = false;
    }else if(name.length < 3){
        document.getElementById('invalidtext_name').innerHTML='Name is too short!';
        valid = false;
    }

    if(number.length == 0){
        document.getElementById('invalidtext_number').innerHTML='Please Enter your Phone Number!';
        valid = false;
    }else if(isNaN(number)){
        document.getElementById('invalidtext_number').innerHTML='Please Enter Numbers!';
        valid = false;
    }

    if(seat.length == 0 || seat == 0){
        document.getElementById('invalidtext_seat').innerHTML='Please Enter the Number of Seats!'
        valid = false;
    }else if(isNaN(seat)){
        document.getElementById('invalidtext_seat').innerHTML='Please Enter Numbers!';
        valid = false;
    }

    if(chosenDate < newDate){
        document.getElementById('invalidtext_datetime').innerHTML='Please reserve within the next datetime';
        valid = false;
    }else{
        document.getElementById('invalidtext_datetime').innerHTML='';
    }

    if(code.length != 0 && code.length != 6){
        document.getElementById('invalidtext_code').innerHTML='Code must be 6 alphanumeric characters long';
        valid = false;
    }
    
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('seat').value = '';
    document.getElementById('datetime').value = '';
    document.getElementById('code').value = '';
    
    return valid;
}