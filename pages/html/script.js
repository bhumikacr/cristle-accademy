function run(){
    let htmlcode = document.getElementById("html-code");
    let output = document.getElementById("output");


    output.contentDocument.body.innerHTML = htmlcode.value;
}