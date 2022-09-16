const aCar = {
  owner : "Joe Bloggs",
  type: {
    make: 'Toyota',
    model: 'Corolla',
    c: 1.8
  },
  milage: 10000,
  colour: {
    extColour: 'red',
    interior: {
      intColour: 'brown',
      texture: 'leather',
      shade: 'cream'
    },
  },
  registration : {year: 201, county: "WD", number: 1058}
};


console.log(aCar.owner + ' drives a ' + aCar.type.make)
console.log("Reg. = " +
  aCar.registration.year + "-" +
  aCar.registration.county + "-" +
  aCar.registration.number 

);
console.log('It is a '+ aCar.colour.extColour + " car, " + aCar.milage +
             " milage, with " + aCar.colour.interior.texture + " interior."
        )