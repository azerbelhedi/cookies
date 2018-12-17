
/*document.cookie = "name=; expires=Thu, 18 Dec 2013 12:00:00 UTC;" ;
document.cookie = "pass=; expires=Thu, 18 Dec 2013 12:00:00 UTC;" ;
document.cookie = "logState=0; expires=Thu, 18 Dec 2013 12:00:00 UTC;" ;

console.log(document.cookie == "") ;
*/

const login = () => {
	document.cookie = "name=azer" ;
	document.cookie = "pass=salem00" ;
	document.cookie = "logState=1" ;
	load() ;
}

const logout = () => {
	document.cookie = "name=; expires=Thu, 18 Dec 2013 12:00:00 UTC;" ;
	document.cookie = "pass=; expires=Thu, 18 Dec 2013 12:00:00 UTC;" ;
	document.cookie = "logState=0" ;
	load() ;
}

const load = () =>{
	console.log(document.cookie) ;
	var name = getCookie("name") ;
	var pass = getCookie("pass") ;
	var logState = getCookie("logState") ;
	if(logState){
		document.querySelector("#userName").innerHTML = name ;
	}
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
