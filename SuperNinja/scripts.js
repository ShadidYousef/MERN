class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 90;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(`Ninja's name: ${this.name}`);
  }

  showStats() {
    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Speed: ${this.speed}`);
    console.log(`Health: ${this.health}`);
  }

  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    super.drinkSake();
   
  }
}

