import likeSongApi from "api/likeSongApi";
import songPlaylistApi from "api/songPlaylistApi";

export const handleLike = <T extends string> (idSong: T, idUser: T) => {
    let res;
    try {
        const getLikeSong = async () => {
            const condition = { id_Songs: idSong, id_User: idUser };
            let getResponse = await likeSongApi.getAll(condition);
            
            if(getResponse.data.length !== 0){
                let response = await likeSongApi.unLikeSong(getResponse.data[0]._id);
                return {response: response, status: "deleted"};
            }else{
                let response = await likeSongApi.addToLikeSong(condition);
                return {response: response, status: "added"};
            }
        }
        
        res = getLikeSong();
    } catch (error) {
        console.error(error);
    }
    return res
}

export const handleDownload = (idSong: string) => {
    console.log("handle download => idSong: ", idSong);

    // const fileName = "ten file.xlsx"; // tạo tên cho file
    // const url = window.URL.createObjectURL(new Blob([response.data]));// chuyển data thành url
    // const link = document.createElement("a");// tạo 1 thẻ a
    // link.href = url;// gán url property cho thẻ a
    // link.setAttribute("download", fileName); // set file name khi download
    // document.body.appendChild(link); //
    // link.click();// auto click thẻ a
    // link.remove();// xóa thẻ a
}

export const handleAddToPlaylist = <T extends string> (idSong: T, idUser: T) => {
    let res;
    try {
        const addHandler = async () => {
            let getResponse = await songPlaylistApi.getAll( {id_Song: idSong, id_User_Playlist: idUser} );
            
            if(getResponse.data.length === 0){
                const data = new FormData();
                data.append("id_Song", idSong);
                data.append("id_User_Playlist", idUser);
                const response = await songPlaylistApi.addToPlaylist(data);
                return response;
            }else{
                return { status: "existed"};
            }
        }
        res = addHandler();
    } catch (error) {
        console.error(error);
    }
    return res;
}