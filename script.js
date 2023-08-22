let tag = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "Im learning" + "<br>" + tag[0].innerHTML + "<br>" + tag[1].innerHTML;
let Firstelement = document.getElementById("parent");
let Secondelement = Firstelement.getElementsByTagName("p");
document.getElementById("child").innerHTML = Secondelement[1].innerHTML;