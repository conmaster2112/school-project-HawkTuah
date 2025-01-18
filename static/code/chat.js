import { AUTHENTICATION, encodeAccountInfo, getAccountEmailText } from "./auth.js";
import { delay, onButton, } from "./utils.js";

class Message {
    constructor(message, sender) {
        this.message = message;
        this.sender = sender;
    }
    build() {
        const base = Message.newDiv();
        base.textContent = this.message;
        return base;
    }
    static newDiv() {
        const div = document.createElement("div");
        div.className = "message-div";
        return div;
    }
}
class MessageContainer {
    /**
     * @param {HTMLDivElement} messageDiv 
     */
    constructor(messageDiv, accountId) {
        this.div = messageDiv;
        this.id = "messages-" + accountId;
        /**@type {Message[]} */
        this.messages = JSON.parse(localStorage.getItem(this.id) ?? "[]");
        this.load();
    }
    async load() {
        for (const m of this.messages) {
            Object.setPrototypeOf(m, Message.prototype);
            this.sendRaw(m.build());
            await delay(1);
            this.scrollToEnd("instant");
        }
    }
    /**
     * 
     * @param {Message} message 
     */
    sendMessage(message) {
        const el = message.build();
        this.messages.push(message);
        this.sendRaw(el);
        this.save();
        this.scrollToEnd("smooth");
    }
    sendRaw(el) { this.div.appendChild(el); }
    save() { localStorage.setItem(this.id, JSON.stringify(this.messages)); }
    scrollToEnd(behavior) {
        this.div.parentElement.scrollTo({
            top: this.div.parentElement.scrollHeight,
            behavior
        });
    }
}


let email;
let account;
try {
    email = getAccountEmailText();
    if(!email) location.href = "/pages/login";
    account = AUTHENTICATION.getAccount(email);
    console.log(account);
    if(!account) location.href = "/pages/login";
} catch (error) {
    location.href = "/pages/login";
}

const mInput = document.getElementById('message-input');
const fInput = document.getElementById('file-input');
const messagesDiv = document.getElementById('messages-div');
const messageContainer = new MessageContainer(messagesDiv, encodeAccountInfo(email));
const pName = document.getElementById("profile-name");
pName.textContent = account.name;

mInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') trySend(event.target);
});
onButton("button-send", () => trySend(mInput));
onButton("button-open-file", () => fInput.click());
fInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        console.log(file);
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = file.name;
        img.style.maxHeight = '30vh'; // Ensures the image fits within the container
        messagesDiv.appendChild(img);



        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = e=>{
            console.log(reader.result);
        };
    }
});


function trySend(target) {
    const messageText = target.value;
    if ((messageText?.length ?? 0) <= 0) return;

    const message = new Message(messageText, "ConMaster");
    target.value = "";
    messageContainer.sendMessage(message);
}