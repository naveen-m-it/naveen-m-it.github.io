function load(file) {
    document.getElementById('main-view').innerHTML = '<object type="text/html" data="index.html"></object>';
}
function call_name(){
    var all_cookies = document.cookie;
    var cookie_array = all_cookies.split(";");
    var l = cookie_array.length;
    var ans = cookie_array[l-1];
    var name = ans.split("=")[1];
    document.getElementById('name').innerHTML = name;
}
window.onload = call_name;