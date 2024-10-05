/* Lecture 41
    super = keyword is used in classes to call the constructor or
            access the properties and methods of a parent (superclass)
            this = this object
            super = the parent
    
    getter = special method that makes a property readable
    setter = special method that makes a property writeable

    validate and modify a value when reading/wrting a property
*/

class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{

    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{

    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{

    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit",1,2);

console.log(rabbit.name);
console.log(rabbit.runSpeed);
console.log("Another program starts here");

//getter and setter starts here

class Rectangle{

    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width msut be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height msut be a positive number");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(1000,32);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(`The area is ${rectangle.area}`);