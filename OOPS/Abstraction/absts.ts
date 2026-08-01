abstract class Players{
    protected playerName:string

    constructor(playerName:string){
        this.playerName=playerName

    }
    abstract play():void;
    abstract stop():void;
    abstract pause():void;

    displayStatus():void{
        console.log(`${this.playerName} is the player`)

    }

}

class AudioPlayer extends Players{
    private audioFile:string;

    constructor(audioFile:string){
        super("AudioPlayer")
        this.audioFile=audioFile
    }

    play():void{
        console.log(`${this.displayStatus} running at file ${this.audioFile}`)
    }
    stop(): void {
        console.log(`${this.displayStatus} stopped at file ${this.audioFile}`)
    }
    pause(): void {
        console.log(`${this.displayStatus} paused at file ${this.audioFile}`)
    }

}

class VideoPlayer extends Players{
    private speed:number;
    private resolution:number;

    constructor(speed:number,resolution:number){
        super("VideoPlayer")
        this.speed=speed;
        this.resolution=resolution;
    }

    play(): void {
        console.log(`${this.displayStatus} started at speed ${this.speed} and resolution ${this.resolution}`)
        
    }

    stop(): void {
         console.log(`${this.displayStatus} stopped at speed ${this.speed} and resolution ${this.resolution}`)
        
    }

    pause(): void {
         console.log(`${this.displayStatus} paused at speed ${this.speed} and resolution ${this.resolution}`)
        
    }
}

class MusicPlayer extends Players{
    private volume:number

    constructor(volume:number){
        super("MusicPlayer")
        this.volume=volume;

    }

    play(): void {
        console.log(`${this.displayStatus} started at speed ${this.volume}`)
        
    }

    stop(): void {
        console.log(`${this.displayStatus} stopped at speed ${this.volume}`)
        
    }

    pause(): void {
        console.log(`${this.displayStatus} paused at speed ${this.volume}`)
        
    }
}

class PlayerController {
    private player: Players;

    constructor(player: Players) {
        this.player = player;
    }

    startPlayback(): void {
        this.player.displayStatus();
        this.player.play();
    }
    pausePlayback(): void { this.player.pause(); }
    stopPlayback(): void { this.player.stop(); }
}

// Usage
const audioCtrl = new PlayerController(new AudioPlayer("song.mp3"));
audioCtrl.startPlayback();
audioCtrl.pausePlayback();

console.log();

const videoCtrl = new PlayerController(new VideoPlayer(2,1080));
videoCtrl.startPlayback();
videoCtrl.stopPlayback();

console.log();

const streamCtrl = new PlayerController(
    new MusicPlayer(85));
streamCtrl.startPlayback();
streamCtrl.stopPlayback();
