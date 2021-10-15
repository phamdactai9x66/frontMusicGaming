import likeSongApi from "api/likeSongApi";
import songPlaylistApi from "api/songPlaylistApi";

export const handleLike = (idSong: string, idUser: string) => {
    let res;
    try {
        const addHandler = async () => {
            const data = {
                id_Songs: idSong,
                id_User: idUser,
            }
            const response = await likeSongApi.addToLikeSong(data);
            return response
        }
        res = addHandler();
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

export const handleAddToPlaylist = (idSong: string, idUser: string) => {
    let res;
    try {
        const addHandler = async () => {
            const data = new FormData();
            data.append("id_Song", idSong);
            data.append("id_User_Playlist", idUser);
            const response = await songPlaylistApi.addToPlaylist(data);
            return response;
        }
        res = addHandler();
    } catch (error) {
        console.error(error);
    }
    return res;
}