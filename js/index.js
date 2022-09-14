const tag_ul = document.querySelector(".cards")
const cart = document.querySelector(".cart")
//console.log(ul)
const lista_camisetas = []
const lista_acessorios = []
filtro(data)


function chamar_classe(classe){
    tag_ul.addEventListener("click", function(){
        tag_ul.tag_div.remove()
      
    })

    for(let i = 0; i < classe.length;i++){
        let item = classe[i]
        let li = criarLI(item)
        tag_ul.appendChild(li)
    }
    return tag_ul
}


function chamar(lista){

    for(let i = 0; i < lista.length;i++){
        let item = lista[i]
        let li = criarLI(item)
        tag_ul.appendChild(li)
    }
    return tag_ul
}
chamar(data)


function criarLI(obj){
    let tag_li = document.createElement("li")
    let tag_img = document.createElement("img")
    let tag_main = document.createElement("main")
    let tag_span = document.createElement("span")
    let tag_h1 = document.createElement("h1")
    let tag_p = document.createElement("p")
    let tag_strong = document.createElement("strong")
    let tag_a = document.createElement("a")


    tag_li.classList.add("card")
    tag_img.classList.add("product-img")
    tag_main.classList.add("product-main")
    tag_span.classList.add("product-category")
    tag_h1.classList.add("product-title")
    tag_p.classList.add("product-description")
    tag_strong.classList.add("product-price")
    tag_a.classList.add("add")
    

    tag_span.innerText = obj.tag
    tag_h1.innerText = obj.nameItem
    tag_p.innerHTML = obj.description
    tag_strong.innerText = `R$ ${obj.value}`
    tag_img.src = obj.img
    tag_a.innerText = obj.addCart
    tag_a.id = obj.id 
    tag_main.append(tag_span,tag_h1,tag_p,tag_strong,tag_a)
    tag_li.append(tag_img,tag_main)

    tag_a.addEventListener("click", function(){
        for(let i = 0; i < data.length;i++){
            if(tag_a.id == data[i].id){
                let mini_card = mini_li(data
                    [i])
                cart.append(mini_card)
            }
        }
    })

    return tag_li
}




function mini_li(item){
    let tag_div = document.createElement("div")
    let tag_div_l = document.createElement("div")
    let tag_img = document.createElement("img")
    let tag_h2 = document.createElement("h2")
    let tag_strong = document.createElement("strong")
    let tag_a = document.createElement("a")

    tag_div.classList.add("mini_card")
    tag_img.classList.add("mini_img")

    tag_img.src = item.img
    tag_h2.innerText = item.nameItem
    tag_strong.innerText = `R$ ${item.value}`
    tag_a.innerText = "Remover Produto"
    

    tag_div_l.append(tag_h2,tag_strong,tag_a)
    tag_div.append(tag_img,tag_div_l)
    tag_a.addEventListener("click", function(){
        tag_div.remove()
      
    })
    return tag_div
}

















function filtro(data){
    for (let i = 0; i < data.length; i++){
        if (data[i].tag == "Camisetas"){
            lista_camisetas.push(data[i])
        }else if(data[i].tag == "Acessórios"){
            lista_acessorios.push(data[i])
        }
    }
}
