
const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}


Park.prototype.getNumOfDinosaurs = function () {
    return this.dinosaurs.length;
};

Park.prototype.addDino = function (dino) {
    this.dinosaurs.push(dino);
};

Park.prototype.removeDino = function (dino) {
    let index = this.dinosaurs.indexOf(dino);
    this.dinosaurs.splice(index, 1);
};

Park.prototype.biggestAttraction = function () {
    let previousDino = 0;
    let winner;

    for (let dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > previousDino) {
            winner = dino;
        }
        previousDino = dino.guestsAttractedPerDay;
    }
    return winner;
};

Park.prototype.searchBySpecies = function (species) {
    let listOfDinos = []

    for (let dino of this.dinosaurs) {
        if (dino.species == species) {
            listOfDinos.push(dino);
        }
    }
    return listOfDinos
}

Park.prototype.visitsPerDay = function () {
    let total = 0;

    for (let dino of this.dinosaurs) {
        total += dino.guestsAttractedPerDay;
    }

    return total;
};

Park.prototype.visitorsPerYear = function () {

    return this.visitsPerDay() * 365;
}

Park.prototype.revenuePerYear = function () {
    return this.visitorsPerYear() * this.ticketPrice;
}

module.exports = Park;
