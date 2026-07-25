"use strict";
class Singleton {
    constructor() {
        console.log("Singleton Created");
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    show() {
        console.log(this);
    }
}
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
const s3 = Singleton.getInstance();
s1.show();
s2.show();
s3.show();
console.log(s1 === s2);
console.log(s2 === s3);
