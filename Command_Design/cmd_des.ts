// ================= Command Interface =================

interface ActionListenerCommand {
    execute(): void;
}

// ================= Receiver =================

class TextDocument {

    open(): void {
        console.log("Document Opened");
    }

    save(): void {
        console.log("Document Saved");
    }

}

// ================= Concrete Command - Open =================

class ActionOpen implements ActionListenerCommand {

    constructor(private doc: TextDocument) {}

    execute(): void {
        this.doc.open();
    }

}

// ================= Concrete Command - Save =================

class ActionSave implements ActionListenerCommand {

    constructor(private doc: TextDocument) {}

    execute(): void {
        this.doc.save();
    }

}

// ================= Invoker =================

class MenuOptions {

    private commands: ActionListenerCommand[] = [];

    addCommand(command: ActionListenerCommand): void {
        this.commands.push(command);
    }

    executeCommands(): void {

        for (const command of this.commands) {
            command.execute();
        }

    }

}

// ================= Client =================

const doc = new TextDocument();

// Create Commands

const clickOpen = new ActionOpen(doc);

const clickSave = new ActionSave(doc);

// Invoker

const menu = new MenuOptions();

menu.addCommand(clickOpen);

menu.addCommand(clickSave);

// Execute Commands

menu.executeCommands();