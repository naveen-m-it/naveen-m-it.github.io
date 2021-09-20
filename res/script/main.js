function pass(){
    var passcode = document.getElementById("password").value;
    if (passcode=="n9751574651"){
        window.location.href = "/res/html/sample.html";
        window.alert("success!");
    }
    else{
        document.getElementById("alert").innerHTML = "Who are You?"
        Email.send({
            Host: "smtp.gmail.com",
            Username : "www.naveenmnka9655@gmail.com",
            Password : "n9751574651",
            To : 'www.naveenmnka15@gmail.com',
            From : "Naveen's Portal",
            Subject : "Who one tried to login",
            Body : "Alert!",
            }).then(
                message => alert("mail sent successfully")
            );
    }
}