"use strict";
class User {
    constructor(name) {
        this.playlists = [];
        this.name = name;
    }
    createPlaylist(plname) {
        this.playlists.push(plname);
    }
    displayPlaylists() {
        console.log(`${this.name} has the following playlists`);
        for (const p of this.playlists) {
            console.log(p.getName());
        }
    }
}
class PlayList {
    constructor(name) {
        this.song = [];
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addSong(songname) {
        this.song.push(songname);
        console.log(`Song ${songname.getName()} added successfully to ${this.name}`);
    }
    deleteSong(songname) {
        this.song = this.song.filter(e => e !== songname);
        console.log(`Song ${songname.getName()} deleted successfully from ${this.name}`);
    }
    displaySongs() {
        console.log(`Songs in ${this.name}:`);
        for (const s of this.song) {
            console.log(s.getName());
        }
    }
}
class Song {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
    }
    getName() {
        return this.name;
    }
}
const s1 = new Song("wdkjl", 3);
const s2 = new Song("sd", 4);
const user = new User("Shivam");
const playlist = new PlayList("MyPL");
user.createPlaylist(playlist);
playlist.addSong(s1);
playlist.addSong(s2);
playlist.displaySongs();
playlist.deleteSong(s1);
playlist.displaySongs();
