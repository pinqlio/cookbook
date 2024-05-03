const updateStorage = ( key : string, data : string ) => {
    localStorage.setItem(key,data);
}

const getFromStorageByKey = ( key : string , param?: string ) => {
    if(!param){
        return localStorage.getItem(key);
    }
    const storageToJSON = JSON.parse(localStorage.getItem(key) as string );
    return typeof storageToJSON === 'object' && storageToJSON[param]
}

export { updateStorage, getFromStorageByKey };

