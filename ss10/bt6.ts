class Song {
    public readonly id: number;
    private name: string;
    private length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getLength(): number {
        return this.length;
    }
    public setLength(length: number): void {
        this.length = length;
    }
    public printInfo(): void {
        console.log(`Song ID: ${this.id}, Name: ${this.name}, Length: ${this.length} minutes`);
    }
}
const mySong = new Song(1, 'Shape of You', 4.2);
mySong.printInfo();
mySong.setName('Perfect');
mySong.setLength(4.5);
mySong.printInfo();
