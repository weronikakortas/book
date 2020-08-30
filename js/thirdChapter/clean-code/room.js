class Room {
    width = 200;
    length = 220;
    desk = false;

    space() {
        return this.width * this.length;
    }

    display() {
        console.log(`szerokość ${this.width} , długość ${this.length}, powierzchnia ${this.space()}, czy ma biurko ${this.desk}`)
    }
}

const room = new Room();
console.log(room.display());