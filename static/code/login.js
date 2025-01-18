import { AUTHENTICATION, createUrlWith, getAccountEmailText } from "./auth.js";
import { createMinimal, onButton, warnElement } from "./utils.js";

let lastMessage = null;
{
    let email = getAccountEmailText();
    if(email){
        document.getElementById("input-email").value = email;
    }
}
onButton("button-login", async (b)=>{
    lastMessage?.remove();
    const password = document.getElementById("input-password");
    const email = document.getElementById("input-email");
    let msg = null;
    for(const e of [email, password]){
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

    const m = email.value;
    const account = AUTHENTICATION.getAccount(m);
    if(!account){
        const p = createMinimal("No account found with this email", 5_000);
        p.classList.add("error");
        b.after(p);
        lastMessage = p;
        return;
    }

    if(account.password !== password.value){
        const p = createMinimal("Password or email is not valid", 5_000);
        p.classList.add("error");
        b.after(p);
        lastMessage = p;
        return;
    }

    const url = createUrlWith(m);
    url.pathname = "pages/chat";
    console.log(url.href);
    location = url;
});