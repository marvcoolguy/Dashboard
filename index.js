let text = prompt("What is your name");
if (text == "Marvelous Martins-Abel1") {
    document.getElementById("text").innerHTML = `Welcome my master and my creator`;
} else if  (text == "Gloria") {
    document.getElementById("text").innerHTML = `Welcome mom`;
}
 else if (text == "Jocelyn1") {
    document.getElementById("text").innerHTML = `Welcome my masters Sister`;
}
else if (text == "Jasmine1") {
    document.getElementById("text").innerHTML = `Jasmine your a very stupid girl`;
}
else if (!(isFinite(text))) {
    document.getElementById("text").innerHTML = `Hello ${text}`;
} else {
    document.getElementById("text").innerHTML = "You didn't type your name please reload and type your name "
}