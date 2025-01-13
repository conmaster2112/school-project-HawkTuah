import { createMinimal, onButton } from "./utils.js";

let oldErro = null;
let i = 0;
onButton("register", (b)=>{
    oldErro?.remove();
    const p = createMinimal("Error code be like: " + i++);
    p.classList.add("error");
    oldErro=p;
    b.after(p);
});