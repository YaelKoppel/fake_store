import { saveProducts, getSavedProducts } from "./utiles"

export async function getProducts(product){
    const savedData = getSavedProducts(product);
    
    if (savedData) {
        const currentTime = new Date().getTime();
        const savedTime = new Date(savedData.timestamp).getTime();
        
        if (currentTime - savedTime < 60000) {
            return savedData.products; 
        }
    }

    const fetchedProducts = await fetch(`https://fakestoreapi.com/products/category/${product}`)
        .then(response => response.json());

    saveProducts(product, fetchedProducts);

    return fetchedProducts;
}

