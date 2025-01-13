import { onButton } from "./utils";

let lastMessage = null;
onButton("button-login",  (b)=>{
    lastMessage?.remove();
    const password = document.getElementById("input-password");
    const name = document.getElementById("input-name");
    let msg = null;
    for(const e of [name, password]){
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
    
    location.href = "./chat";
});