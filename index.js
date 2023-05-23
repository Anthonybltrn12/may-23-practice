
let listOfTributes = [
    {
        name: "Katniss Everdeen",
        district: 12
    },
    {
        name: "Cato",
        district: 2
    }
]



function declareTributes(listOfTributes){
    return `${listOfTributes.name} from district ${listOfTributes.district}`
}

console.log(listOfTributes.map(declareTributes))