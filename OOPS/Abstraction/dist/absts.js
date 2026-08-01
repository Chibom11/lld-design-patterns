"use strict";
class Players {
    constructor(playerName) {
        this.playerName = playerName;
    }
    displayStatus() {
        console.log(`${this.playerName} is the player`);
    }
}
class AudioPlayer extends Players {
    constructor(audioFile) {
        super("AudioPlayer");
        this.audioFile = audioFile;
    }
    play() {
        console.log(`${this.displayStatus} running at file ${this.audioFile}`);
    }
    stop() {
        console.log(`${this.displayStatus} stopped at file ${this.audioFile}`);
    }
    pause() {
        console.log(`${this.displayStatus} paused at file ${this.audioFile}`);
    }
}
class VideoPlayer extends Players {
    constructor(speed, resolution) {
        super("VideoPlayer");
        this.speed = speed;
        this.resolution = resolution;
    }
    play() {
        console.log(`${this.displayStatus} started at speed ${this.speed} and resolution ${this.resolution}`);
    }
    stop() {
        console.log(`${this.displayStatus} stopped at speed ${this.speed} and resolution ${this.resolution}`);
    }
    pause() {
        console.log(`${this.displayStatus} paused at speed ${this.speed} and resolution ${this.resolution}`);
    }
}
class MusicPlayer extends Players {
    constructor(volume) {
        super("MusicPlayer");
        this.volume = volume;
    }
    play() {
        console.log(`${this.displayStatus} started at speed ${this.volume}`);
    }
    stop() {
        console.log(`${this.displayStatus} stopped at speed ${this.volume}`);
    }
    pause() {
        console.log(`${this.displayStatus} paused at speed ${this.volume}`);
    }
}
class PlayerController {
    constructor(player) {
        this.player = player;
    }
    startPlayback() {
        this.player.displayStatus();
        this.player.play();
    }
    pausePlayback() { this.player.pause(); }
    stopPlayback() { this.player.stop(); }
}
// Usage
const audioCtrl = new PlayerController(new AudioPlayer("song.mp3"));
audioCtrl.startPlayback();
audioCtrl.pausePlayback();
console.log();
const videoCtrl = new PlayerController(new VideoPlayer(2, 1080));
videoCtrl.startPlayback();
videoCtrl.stopPlayback();
console.log();
const streamCtrl = new PlayerController(new MusicPlayer(85));
streamCtrl.startPlayback();
streamCtrl.stopPlayback();
