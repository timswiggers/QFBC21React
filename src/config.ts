export type Configuration = {
    environment: string;
};

export async function fetchConfig(baseUrl: string) {
    const configResponse = await fetch(`${baseUrl}config.json`);
    const config = (await configResponse.json()) as Configuration;

    return config;
}
