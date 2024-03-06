class Animal {
    falar() {
        throw new Error("Este método deve ser substituído");
    }
}

class Cachorro extends Animal {
    falar() {
        return "Au au!";
    }
}

class Gato extends Animal {
    falar() {
        return "Miau!";
    }
}

let cachorro1 = new Cachorro();
let gato1 = new Gato();
let cachorro2 = new Cachorro();

console.log(cachorro1.falar());  // Au au!
console.log(gato1.falar());  // Miau!
console.log(cachorro2.falar());  // Au au!