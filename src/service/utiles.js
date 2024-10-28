
export function saveProducts(productsName, products){
    const data = {
        products: products,
        timestamp: new Date().toISOString() 
    };
    localStorage.setItem(productsName, JSON.stringify(data));
}

export function getSavedProducts(productsName){
    const data = JSON.parse(localStorage.getItem(productsName));
    if (data) {
        const { products, timestamp } = data;
        return { products, timestamp };
    }
    return null;
}