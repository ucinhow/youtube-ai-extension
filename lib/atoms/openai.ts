import { atomWithPlasmoStorage } from "./atom-with-plasmo-storage"

export const openAIKeyAtom = atomWithPlasmoStorage<string | null>("openAIKey", null)
export const openAIHostAtom = atomWithPlasmoStorage<string | null>("openAIHost", 'https://api.openai.com/v1')