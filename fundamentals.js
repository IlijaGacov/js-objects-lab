const aCar = {
  owner : "Joe Bloggs",
  previous_owners: [
    {name: "Pat Smith", address: "1 Main Street"},
    {name: "Sheila Dwyer", address: "2 High Street"}
  ],
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
console.log("It is a "+ aCar.colour.extColour +
 " car, " + aCar.milage +" milage, with " +

  aCar.colour.interior.texture + " interior.");

  console.log('First owner : ' + aCar.previous_owners[1].name + 
  ' - ' + aCar.previous_owners[1].address);

  for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name) ;
}

for (let p in aCar.type)  {
  console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}