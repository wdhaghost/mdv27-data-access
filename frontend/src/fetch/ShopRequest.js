const url = import.meta.env.VITE_BACKEND_URL;

export async function getAllMedidonc(){
    return await fetch(`${url}/api/medidonc`,{
        method:'GET',
        headers: {
            "Content-Type":"application/json"
        }
    }).then((value)=>{
        return value.json();
    }).catch((error)=>{
        console.error(error);
        return [];
    });
}

export async function getAllGamez(){
    return await fetch(`${url}/api/gamez`,{
        method:'GET',
        headers: {
            "Content-Type":"application/json"
        }
    }).then((value)=>{
        return value.json();
    }).catch((error)=>{
        console.error(error);
        return [];
    });
}

export async function getAllSportSalut(){
    return await fetch(`${url}/api/sportsalut`,{
        method:'GET',
        headers: {
            "Content-Type":"application/json"
        }
    }).then((value)=>{
        return value.json();
    }).catch((error)=>{
        console.error(error);
        return [];
    });
}