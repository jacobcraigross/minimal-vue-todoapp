// Higher order array methods 

const rivers = [
    {name: "Red", length: 225, depth: 34, deathsThisYear: true},
    {name: "Sabine", length: 233, depth: 22, deathsThisYear: true},
    {name: "Angelina", length: 111, depth: 33, deathsThisYear: false},
    {name: "Brazos", length: 245, depth: 14, deathsThisYear: true},
    {name: "Trinity", length: 229, depth: 11, deathsThisYear: false},
    {name: "Neches", length: 333, depth: 29, deathsThisYear: false},
    {name: "Rio Grande", length: 255, depth: 28, deathsThisYear: true},
    {name: "San Marcos", length: 333, depth: 30, deathsThisYear: true},
    {name: "Guadalupe", length: 277, depth: 20, deathsThisYear: true},
    {name: "Pedernales", length: 266, depth: 12, deathsThisYear: true},
    {name: "Colorado", length: 302, depth: 19, deathsThisYear: false},
    {name: "Blanco", length: 277, depth: 24, deathsThisYear: true},
    {name: "Pecos", length: 309, depth: 27, deathsThisYear: false},
    {name: "Lavaca", length: 312, depth: 10, deathsThisYear: false},
    {name: "Llano", length: 334, depth: 18, deathsThisYear: true},
    {name: "Nueces", length: 290, depth: 17, deathsThisYear: false},
    {name: "Devils", length: 228, depth: 29, deathsThisYear: true},
    {name: "San Antonio", length: 128, depth: 31, deathsThisYear: true},
    {name: "San Gabriel", length: 102, depth: 32, deathsThisYear: false},
    {name: "San Jacinto", length: 144, depth: 13, deathsThisYear: true},
    {name: "San Saba", length: 112, depth: 23, deathsThisYear: false},
    {name: "Wichita", length: 101, depth: 9, deathsThisYear: false},
    {name: "Frio", length: 137, depth: 8, deathsThisYear: true},
    {name: "Navidad", length: 151, depth: 7, deathsThisYear: true},
    {name: "Lampasas", length: 188, depth: 6, deathsThisYear: false}
]

// FILTER --> great for 'filtering' your data based on parameters.
const deadly = rivers.filter((river) => {
    return river.deathsThisYear === true
})
console.log(deadly)

// MAP --> takes all the items in the array, performs an action to each, returns a new array.
// in this case we will return on the depths of each river.
const deepness = rivers.map((river) => {
    return river.depth
})
console.log(deepness)

// FIND --> you can find an item based on a specific parameter. 
const idealLocation = rivers.find((river) => {
    return river.length === 102
})
console.log(idealLocation)

// FOR EACH --> better than a for loop, when you want to loop over each item. 
rivers.forEach((river) => {
    console.log(river.name)
})

// SOME --> doesnt return new array, instead returns true or false, based on a parameter.
const megaRivers = rivers.some((river) => {
    return river.length >= 400
})
console.log(megaRivers)

// EVERY --> makes sure ALL items meet a certain parameter. 
const shallowRivers = rivers.every((river) => {
    return river.depth <= 5
})
console.log(shallowRivers)

// REDUCE --> does an operation on the array and returns the result of said operation
// again, like FOR EACH it beats the standard old school for loop 
const totalLength = rivers.reduce((currentLength, river) => {
    return river.length + currentLength
}, 0)
console.log(totalLength)
