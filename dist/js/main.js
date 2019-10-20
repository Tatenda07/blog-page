//sroll back to top button
buttonScroll = document.getElementById("myBtn")
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        buttonScroll.style.display = "block";
    }else{
        buttonScroll.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//footer date
let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;

//submit button (HOME PAGE)
function appendMailTo(){
    //let name = document.getElementById("enteredName").value;
    //let email = document.getElementById("emailAddress").value;
    let message = document.getElementById("mailMessage").value;
    let subject = document.getElementById("mailSubject").value;
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);

    let mailToAttr = document.getElementById("sendMail");
    //mailToAttr.setAttribute("href", "mailto:joelsonmvundura@gmail.com?name="+name+"&email="+email+"&subject="+subject+"&body="+message);
    mailToAttr.setAttribute("href", "mailto:joelsonmvundura@gmail.com?subject="+subject+"&body="+message);
}