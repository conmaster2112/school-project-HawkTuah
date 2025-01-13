import { createMinimal, onButton, warnElement } from "./utils.js";

let lastMessage = null;
onButton("button-register", (b)=>{
    lastMessage?.remove();
    const password = document.getElementById("input-password");
    const confirm = document.getElementById("input-confirm");
    const name = document.getElementById("input-name");
    const email = document.getElementById("input-email");
    let msg = null;
    for(const e of [name, email,password, confirm]){
        if(!e.value){
            warnElement(e);
            msg = "Inputs can't be empty!";
            continue;
        }
        if(e.value.length < 4){
            warnElement(e);
            msg = "Required at least 5 chars";
            continue;
        }
    }
    if(msg){
        const p = createMinimal(msg, 5_000);
        p.classList.add("error");
        b.after(p);
        lastMessage = p;
        return;
    }
    if(password.value !== confirm.value){
        warnElement(password);
        warnElement(confirm);
        const p = createMinimal("Passwords doesn't match!", 5_000);
        p.classList.add("error");
        b.after(p);
        lastMessage = p;
        return;
    }
    location.href = "./login";
});