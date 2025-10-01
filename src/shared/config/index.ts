import { z } from "zod";

export const envSchema = { VITE_GITHUB_REPO_LINK: z.url() };

export const env = (key: keyof typeof envSchema) =>
    //eslint-disable-next-line
    //@ts-ignore
    import.meta.env[key] as string;
