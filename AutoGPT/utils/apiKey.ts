const OPENAI_LS_KEY = "OPENAI_API_KEY";
const OPENAI_API_BASE_URL = "OPENAI_API_BASE_URL";

export function getAPIKey() {
    return window.localStorage.getItem(OPENAI_LS_KEY);
}

export function setAPIKey(apiKey: string) {
    window.localStorage.setItem(OPENAI_LS_KEY, apiKey);
}

export function getAPIBaseURL(){
    return window.localStorage.getItem(OPENAI_API_BASE_URL);
}

export function setAPIBaseURL(apiBaseURL: string) {
    window.localStorage.setItem(OPENAI_API_BASE_URL, apiBaseURL);
}