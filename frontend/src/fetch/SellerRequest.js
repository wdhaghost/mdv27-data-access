const url = import.meta.env.VITE_BACKEND_URL;

export async function getAllSeller() {
    return await fetch(`${url}/`, {
        method: "GET",
    }).then((value) => {
        return value.json()
    }).catch((error) => {
        console.error(error);
        return [];
    })
}

export async function createSeller(seller) {
    return await fetch(`${url}/reseller`, {
        method: "POST",
        body: JSON.stringify(seller)
    }).catch((error) => {
        console.error(error);
        return { message: "Echec de création du revendeur !" }
    })
}

export async function updateSeller(seller) {
    return await fetch(`${url}/reseller`, {
        method: "PUT",
        body: JSON.stringify(seller),
    }).catch((error) => {
        console.error(error);
        return { message: "Echec de mise à jour du revendeur" }
    });
}

export async function deleteSeller() {
    return await fetch(`${url}/resellers`, {
        method: "DELETE",
        body: JSON.stringify(seller),
    });
}