
export async function getProducts(product){
    return fetch(`https://fakestoreapi.com/products/category/${product}`)
    .then(response => response.json())
}
