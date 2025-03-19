class Vehicle{

  constructor(public color: string) {

  }
  public drive(): void{
    console.log('chuga chuga ')
  }

  public honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle{
  drive():void{
    console.log('vrooooom');
  }
}


const car = new Car('Orange');
console.log(car.color);
car.drive();
car.honk();



// Modifiers  public, private , protected, default is public
// 