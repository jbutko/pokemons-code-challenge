'use client'

import { PauseOutlineFilled, PlayFilledAlt } from '@carbon/icons-react'
import { IconButton } from '@carbon/react'
import { useEffect, useState } from 'react'

type TProps = {
  url: string
}

export const PlaySound: React.FC<TProps> = ({ url }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!url) return
    const newAudio = new Audio(url)
    setAudio(newAudio)
    newAudio.addEventListener('playing', () => setIsPlaying(true))
    newAudio.addEventListener('pause', () => setIsPlaying(false))
    newAudio.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      newAudio.removeEventListener('playing', () => setIsPlaying(true))
      newAudio.removeEventListener('pause', () => setIsPlaying(false))
      newAudio.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [url])

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      await audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <IconButton isSelected={isPlaying} kind="ghost" label={isPlaying ? 'Stop' : 'Play'} onClick={handleClick}>
      {isPlaying ? <PauseOutlineFilled /> : <PlayFilledAlt />}
    </IconButton>
  )
}
