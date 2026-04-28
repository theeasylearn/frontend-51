//setCookie function is used to create/change/delete cookies 
// to create Cookie name which expire after 1 year -> setCookie('name','Jay',365)
// to update Cookie name which expire after 1 year of updating -> setCookie('name','hitesh',365)
// to delete Cookie name  -> setCookie('name','',-1);
function setCookie(name, value = '', days = 100) 
{
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

//getCookie function is used to get value of specific cookie by name
// to get cookie name getCookie('name') 
function getCookie(name) {
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
}
