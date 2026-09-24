import { useEffect, useRef, useState } from 'react'
import { FiPlay, FiPause, FiSkipForward } from 'react-icons/fi'
import './player.css'
import playlist from './playlist'

const Player = () => {
  const audioRef = useRef(null)
  const resumeRef = useRef(false)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  const track = playlist[index]

  useEffect(() => {
    if (resumeRef.current) audioRef.current?.play().catch(() => {})
  }, [index])

  if (!track) return null

  const toggle = () => {
    const audio = audioRef.current
    if (audio.paused) audio.play().catch(() => {})
    else audio.pause()
  }

  const advance = (keepPlaying) => {
    resumeRef.current = keepPlaying
    setIndex((current) => (current + 1) % playlist.length)
  }

  return (
    <div className='player' role='group' aria-label='Background music'>
      <audio
        ref={audioRef}
        src={track.src}
        preload='none'
        loop={playlist.length === 1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => advance(true)} />

      <button
        type='button'
        className='player__toggle'
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        aria-pressed={playing}>
          {playing ? <FiPause /> : <FiPlay />}
      </button>

      <div className='player__info'>
        <span className='player__title'>{track.title}</span>
        <span className='player__artist'>{track.artist}</span>
      </div>

      <span className={playing ? 'player__bars player__bars--on' : 'player__bars'} aria-hidden='true'>
        <i></i><i></i><i></i>
      </span>

      {playlist.length > 1 && (
        <button type='button' className='player__next' onClick={() => advance(playing)} aria-label='Next track'>
          <FiSkipForward />
        </button>
      )}
    </div>
  )
}

export default Player
