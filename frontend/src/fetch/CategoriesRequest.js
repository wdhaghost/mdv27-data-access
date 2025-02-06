const url = import.meta.env.VITE_BACKEND_URL;
export async function getAllCategories(){
    return await fetch(`${url}/api/categories`, {
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