class Desktop {

    motherboard?: string;
    processor?: string;
    memory?: string;
    storage?: string;
    graphicsCard?: string;

    display() {
        console.log("Desktop Specs");
        console.log("Motherboard:", this.motherboard);
        console.log("Processor:", this.processor);
        console.log("Memory:", this.memory);
        console.log("Storage:", this.storage);
        console.log("Graphics:", this.graphicsCard);
    }
}


abstract class DesktopBuilder {

    protected desktop: Desktop;

    constructor() {
        this.desktop = new Desktop();
    }

    abstract buildMotherboard(): DesktopBuilder;

    abstract buildProcessor(): DesktopBuilder;

    abstract buildMemory(): DesktopBuilder;

    abstract buildStorage(): DesktopBuilder;

    abstract buildGraphicsCard(): DesktopBuilder;

    build(): Desktop {
        return this.desktop;
    }

}

class DellDesktopBuilder extends DesktopBuilder {

    buildMotherboard(): DesktopBuilder {
        this.desktop.motherboard = "Dell Motherboard";
        return this;
    }

    buildProcessor(): DesktopBuilder {
        this.desktop.processor = "Dell i9";
        return this;
    }

    buildMemory(): DesktopBuilder {
        this.desktop.memory = "32GB DDR5";
        return this;
    }

    buildStorage(): DesktopBuilder {
        this.desktop.storage = "2TB SSD";
        return this;
    }

    buildGraphicsCard(): DesktopBuilder {
        this.desktop.graphicsCard = "RTX 5090";
        return this;
    }

}

class HpDesktopBuilder extends DesktopBuilder {

    buildMotherboard(): DesktopBuilder {
        this.desktop.motherboard = "HP Motherboard";
        return this;
    }

    buildProcessor(): DesktopBuilder {
        this.desktop.processor = "Intel i5";
        return this;
    }

    buildMemory(): DesktopBuilder {
        this.desktop.memory = "16GB DDR4";
        return this;
    }

    buildStorage(): DesktopBuilder {
        this.desktop.storage = "512GB SSD";
        return this;
    }

    buildGraphicsCard(): DesktopBuilder {
        this.desktop.graphicsCard = "Integrated Graphics";
        return this;
    }

}

class DesktopDirector {

    buildDesktop(builder: DesktopBuilder): Desktop {

        return builder
            .buildMotherboard()
            .buildProcessor()
            .buildMemory()
            .buildStorage()
            .buildGraphicsCard()
            .build();

    }

}

const director = new DesktopDirector();

const dellBuilder = new DellDesktopBuilder();

const dellDesktop = director.buildDesktop(dellBuilder);

dellDesktop.display();

console.log("----------------");

const hpBuilder = new HpDesktopBuilder();

const hpDesktop = director.buildDesktop(hpBuilder);

hpDesktop.display();


