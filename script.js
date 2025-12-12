let captchaChecked = false; //we made a flag variable for fuction



function beforesubmit(event){
    if(captchaChecked){
         let outputdate=document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate);  //this date is in string form we have to convert it into locale(en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value=formattedDate;
    }else{
        alert("Please check the captcha");
        event.preventDefault();
    }
    
}

 function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 


function captchasunccess(){
    captchaChecked=true;
}
