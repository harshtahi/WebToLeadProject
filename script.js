function beforesubmit(){
    let outputdate=document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate);  //this date is in string form we have to convert it into locale(en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value=formattedDate;
}