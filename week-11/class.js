class Student {
	constructor(name){
    this.name = name;
    this.paidFee = 0;
	}

  // getter, and setter


  getName(){
    return this.name;
  }

  payFee(fee){
    this.paidFee += fee;
  }
  print(){
    console.log("Student name is", this.name)
  }

  info(){
    console.log(this.name, " has paid ", this.paidFee, " so far")
  }
}


var ahamed = new Student("Ahmad")
var rana = new Student("Rana")

console.log(ahamed.getName());


ahamed.payFee(100);
ahamed.payFee(150);

ahamed.print()
rana.print()

ahamed.info();
rana.info();