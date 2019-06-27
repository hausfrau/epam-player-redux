export const convertFetchedAlbumsToStoredFormat = data => {
    const storedAlbums = {};

    data.forEach(album => {
        const {id, title} = album;
        storedAlbums[id] = {
            id: id,
            title: title,
            photos: []
        };
    });
    return storedAlbums;
};