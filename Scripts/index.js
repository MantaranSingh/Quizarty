let input = document.getElementById('hostInput')
let categories = document.getElementsByTagName('li')
input.addEventListener('input', () => {

    Array.from(categories).forEach(elements => {

        let categoryText = elements.innerText.toLowerCase()
        if (categoryText.includes(input.value)) {
            elements.style.display = "block";
        }
        else {
            elements.style.display = "none";
        }
    })
})
