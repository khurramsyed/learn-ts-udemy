
const todaysWeather = { 
  date: new Date(),
  weather: 'sunny'
};


const logWeather = (forecast:{date: Date, weather: string}) =>{
  console.log(forecast.date)
  console.log(forecast.weather)
;}


logWeather(todaysWeather);

// Another syntax for above is this ... where rather than passing full object, you destructure individual properties.
const logWeather2 = ({date, weather}:{date: Date, weather: string}) =>{
  console.log(date)
  console.log(weather)
};
logWeather2(todaysWeather);



const profile = {
  name: 'Khurram',
  age: 47,
  coord: {
    lat: 100,
    lng: 150
  },
  setAge(age: number): void{
    this.age = age;
  }
};

var { age } :{age: number} = profile;

//Since Age is already declared  in the context 
// (const and lets are block scope variable if we declare outside 
// function/block then we will  get cannot redeclare 
const{age: profileAge} : {age: number} = profile;