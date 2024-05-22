"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
    printInfo() {
        console.log(`Song ID: ${this.id}, Name: ${this.name}, Length: ${this.length} minutes`);
    }
}
const mySong = new Song(1, 'Shape of You', 4.2);
mySong.printInfo();
mySong.setName('Perfect');
mySong.setLength(4.5);
mySong.printInfo();
