export const convertFetchedAlbumsToStoredFormat = data => {
    const storedAlbums = {};

    data.forEach(album => {
        const {id, title} = album;
        storedAlbums[id] = {
            title: title,
            photos: []
        };
    });
    return storedAlbums;
};

export const convertFetchedPhotosToStoredFormat = (fetchedPhotos) => {
    const storedPhotos = {};

    fetchedPhotos.forEach(photo => {
        const {albumId = null, id = null, title = '', url = ''} = photo;

        storedPhotos[id] = {
            albumId: Number(albumId),
            title,
            url
        };
    });

    return storedPhotos;
};

export const getPhotosIds = (fetchedPhotos) => {
    let photosIds = new Set();

    fetchedPhotos.forEach(photo => {
        photosIds.add(photo.id);
    });

    return Array.from(photosIds);
};