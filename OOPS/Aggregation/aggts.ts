// Pay attention to three things in this code:

// Department groups Professor objects, but it does not create them. The professors are created externally and passed into the department's constructor.
// The professors exist before the department is created and survive after the department is deleted. Their lifecycle is independent.
// The same professor objects could be passed to another Department constructor. A professor can belong to multiple departments.
// If you delete the csDept object, the professors still exist in memory and could be reassigned to another department. That's aggregation in action.

class Professor{
    private name:string

    constructor(name:string){
        this.name=name

    }

    getProf():string{
        return this.name
    }
}

class Departments{
    private dept:string
    private prof:Professor[]

    constructor(dept:string,prof:Professor[]){
        this.dept=dept;
        this.prof=prof;
    }

   printprofs(): void {
    console.log(`For dept ${this.dept}`);

    for (const p of this.prof) {
        console.log(`Professor ${p.getProf()}`);
    }
}
}

const prof1=new Professor("Singh")
const prof2=new Professor("Malik")

const profArr:Professor[]=[prof1,prof2];

const dept1=new Departments("IT",profArr)

dept1.printprofs()
