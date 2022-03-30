const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 20);
    trex = new Dinosaur('t-rex', 'carnivore', 50);
    raptor = new Dinosaur('raptor', 'carnivore', 30);
    brontosaurus = new Dinosaur('brontosaurus', 'herbivore', 60)
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.getNumOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
    
    park.addDino(trex);
    park.addDino(raptor);

    const actual = park.getNumOfDinosaurs();
    assert.strictEqual(actual, 2)
  });

  it('should be able to remove a dinosaur from its collection', function() {

    park.addDino(trex);
    park.addDino(raptor);

    park.removeDino(trex);
    const actual = park.getNumOfDinosaurs();
    assert.strictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(trex);
    park.addDino(raptor);
    park.addDino(brontosaurus)

    const actual = park.biggestAttraction();
    assert.strictEqual(actual, brontosaurus);
  });

  it('should be able to find all dinosaurs of a particular species', function () {

    park.addDino(trex);
    park.addDino(raptor);
    park.addDino(brontosaurus);

    const actual = park.searchBySpecies('raptor');
    assert.deepStrictEqual(actual, [raptor]);
  });

  it('should be able to calculate the total number of visitors per day', function () {

    park.addDino(trex);
    park.addDino(raptor);
    park.addDino(brontosaurus);

    const actual = park.visitsPerDay();
    assert.strictEqual(actual, 140);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDino(trex);
    park.addDino(raptor);
    park.addDino(brontosaurus);

    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 51100);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDino(trex);
    park.addDino(raptor);
    park.addDino(brontosaurus);

    const actual = park.revenuePerYear();
    assert.strictEqual(actual, 1022000)
  });

});
