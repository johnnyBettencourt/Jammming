const clientId = '011879a56f3a4ca78c176b20d4b90ae5';
const redirectUri = 'https://johnnybettencourt.github.io/Jammming/';
let accessToken;
let type = 'track';
const baseURL = 'https://api.spotify.com/v1/search?type=' + type + '&q=';

const Spotify = {
    // Retrieves the access token from the Spotify API
    async getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // Check if the access token and expiration time are present in the URL
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // Clear the access token after it expires
            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;
        } else {
            // Redirect the user to Spotify authorization if the access token is not present
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    // Performs a search query to Spotify API and returns the matched tracks
    async search(term) {
        const accessToken = await Spotify.getAccessToken();

        const response = await fetch(baseURL + term, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const jsonResponse = await response.json();

        if (!jsonResponse.tracks) {
            return [];
        }

        return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
        }));
    },

    // Saves a playlist with the given name and track URIs
    async savePlaylist(name, trackUris) {
        if (!name || !trackUris.length) {
            return;
        }

        const accessToken = await Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId;

        // Get the user ID
        const userResponse = await fetch('https://api.spotify.com/v1/me', { headers });
        const userJsonResponse = await userResponse.json();
        userId = userJsonResponse.id;

        // Create a new playlist
        const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers,
            method: 'POST',
            body: JSON.stringify({ name: name }),
        });

        const createPlaylistJsonResponse = await createPlaylistResponse.json();
        const playlistId = createPlaylistJsonResponse.id;

        // Add tracks to the playlist
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            headers,
            method: 'POST',
            body: JSON.stringify({ uris: trackUris }),
        });
    },
};

export default Spotify;
