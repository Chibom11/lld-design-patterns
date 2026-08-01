"use strict";
class Professor {
    constructor(name) {
        this.name = name;
    }
    getProf() {
        return this.name;
    }
}
class Departments {
    constructor(dept, prof) {
        this.dept = dept;
        this.prof = prof;
    }
    printprofs() {
        console.log(`For dept ${this.dept}`);
        for (const p of this.prof) {
            console.log(`Professor ${p.getProf()}`);
        }
    }
}
const prof1 = new Professor("Singh");
const prof2 = new Professor("Malik");
const profArr = [prof1, prof2];
const dept1 = new Departments("IT", profArr);
dept1.printprofs();
