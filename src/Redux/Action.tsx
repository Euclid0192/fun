export const addLikedSong =  (song: any) => {
    return {
        type: 'ADD SONG',
        payload: song,
    }
}

export const removeLikedSong = (song: any) => {
    return {
        type: 'REMOVE SONG',
        payload: song
    }
}

export const addLikedAlbum = (album: any) => {
    return {
        type: 'ADD ALBUM',
        payload: album,
    }
}

export const removeLikedAlbum = (album: any) => {
    return {
        type: 'REMOVE ALBUM',
        payload: album
    }
}