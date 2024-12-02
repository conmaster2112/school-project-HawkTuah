document.addEventListener('DOMContentLoaded', (event) => {
    const themeSwitcher = document.getElementById("theme-switcher");
    const body = document.body;

    themeSwitcher.addEventListener("click", ()=>{
        if(body.classList.contains("dark")) body.classList.remove("dark");
        else body.classList.add("dark");
        console.log("Changed");
    });

});