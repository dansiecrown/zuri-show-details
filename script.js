let name = "Omoregbe Daniel Osas"
let height = "5 ft 5.3 in (165.9 cm)"
let country = "Nigeria"

alert(`
My name is: ${name},
I am ${height} tall,
and I am from ${country}.
`)


let nameContainer = document.getElementById("name")
let heightContainer = document.getElementById("height")
let countryContainer = document.getElementById("country")


function showDetails(){
    nameContainer.innerHTML = name
    heightContainer.innerHTML = height
    countryContainer.innerHTML = country
}
