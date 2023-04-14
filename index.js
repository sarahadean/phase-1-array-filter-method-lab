// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];
// findMatching
//a. takes array of drivers' names and string as agruments
// b. returns the matching list of drivers

function findMatching(drivers, string){
const newList = drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase())
        return newList
    } 
// takes an array of drivers' names and a string as arguments
//returns all drivers whose names begin with the provided letters

function fuzzyMatch(drivers, string){
    const newList = drivers.filter(drivers => drivers.startsWith(string))
    return newList
}

// takes an array of drivers' names and a string as arguments
function matchName(drivers, string){
    const newList = drivers.filter(drivers => drivers.name === string)
    return newList
}