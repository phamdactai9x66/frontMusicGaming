export const saveToLocalStorage = (song: any) => {
    const oldData = localStorage.getItem('recent');

    if(oldData) {
        const data = JSON.parse(oldData);
        const isExisted = data.filter( (_: any) => _._id === song._id);

        if(isExisted.length === 0){
            const newData = JSON.stringify([...data, song])
            localStorage.setItem('recent', newData)
        }
    }else{
        localStorage.setItem('recent', JSON.stringify([song]));
    }
}

export const removeFromLocalStorage = (id_song: string) => {
    const oldData = localStorage.getItem('recent');
    if(oldData){
        const data = JSON.parse(oldData);
        const newData = data.filter( (i: any) => i._id !== id_song)
        localStorage.setItem('recent', JSON.stringify(newData))
    }
}