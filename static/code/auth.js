export class Account {
    constructor(email, name, password){
        this.email = email;
        this.name = name;
        this.password = password;
    }
}
export class Authentication{
    constructor(id){
        this.id = id;
    }
    registry(email, name, password){
        const account = new Account(email, name, password);
        localStorage[this.getFullId(email)] = JSON.stringify(account);
        return account;
    }
    getFullId(email){return `${this.id}-${email}-${email.length}`}
    isEmailRegistered(email){ return this.getFullId(email) in localStorage; }
    getAccount(email){
        const data = localStorage[this.getFullId(email)];
        if(!data) return null;
        return Object.setPrototypeOf(JSON.parse(data),Account.prototype);
    }
}
export const AUTHENTICATION = new Authentication("__DEFAULT__");
export function encodeAccountInfo(email){return encodeURI(btoa(email));}
export function decodeAccountInfo(data){return atob(decodeURI(data));}
export function getAccountEmailText(){
    const data = new URL(location.href).searchParams.get("account");
    if(!data) return null;
    return decodeAccountInfo(data);
}
export function createUrlWith(email){
    const url = new URL(location.origin);
    url.searchParams.set("account", encodeAccountInfo(email));
    return url;
}