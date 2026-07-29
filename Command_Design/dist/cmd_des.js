"use strict";
// ================= Command Interface =================
// ================= Receiver =================
class TextDocument {
    open() {
        console.log("Document Opened");
    }
    save() {
        console.log("Document Saved");
    }
}
// ================= Concrete Command - Open =================
class ActionOpen {
    constructor(doc) {
        this.doc = doc;
    }
    execute() {
        this.doc.open();
    }
}
// ================= Concrete Command - Save =================
class ActionSave {
    constructor(doc) {
        this.doc = doc;
    }
    execute() {
        this.doc.save();
    }
}
// ================= Invoker =================
class MenuOptions {
    constructor() {
        this.commands = [];
    }
    addCommand(command) {
        this.commands.push(command);
    }
    executeCommands() {
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
