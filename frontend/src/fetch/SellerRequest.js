const url = import.meta.env.VITE_BACKEND_URL;

export async function getAllSeller() {
    return await fetch(`${url}/api/resellers`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    }).then((value) => {
        return value.json()
    }).catch((error) => {
        console.error(error);
        return [];
    })
}

export async function createSeller(seller) {
    return await fetch(`${url}/api/resellers`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(seller)
    }).catch((error) => {
        console.error(error);
        return { message: "Echec de création du revendeur !" }
    })
}

export async function updateSeller(seller) {
    return await fetch(`${url}/api/resellers`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(seller),
    }).catch((error) => {
        console.error(error);
        return { message: "Echec de mise à jour du revendeur" }
    });
}

export async function deleteSeller(seller) {
    return await fetch(`${url}/api/resellers`, {
        method: "DELETE",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(seller),
    });
}