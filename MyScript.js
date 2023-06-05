const Clickme=()=>{

    const uname=document.getElementById("username");
    const pword=document.getElementById("password");

    const usern = "arist";
    const pass = "arist123";

    if(uname.value==usern){
        if(pword.value==pass){
           window.alert("Your are logged in as " + uname.value);
           window.open("https://codetraingh.com");
        }else{
            window.alert("incorrect username or password!")
        }

      
    }else{
        window.alert("incorrect username or password!")
    }


}

