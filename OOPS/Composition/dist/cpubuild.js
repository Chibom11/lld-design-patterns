"use strict";
class RAM {
    constructor(size) {
        this.size = size;
    }
    getSize() {
        return this.size;
    }
}
class CPU {
    constructor(model, cores) {
        this.model = model;
        this.cores = cores;
    }
    getModel() {
        return this.model;
    }
    getCores() {
        return this.cores;
    }
}
class HardDrive {
    constructor(capacityGB) {
        this.capacityGB = capacityGB;
    }
    getCapacity() {
        return this.capacityGB;
    }
}
class Computer {
    constructor(name) {
        this.name = name;
    }
    addConfigs(ramsize, model, core, hdcap) {
        const ram = new RAM(ramsize);
        this.ramsize = ram;
        const cpumodel = new CPU(model, core);
        this.cpu = cpumodel;
        const hc = new HardDrive(hdcap);
        this.hdcapacity = hc;
    }
    displayConfigs() {
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
const c1 = new Computer("Dell");
c1.addConfigs(16, "9th Gen", 4, 512);
c1.displayConfigs();
