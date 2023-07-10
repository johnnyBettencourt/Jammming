const clientId = '011879a56f3a4ca78c176b20d4b90ae5';
const redirectUri = 'http://localhost:3000/'; 
let accessToken;
let type = 'track';
const baseURL = 'https://api.spotify.com/v1/search?type=' + type + 'q=';

const Spotify = {
    getAccessToken() {},
    
    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(baseURL + term, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then( jsonResponse => {
            if (!jsonResponse.tracks){
                return []
            }
            return jsonResponse.tracks.items.map((track) => ({
                id: track.id,
                name: track.name,
                artist: track.artist[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    savePlaylist(name, trackUris) {}
};

export default Spotify