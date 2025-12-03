//En este archivo implementamos las funciones necesarias para manejar la autenticación con Spotify usando OAuth 2.0.

//==========================================================================================================

// Importamos las variables de entorno de forma segura
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`;

// Los permisos que solicitamos a Spotify
const SCOPES = 'user-read-private user-read-email playlist-read-private'; 

// URL base de la API de Spotify para la autorización
const AUTH_URL = 'https://accounts.spotify.com/authorize';
// URL base de la API de Spotify para el intercambio y refresco de tokens
const TOKEN_URL = 'https://accounts.spotify.com/api/token';

//==========================================================================================================

//1. Genera la URL de autorización a la que redirigiremos al usuario.

//Lo que hace esta funcion, es concatenar los parametros necesarios a la URL de autorizacion de Spotify y devolverla.

export function getAuthorizationUrl() {
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: CLIENT_ID,
        scope: SCOPES,
        redirect_uri: REDIRECT_URI,
        state: 'some_random_string' 
    });

    return `${AUTH_URL}?${params.toString()}`;
}


//2. Intercambia el código de autorización por tokens (Access Token y Refresh Token).

//Se llama desde la API Route (server).

export async function exchangeCodeForTokens(code) {
    const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    
    try {
        const response = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authHeader}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: REDIRECT_URI,
            }).toString()
        });

        if (!response.ok) {
            // Lanza un error con el mensaje de Spotify si la petición falla
            const errorData = await response.json();
            throw new Error(`Spotify Token Exchange Failed: ${errorData.error_description || response.statusText}`);
        }

        const data = await response.json();
        return data; 
        
    } catch (error) {
        console.error('Error exchanging code for tokens:', error.message);
        throw error;
    } 
}


/**
 * 3. Usa el Refresh Token para obtener un nuevo Access Token.
 * Se llama desde la API Route (server).
 */
export async function refreshAccessToken(refreshToken) {
    const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

    try {
        const response = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authHeader}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
            }).toString()
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Spotify Token Refresh Failed: ${errorData.error_description || response.statusText}`);
        }

        const data = await response.json();
        return data; 
        /* * Retorna un objeto como: 
         * { 
         * access_token: '...', 
         * token_type: 'Bearer', 
         * expires_in: 3600, 
         * scope: '...' 
         * }
         * Nota: A veces, el refresh_token NO se incluye, hay que seguir usando el original.
         */

    } catch (error) {
        console.error('Error refreshing access token:', error.message);
        throw error;
    }
}