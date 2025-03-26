import { useRef, useState } from 'react'

export default function useRecord() {
  const [isRecording, setIsRecording] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const recorder = new MediaRecorder(stream)
    const chunks: Blob[] = []

    recorder.ondataavailable = event => chunks.push(event.data)
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/wav' })
      setAudioBlob(blob)

      stream.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }

    recorder.start()
    mediaRecorderRef.current = recorder
    streamRef.current = stream
    setIsRecording(true)
  }

  const stopRecording = () => {
    mediaRecorderRef.current?.stop()
    setIsRecording(false)
  }

  return {
    isRecording,
    audioBlob,
    startRecording,
    stopRecording,
  }
}
