const myName = 'Manuel';

const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(4, 3);

class Persona {

  constructor(private age: number, private name: string) {}
  getSumary() {
    return `My name is ${this.name} and my age is ${this.age}`;
  }
}


const manuel = new Persona(32, 'Manuel');
manuel.getSumary();
