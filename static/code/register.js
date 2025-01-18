import { AUTHENTICATION, createUrlWith } from "./auth.js";
import { createMinimal, onButton, warnElement } from "./utils.js";

const INPUTS = {
    "input-name":0,
    "input-email":1,
    "input-password":1,
    "input-confirm":1
}

let lastMessage = null;
onButton("button-register", (b)=>{
    lastMessage?.remove();
    const inputElements = Object.keys(INPUTS).map(e=>document.getElementById(e));

    let msg = null;
    for(const e of inputElements){
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

    const [name, email, password, confirm] = inputElements;
    const emailValue = email.value;
    console.log(emailValue, emailValue.match(/\g/));
    if(!emailValue.match(/\@/)){
        const p = createMinimal("Email must include '@'", 5_000);
        p.classList.add("error");
        b.after(p);
        lastMessage = p;
        warnElement(email);
        return;
    }
    if(AUTHENTICATION.isEmailRegistered(emailValue)){
        const p = createMinimal("This email already exists", 5_000);
        p.classList.add("error");
        b.after(p);
        lastMessage = p;
        warnElement(email);
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

    const account = AUTHENTICATION.registry(email.value, name.value, password.value);
    const url = createUrlWith(account.email);
    url.pathname = "pages/login";
    location = url;
});