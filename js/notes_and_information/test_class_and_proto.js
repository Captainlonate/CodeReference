class Thing {
  constructor(props) {
    this.type = 'Thing';
    this.name = props.thing || 'ThingName'
  }

  talkAboutSelf() {
    console.log(this.type);
  }
}

class Person extends Thing {
  constructor(props) {
    super(props);
    this.name = props.name || 'PersonName';
  }

  sayName() {
    console.log(this.name);
  }

  describeSelf() {
    console.log(`My type is ${this.type}`)
  }
}

// const t1 = new Thing({ name: 'Heather' });
// t1.talkAboutSelf();

const p1 = new Person({ name: 'Nathan' });

// These will all execute correctly
p1.sayName(); // Nathan
p1.talkAboutSelf(); // Thing
p1.describeSelf(); // "My type is Thing"

// Thing {}
console.log(p1.__proto__)
// {}
console.log(p1.__proto__.__proto__)
// [Object: null prototype] {}
console.log(p1.__proto__.__proto__.__proto__)
// null
console.log(p1.__proto__.__proto__.__proto__.__proto__)