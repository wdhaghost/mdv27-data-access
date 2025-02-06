const url = import.meta.env.VITE_BACKEND_URL;
export async function getAllProduct() {
    return await fetch(`${url}/products`, {
        method: "GET",
    }).then((value) => {
        return value.json();
    }).catch((error) => {
        console.error(error);
        return [];
    });
}

export async function createProduct(product) {
    return await fetch(`${url}/createProduct`, {
        method: "POST",
        body: JSON.stringify(product)
    }).catch((error) => {
        console.error(error);
        return { message: "Echec de création du produit !" };
    });
}

export async function updateProduct(product) {
    return await fetch(`${url}/products`, {
        method: 'PUT',
        body: JSON.stringify(product),
    }).catch((error) => {
        console.error(error);
        return { message: "Echec de mise à jour du produit !" };
    })
}

export async function deleteProduct(product) {
    return await fetch(`${url}/products`, {
        method: 'DELETE',
        body: JSON.stringify(product)
    })
}