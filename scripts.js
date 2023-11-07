/* Add your JavaScript to this file */

window.onload = function(){
    let subscribeBtn = document.querySelectorAll(".btn")[1];
        
    subscribeBtn.addEventListener('click',
    function (e){
        e.preventDefault();
    
        var email = document.getElementById("email").value;
    
        if(email != ""){
            document.getElementsByClassName("message")[0].innerHTML = "Thank You! Your email address " +email+ " has been added to our mailing list";
        }else{
            document.getElementsByClassName("message")[0].innerHTML = "Please enter an email address"
        }
    });
}