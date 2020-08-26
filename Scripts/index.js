let input=document.getElementById('hostInput')
input.addEventListener('input',()=>{
    
    let categories=document.getElementsByTagName('li')
    Array.from(categories).forEach(elements=>{
        
        let categoryText=elements.innerText.toLowerCase()
        if(categoryText.includes(input.value)){
            elements.style.display = "block";
        }
        else {
            elements.style.display = "none";
        }
    })
})