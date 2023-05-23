// Prompt1

// let listOfTributes = [
//     {
//         name: "Katniss Everdeen",
//         district: 12
//     },
//     {
//         name: "Cato",
//         district: 2
//     }
// ]



// function declareTributes(listOfTributes){
//     return `${listOfTributes.name} from district ${listOfTributes.district}`
// }

// console.log(listOfTributes.map(declareTributes)) 

//Prompt2

let toyInventory2023 = [
    {
        name: "Puzzle Game",
        containsChemicals: true
    },
    {
        name: "Fidget Spinner",
        containsChemicals: true
    },
    {
        name: "Teddy Bear",
        containsChemicals: false
    }
]

function removeFaultyToys(toyInventory){
   return toyInventory.containsChemicals === false
}

console.log(toyInventory2023.filter(removeFaultyToys))