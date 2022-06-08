const length = document.getElementById('diameter')
const button = document.getElementById('button')
const body = document.querySelector('body')

function getArea(diameter) {
let radius = diameter/2;
let floor = Math.PI * (radius * radius)




return Math.ceil(floor)

}

function area() {
    
    makeSqftCard(getArea(`${length.value}`))
}

function makeSqftCard(input) {
    const area = document.createElement('div')
    area.textContent = ('sqft of flooring needed is '+ input +' sqft')
    body.appendChild(area)
}








