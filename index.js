let text = prompt("What is your name");
if (text == "1Marvelous Martins-Abel") {
    document.getElementById("text").innerHTML = `Welcome my master and my creator`;
}
else if (text == "I am an idiot" || text == "") {
    document.getElementById("text").innerHTML = `Your an idiot to think that will work on me`;
}
else if (!(isFinite(text))) {
    document.getElementById("text").innerHTML = `Hello ${text}`;
} else {
    document.getElementById("text").innerHTML = "You didn't type your name please reload and type your name "
}