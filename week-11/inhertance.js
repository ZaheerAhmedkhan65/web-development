class Person{ // parent class
  #balance = 0;

  constructor(name, dob){
    this.dob = dob
    this.name = name;
    this.#balance = 1;
  }

  getAge(){
    let today = new Date();
    let dob = new Date(this.dob);
    let age = today.getFullYear() - dob.getFullYear();
    return age;
  }

  into(){
    console.log(`Hi, my name is ${this.name}. I am a person and my age is ${this.getAge()}`)
  }
}

class Student extends Person{
  // child class

  into(){
   console.log(`Hi, my name is ${this.name}. I am a student and my age is ${this.getAge()}`)
  }
}

class Teacher extends Person{
  into(){
    console.log(`Hi, my name is ${this.name}. I am a teacher and my age is ${this.getAge()}`)
   }
}


s = new Student("John", new Date("1990-01-01"));
t = new Teacher("Smith", new Date("1988-01-01"));


s.into();
t.into();