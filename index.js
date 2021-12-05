let text = prompt("What is your name");
if (text == "Marvelous Martins-Abel1") {
    document.getElementById("text").innerHTML = `Welcome my master and my creator`;
} else if  (text == "Gloria") {
    document.getElementById("text").innerHTML = `Welcome mom`;
}
 else if (text == "Jocelyn" || text == "Jasmine") {
    document.getElementById("text").innerHTML = `Welcome my masters Sister`;
}
else if (text == "I am an idiot" || text == "I am a fool") {
    document.getElementById("text").innerHTML = `Your an idiot to think that will work on me`;
}
else if (!(isFinite(text))) {
    document.getElementById("text").innerHTML = `Hello ${text}`;
} else {
    document.getElementById("text").innerHTML = "You didn't type your name please reload and type your name "
}