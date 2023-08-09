

fetch("https://dolar-api-argentina.vercel.app/v1/dolares/blue")
.then(res => res.json())
.then(data => {
    const lista = ["a", "v", "c", "d", "e"];
    
    
    const i = String(data.compra).split("").reduce((previo, actual) => Number(actual) + Number(previo)) % 10;
    document.getElementById("dolar-blue").innerText = i;
    console.log(i % lista.length)
    console.log(lista[i % lista.length])
});