

const nums = [1,2,3,4,5]

const ret_nums = nums.map( function(n){
    return n*n
})

console.log(ret_nums)


const pokemon = ["balbesor", "dedene", "Charmender"]

const pokemon_baru = pokemon.map(function(name){
    return `<p>${name}</p>`
})