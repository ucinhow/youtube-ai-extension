import OpenAI from "openai"

export const createLlm = (apiKey: string, host?: string) =>
  new OpenAI({
    apiKey,
    baseURL: host
  })
