let input=document.getElementById('hostInput')
input.addEventListener('input',()=>{
    console.log(input.value)
    let categories=document.getElementsByTagName('li')
    Array.from(categories).forEach(elements=>{
        // console.log(elements.innerText.toLowerCase())
        let categoryText=elements.innerText.toLowerCase()
        if(categoryText.includes(input.value)){
            elements.style.display = "block";
        }
        else {
            elements.style.display = "none";
        }
    })
})