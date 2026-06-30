const copy_btn = document.getElementById("copy");
const generate = document.getElementById("generate");
const pass = document.getElementById("text");

copy_btn.addEventListener("click",copied);
generate.addEventListener("click",generated);

async function copied(){
    if(pass.innerText==="...") return;

    //let copied_pass = pass.innerText;
    await navigator.clipboard.writeText(pass.textContent);
    alert("copied the password generated")
}
// xgtuyRjjsR0ZWrM1ZdvCAbokrm4wYnaqoYUzAN87
async function generated() {

    const url = "https://api.api-ninjas.com/v1/passwordgenerator?length=16";
    const resp = await fetch(url,{
        
        headers : {
            "X-Api-Key":"xgtuyRjjsR0ZWrM1ZdvCAbokrm4wYnaqoYUzAN87"
        }
    })

    const obj = await resp.json();
    pass.innerText = obj.random_password;
}