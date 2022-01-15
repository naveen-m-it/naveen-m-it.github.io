function call() {
    var name = document.getElementById('player-name').value;
    if (name.length < 3){
        document.getElementById('alert').innerHTML = "Please enter above 3 characters";
        return;
    }
    var now = new Date();
    now.setTime(now.getTime()+1*3600*1000);
    document.cookie = "name="+name+";expires="+now.toUTCString()+";";
    window.location.href = "./pages/stages.html";
}
document.getElementById('player-name').addEventListener("keyup",function(e){
    if (e.key==='enter'){
        document.getElementById('start-btn');
    }
});