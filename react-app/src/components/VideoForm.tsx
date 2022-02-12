import React, { useState } from "react"
import { postVideoUrl } from '../lib/api/youtube';
import { Url } from '../interfaces/index';

interface VideoFormProps {
  urls: Url[]
  setUrls: Function
}

export const VideoForm: React.FC = () => {
  const [url, setUrl] = useState<string>("")

  const handlePostVideoUrl = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: Url = {
      url: url
    }

    try {
      const response = await postVideoUrl(data)
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // setUrl(url)
  }

  return (
    <form onSubmit={handlePostVideoUrl}>
      <input 
      type="url" 
      placeholder="https://example.com/vid=***" 
      pattern="https://.*" 
      value={url} 
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value)
      }}
      required />
      <input type="submit" value="Send" disabled={!url} />
    </form>
  )
}