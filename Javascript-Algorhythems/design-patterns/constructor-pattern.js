
// let Color = Object.freeze({
//     green: "green",
//     blue: "blue"
// });
// let size = Object.freeze({
//     small: "small",
//     large: "large"
// });

// function Product( name, color, size ) {
//     this.name = name;
//     this.color = color;
//     this.size = size;
// }
// function ProductFilter() {
//     filterByColor(products, color) {
//         return products.filter(p => p.color === color);
//     }
// }

// let apple = new Product("Apple", Color.green, size.small);
// let tree = new Product("Tree", Color.green, size.large);
// let house = new Product("House", Color.blue, size.large);
 
// let products = [apple, tree, house];
// let pf = new ProductFilter();

// for(let p of pf.filterByColor(products, Color.green)) {
//     console.log(`* ${p.name} is green`);
// }
Car{

  field: -> memory
}

Honda - > { field -> memory}

WRV -> {field-> memory}



function Car( model, year, miles ) {
 
    this.model = model;
    this.year = year;
    this.miles = miles;
   
    // this.toString = function () {
    //   return this.model + " has done " + this.miles + " miles";
    // };
  }

  console.log(" prototype: "+Car.prototype);

    Car.prototype.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };  

  var civic = new Car( "Honda Civic", 2009, 20000 );
  var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
  console.log( mondeo.prototype === civic.prototype);
  console.log( civic.toString() );
  console.log( mondeo.toString() );