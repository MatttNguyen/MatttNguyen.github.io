async function printThing() {
    const inp = await fetch("wordlist.txt");
    var txt = await inp.text();
    var txt = txt.split("\n");
    var line = txt[Math.floor(Math.random() * txt.length)];
    var thing = document.getElementById("output")
    thing.innerHTML = line + "<br>" + thing.innerHTML
}