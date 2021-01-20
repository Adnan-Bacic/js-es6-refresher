const ninjas = ['ninja1', 'ninja2', 'ninja3']

const formatNinjas = () => {
    let val = ''
    ninjas.forEach(ninja => val += ninja + ', ')
}

const greet = () => {
    console.log(ninjas[0] + ' says hello')
}

const ninjas2 = [
    { name: 'ninja1', belt: 'black' },
    { name: 'ninja2', belt: 'red' },
    { name: 'ninja3', belt: 'yellow' },
]
//filter
const filtered = ninjas2.filter((item) => {
    console.log(item)
    return item.belt === 'black'
})
console.log('filtered', filtered)

//map
const mapped = ninjas2.map((item) => {
    console.log(item)
    return item.name === 'ninja1'
})
console.log('mapped', mapped)

export {
 formatNinjas, greet
}

export default ninjas