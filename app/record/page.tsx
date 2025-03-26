'use client'
import { useQuery } from '@tanstack/react-query'
import sendAudioToAPI from '../lib/send-audio'
import useRecord from '@/hooks/useRecord'
import { useState } from 'react'

const AudioRecorder = () => {
  const { startRecording, stopRecording, isRecording, audioBlob } = useRecord()
  const [transformToText, setTransformToText] = useState('')

  const handleUpload = async () => {
    if (!audioBlob) return
    const transformedVoice = await refetch()
    setTransformToText(transformedVoice.data ?? '')
  }

  const { data, refetch, isFetching } = useQuery<string>({
    queryKey: ['records'],
    queryFn: async () => {
      if (!audioBlob) return ''
      return await sendAudioToAPI(audioBlob)
    },
    enabled: false,
    staleTime: 5 * 1000,
  })

  return (
    <div className="p-4">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`rounded px-4 py-2 ${isRecording ? 'bg-red-500' : 'bg-blue-500'} text-white`}>
        {isRecording ? '녹음 중지' : '녹음 시작'}
      </button>
      {audioBlob && (
        <button
          onClick={handleUpload}
          className="ml-4 rounded bg-green-500 px-4 py-2 text-white"
          disabled={isFetching}>
          {isFetching ? '변환 중...' : '변환 요청'}
        </button>
      )}

      <div className="text-3xl font-semibold caret-red-400">
        {transformToText}
      </div>
    </div>
  )
}

export default AudioRecorder
