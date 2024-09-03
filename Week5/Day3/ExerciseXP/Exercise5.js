// Using the Dog class below, Analyze the options below. Which constructor will successfully extend the Dog class?

class Dog {
    constructor(name) {
      this.name = name;
    }
}; // -> 2

// 1
class Labrador extends Dog {
constructor(name, size) {
    this.size = size;
}
};


// 2
class Labrador extends Dog {
constructor(name, size) {
    super(name);
    this.size = size;
}
};


// 3
class Labrador extends Dog {
constructor(size) {
    super(name);
    this.size = size;
}
};


// 4
class Labrador extends Dog {
constructor(name, size) {
    this.name = name;
    this.size = size;
}
};
