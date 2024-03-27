const Elements =[
    {
        //ATOMIC PROPERTIES
        atomicNumber: 1,
        massNumber: 1.008,
        elementName: "hydrogen",
        quantumNumbers:[
           {
            principal: 1,
            azimuthal: 0,
            magnetic: +1/2,
            spin: 1/2
           }
        ],
        isotopes: [
            {
                name: "protium",
                massNumber: "1",
                relativeAbundance: "99.9855%"
            },
            {
                name: "deutrium",
                massNumber: "2",
                relativeAbundance: "0.0145%"
            },
            {
                name: "tritium",
                massNumber: "3",
                relativeAbundance: "Trace amount"
            }
        ],
        electronicConfig: "1s1",
        OxidationStates: "−1, 0, +1 (an amphoteric oxide)",
        Electronegativity: "2.20 (Pauling scale)",
        IonizationEnergy: "13.6 eV",
        CovalentRadius: "31±5 pm",
        VanDerWaalsRadius: "120 pm",
        MagneticOrdering: "Diamagnetic",

        //PHYSICAL PROPERTIES

        color: "colorless",
        odour: "odourless",
        density: "89.87×10<sup>-3</sup>g/cm³",
        TriplePoint: " 13.8033 K, 7.041 kPa",
        CriticalPoint: "32.938 K, 1.2858 MPa",
        HeatOfFusion: "0.117 kJ/mol",
        boilingPoint: "20.271 K",

        NaturalOccurrence: [
            "Hydrogen is abundant in stars like the sun but scarce as a gas on Earth",
            "It is the primary component of water (H₂O)"
        ],
        applications:[
            "Hydrogen has various industrial applications, including fuel cells, ammonia production, and oil refining",
            "It can be used as a clean energy carrier when produced from renewable sources",
            "Hydrogen’s simplicity and versatility make it a fascinating element with significant scientific and practical implications"
        ],

        //PERIODIC PROPERTIES
        group: 1,
        period: 1,
        block: "s-block",
        groupName: 'alkali metals'
    },
    {
        //ATOMIC PROPERTIES
        atomicNumber: 2,
        massNumber: 4,
        elementName: "Helium",
        quantumNumbers:[
           {
            principal: 1,
            azimuthal: 1,
            magnetic: +1/2,
            spin: 1/2
           }
        ],
        isotopes: [
           "no stable isotope"
        ],
        electronicConfig: "1s<sup>2</sup>",
        OxidationStates: "0",
        Electronegativity: "0",
        IonizationEnergy: "−24.587387936(25) eV",
        CovalentRadius: "28 pm",
        VanDerWaalsRadius: "141 pm",
        MagneticOrdering: "Diamagnetic",

        //PHYSICAL PROPERTIES

        color: "colorless",
        odour: "odourless",
        density: "0.1785 gram/litre",
        TriplePoint: " 2.177 K; 5.043 kPa",
        CriticalPoint: "5.195 K; 0.227 MPa",
        HeatOfFusion: "0.558 kJ/mo",
        boilingPoint: "−268.9 °C (−452 °F)",

        NaturalOccurrence: [
            "helium is abundant in stars like the sun but scarce as a gas on Earth",
            "It is the primary component of water (H₂O)"
        ],
        applications:[
            "Hydrogen has various industrial applications, including fuel cells, ammonia production, and oil refining",
            "It can be used as a clean energy carrier when produced from renewable sources",
            "Hydrogen’s simplicity and versatility make it a fascinating element with significant scientific and practical implications"
        ],

        //PERIODIC PROPERTIES
        group: 1,
        period: 1,
        block: "s-block",
        groupName: 'alkali metals'
    }
]
Elements.forEach((element)=>{
   /*if (element.group == 1) {
        console.log(element);
  }*/
 // var Foo = element.groupName;

switch (element.groupName) {
    case 'alkali metals':
       //console.log(element.NaturalOccurrence[0]);
        break;

    default:
        console.log("no element found with such properties");
        break;
}


});
//search();

