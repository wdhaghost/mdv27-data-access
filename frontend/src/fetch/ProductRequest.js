const url = import.meta.env.VITE_BACKEND_URL;
export async function getAllProduct() {
    return await fetch(`${url}/api/products`, {
        method: "GET",
          headers: {
            "Content-Type":"application/json"
        }
    }).then((value) => {
        return value.json();
    }).catch((error) => {
        console.error(error);
        return [];
    });
}

export async function createProduct(product) {
    return await fetch(`${url}/api/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type":"application/json"
        }
    }).catch((error) => {
        console.error(error);
        return { message: "Echec de création du produit !" };
    });
}

export async function updateProduct(product) {
    return await fetch(`${url}/api/products`, {
        method: 'PUT',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(product),
    }).catch((error) => {
        console.error(error);
        return { message: "Echec de mise à jour du produit !" };
    })
}