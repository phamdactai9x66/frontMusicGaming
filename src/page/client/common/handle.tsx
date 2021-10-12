import songPlaylistApi from "api/songPlaylistApi";

export const handleLike = (idSong: string, idUser: string) => {
    console.log("handle like => idSong: ", idSong, " => idUser: ", idUser);
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

export const handleAddToPlaylist = (idSong: string, idUser: string = "6142f12f0d259d3634f367ff") => {
    try {
        const addHandler = async () => {
            const data = new FormData();
            data.append("id_Song", idSong);
            data.append("id_User_Playlist", idUser);
            const abc = await songPlaylistApi.addToPlaylist(data);
            console.log(abc)
        }
        addHandler();
    } catch (error) {
        console.log(error);
    }
}