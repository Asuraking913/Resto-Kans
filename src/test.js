// const a = ['sdf', 'swer', 'sdf']
const a = [{key1 : "dunce", key2 : "mongo"}, {key1 : "dunce", key2 : "mongo"}]

const iterator = a[Symbol.iterator]()
console.log(iterator.next())

// for (const b of a) {
//     console.log(b)
// }