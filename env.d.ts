/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_APIKEY: string;
    readonly PUBLIC_AUTHDOMAIN: string;
    readonly PUBLIC_PROJECTID: string;
    readonly PUBLIC_STORAGEBUCKET: string;
    readonly PUBLIC_MESSAGINGSENDERID: string;
    readonly PUBLIC_APPID: string;
    readonly PUBLIC_MEASUREMENTID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}