export interface StreamSource {
    "id": number,
    "name": string,
    "type": string,
    "logo_100px": string,
    "ios_appstore_url": string,
    "android_playstore_url": string,
    "android_scheme": string,
    "ios_scheme": string,
    "regions": string[]
}

export interface SearchBarResult {
    "name": string,
    "relevance": number,
    "type": string,
    "id": number,
    "year": number,
    "result_type": string,
    "imdb_id": string,
    "tmdb_id": number,
    "tmdb_type": string,
    "image_url": string
}

export interface StreamSourceTitleInfo {
    "source_id": number,
    "name": string,
    "type": string,
    "region": string,
    "ios_url": string,
    "android_url": string,
    "web_url": string,
    "format": string,
    "price": number,
    "seasons": number,
    "episodes": number
}