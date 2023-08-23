class Dog {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    set name(newName){
        if (newName) {
            this._name = newName;
        }
    }
   
}

var doggie = new Dog("Fido");
console.log(doggie.name);
doggie.name = 'Barnie';
console.log(doggie.name)