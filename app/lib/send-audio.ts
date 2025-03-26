'use server'
const sendAudioToAPI = async (audioBlob: Blob) => {
  const formData = new FormData()
  formData.append('file', audioBlob, 'audio.wav')
  formData.append('model', 'whisper-1')

  try {
    const response = await fetch(
      'https://api.openai.com/v1/audio/transcriptions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: formData,
      },
    )

    const data = await response.json()
    return data.text
  } catch (error) {
    console.log('녹음 데이터 변환 실패: ', error)
    throw new Error('데이터 변환 실패')
  }
}

export default sendAudioToAPI
