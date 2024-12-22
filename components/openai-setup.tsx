import { openAIKeyAtom, openAIHostAtom } from "@/lib/atoms/openai"
import { useSetAtom } from "jotai"
import React from "react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface OpenAISetupProps {}

export default function OpenAISetup({}: OpenAISetupProps) {
  const setOpenAIKey = useSetAtom(openAIKeyAtom)
  const setOpenAIHost = useSetAtom(openAIHostAtom)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const hostInputRef = React.useRef<HTMLInputElement>(null)

  const onClick = () => {
    const input = inputRef.current
    console.log('apikey input', input.value)
    if (!input) return
    setOpenAIKey(input.value)
    console.log('host input', hostInputRef?.current.value)
    if (!hostInputRef?.current.value) return
    setOpenAIHost(hostInputRef.current.value)
  }

  return (
    <div className="flex flex-row w-full justify-between items-center sticky top-0 z-10 bg-white dark:bg-[#0f0f0f] pt-3.5 pb-2 px-3">
      <div className="grid gap-4 w-full p-3 border-[0.5px] rounded-md border-zinc-200 dark:border-zinc-800  group">
        <Label htmlFor="apiKey">API Key</Label>
        <Input
          ref={inputRef}
          id="apiKey"
          type="password"
          placeholder="Enter your OpenAI API key"
        />
        <Label htmlFor="apiKey">HOST</Label>
        <Input
          ref={hostInputRef}
          id="host"
          type="text"
          placeholder="https://api.openai.com/v1"
        />
        <div className="flex justify-center items-center w-full p-3 bg-white dark:bg-[#0f0f0f]">
          <Button variant="outline" className="w-full h-12" onClick={onClick}>
            <span className="text-sm">Save API Key</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
