class RAM{
    private size:number;

    constructor(size:number){
        this.size=size
    }
    getSize():number{
        return this.size;
    }
}

class CPU {
    private model: string;
    private cores: number;

    constructor(model: string, cores: number) {
        this.model = model;
        this.cores = cores;
    }

    getModel(): string {
       return this.model
    }

    getCores():number{
        return this.cores
    }
}
class HardDrive {
    private capacityGB: number;

    constructor(capacityGB: number) {
        this.capacityGB = capacityGB;
    }

    getCapacity():number {
        return this.capacityGB
      
    }
}

class Computer{
    private name:string
    private cpu?: CPU;
    private ramsize?: RAM;
    private hdcapacity?: HardDrive;

    constructor(name: string) {
        this.name = name;

    }

    addConfigs(ramsize:number,model:string,core:number,hdcap:number){
        const ram=new RAM(ramsize);
        this.ramsize=ram;
        const cpumodel=new CPU(model,core);
        this.cpu=cpumodel;
        const hc=new HardDrive(hdcap)
        this.hdcapacity=hc;

    }

   displayConfigs(): void {

        if (!this.ramsize || !this.cpu || !this.hdcapacity) {
            console.log("Computer configuration is incomplete.");
            return;
        }

        console.log("Computer:", this.name);
        console.log("RAM:", this.ramsize.getSize(), "GB");
        console.log("CPU:", this.cpu.getModel(), "-", this.cpu.getCores(), "cores");
        console.log("Hard Drive:", this.hdcapacity.getCapacity(), "GB");
    }
}

const c1=new Computer("Dell");

c1.addConfigs(16,"9th Gen",4,512)
c1.displayConfigs()