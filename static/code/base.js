const theme = localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");
else document.body.classList.remove("dark");
localStorage.setItem("theme", theme === "dark"?"light":"dark");
// JavaScript to toggle the password visibility
document.addEventListener('DOMContentLoaded', function () {
    for (const el of document.getElementsByClassName("password-toggle")) ShowHideButton(el);
});



function ShowHideButton(button) {
    let state = true;
    const classes = [...button.classList];
    let inputs = [];
    for(const clname of classes){
        if(clname.startsWith("input:")){
            let e = document.getElementById(clname.substring("input:".length));
            if(e) inputs.push(e);
        }
    }
    button.addEventListener('click', function () {
        const type = state ? 'text' : 'password';
        state = !state;
        for(const f of inputs) f.setAttribute('type', type);
        if (type === "password") button.textContent = "👓";
        else button.textContent = "👀";
    });
} 