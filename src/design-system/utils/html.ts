export const convertFileToBase64 = (file: File): Promise<{ dataUrl: string }> => {
  return new Promise((res, rej) => {
    const reader = new FileReader()
    reader.onload = () => {
      res({ dataUrl: String(reader.result) })
    }
    setTimeout(() => {
      rej('Timed out')
    }, 1000)
    reader.readAsDataURL(file)
  })
}

export const getImageDimensions = (imageStr: string): Promise<{ width: number, height: number }> => {
  return new Promise((res, rej) => {
    const image = new Image()
    image.onload = function() {
      res({ width: image.naturalWidth, height: image.naturalHeight })
    }
    setTimeout(() => {
      rej('Timed out')
    }, 1000)
    image.src = imageStr
  })
}
