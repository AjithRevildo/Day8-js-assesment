
 
/*let baseFee = .44
let cities = ["Chennai", "Salem", "Kancheepuram", ]
let uberRates = [5, 10, 15]
let customerName = ("Revildo") 
let customerCity = ("Chennai") 

console.log("Hello", customerName+ ", welcome to the Uber Rate Program")

function getRate(customerCity) {
 
  function uberRate(customerCity, index) {
    
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)*/
class uber {
  constructor(kilometer, cost ){
    this.kilometer = kilometer;
    this.cost= cost;
  }
  get price(){
    return this.cost*this.kilometer
  }
}
 var location = new uber(6, 87);
console.log(`Cost of your travel is :${location.price}`);