window.onload = function (){
    let textarea = document.getElementById("text");  
    let showedMsg = document.getElementById("message"); 

    document.getElementById("response-message").style.display = "none";
    checkInput();

    document.getElementById("encrypt").onclick = (e) => {
        e.preventDefault();
        const textEncrypted = encrypt(textarea.value);
        showedMsg.value = textEncrypted;
        textarea.value = "";
        show();
    }

    document.getElementById("decrypt").onclick = (e) => {
        e.preventDefault();
        const textDecrypted = decrypt(textarea.value);
        showedMsg.value = textDecrypted;
        textarea.value = "";
        show();
    }

    document.getElementById("copy-btn").onclick = (e) => {
        e.preventDefault();
        showedMsg.select();
        navigator.clipboard.writeText(showedMsg.value);
        showedMsg.value = "";
    }
    
    function isValid(msg){
        return /^[a-z\s]+$/g.test(msg);
    }
    
    function encrypt (msgEncrypted){ 
        if(isValid(msgEncrypted)){
            msgEncrypted = textarea.value
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi,"ufat");            
        } else {
            alert("Ups!, intenta nuevamente sin mayúsculas ni caracteres especiales");
        }
        return(msgEncrypted);
    }
    
    function decrypt (msgDecrypted){ 
        msgDecrypted = textarea.value
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");
        
        return(msgDecrypted);
    }



    function show(){
        document.getElementById("no-message").style.display = "none";
        document.getElementById("response-message").style.display = "block";
    }

    function checkInput(){
        var textInput = document.querySelector("#text");
        textInput.addEventListener("keypress", function (e) {
            var keyCode = (e.keyCode ? e.keyCode : e.which);

            if(keyCode > 47 && keyCode < 65) {
                e.preventDefault();
            }
        })
    }
    
}