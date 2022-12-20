import { formatNinjas, greet } from './ninjas.js'
import ninjas from './ninjas.js'

console.log(ninjas)
console.log(greet())

const blog = { title: 'title1', author: 'author1'}
const spread = {...blog, id: 1}
console.log(spread)

const name = 'adnan'
const job = 'dev'
const template = `hi my name is ${name} and my job is ${job}`
console.log(template)

function classicFunc(){
    console.log('classic')
}
const arrowFunc = () => {
    console.log('arrow')
}
//old
ninjas.map(function(){
})
//new
ninjas.map(() => {

})

const url = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data)
})

const getTodo = async () => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}
getTodo()