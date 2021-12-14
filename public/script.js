const get = (ele)=>document.querySelector(ele);
const getAll = (ele)=>document.querySelectorAll(ele);

let totaln = 0;

const product = get("#product");
const theValue = get("#value");
const quanty = get("#quant")
const pag = get("#pag");
const productArea = get(".products")
const val = get("#val")
const tc = get("#tc")
const add = get("#add")
const total = get("#total");
const end = get("#end");
const clear = get("#clear")
const changetotal = get("#changetotal")

const products = [];

add.onclick = ()=>{
    
    if(product.value != "" && theValue.value != ""){

        products.push({
            name: product.value,
            price: parseFloat(theValue.value),
            quanty: parseInt(quanty.value),
        })

        const result = products.reduce((a,b)=> a + b.price * b.quanty,0);
        const perUni = products.reduce((a,b)=>b.price * b.quanty,0);

        totaln = result;
        total.innerHTML = `Total: ${result.toFixed(2)} R$`
        createProduct(product.value,theValue.value,quanty.value,perUni);
        
        product.value = '';
        theValue.value = '',
        quanty.value = '';
        
    }
    else{
        alert("Você deve adicionar um nome, o valor e sua quantidade")
    }
}

end.onclick = ()=>{

    if(pag.value != ""){
        val.innerHTML = `Pagamento: ${parseInt(pag.value).toFixed(2)}R$`
        const result = parseFloat(pag.value) - totaln
        tc.innerHTML = `Troco: ${result.toFixed(2)}R$`
        pag.value = '';
    }
    else{
        alert("Você deve inserir um valor de pagamento")
    }

}

clear.onclick = ()=>{

    total.innerHTML = 'Total: 0,00 R$';
    val.innerHTML = 'Pagamento: 0,00 R$';
    tc.innerHTML = 'Troco: 0,00 R$';

    products.length = 0;

    const Prd = getAll(".prod");
    Prd.forEach((element,index)=>{
        element.remove();
    })
}


const createProduct = (product,value,quanty,result)=>{
    
    const div = document.createElement("div");
    div.classList.add("prod");
    const pro = document.createElement("p");
    const val = document.createElement("p");
    div.appendChild(pro);
    div.appendChild(val);
    pro.innerHTML = `Produto: ${product} ${parseInt(quanty)}x`
    val. innerHTML = `Valor: ${parseFloat(value).toFixed(2)} R$ - ${result.toFixed(2)} R$`
    productArea.appendChild(div)

}
const cleareValue = (ele)=>ele.value = '';

