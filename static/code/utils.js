/**
 * 
 * @param {string} id 
 * @param {(button: HTMLButtonElement)=>void} callback 
 */
export function onButton(id, callback){
    const button = document.getElementById(id);
    button?.addEventListener("click", ()=>callback(button));
}
/**
 * 
 * @param {string} text
 * @param {number} timeout
 */
export function createMinimal(text, timeout){
    const h = document.createElement("p");
    h.textContent = text;
    h.className = "minimal";
    setTimeout(()=>h.remove(), timeout??300_000);
    return h;
};
export function warnElement(e, timeout){
    e.style.borderColor = "#F003";
    setTimeout(()=>(e.style.borderColor = ""), timeout??2000);
}
export function delay(timeout){return new Promise((r)=>setTimeout(r, timeout),);}