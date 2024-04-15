import {useRef} from "react"
import type {ReactNode} from "react"
import Button from "@/components/elements/Button"
import type {ButtonProps} from "@/components/elements/Button"
import Input from "@/components/elements/Input"
import {convertFileToBase64, getImageDimensions} from "@/utils/html";
import type {HTMLFileInputEvent} from "@/type-utils/html";

export type Base64Image = {
  dataUrl: string
  height: number
  width: number
  size: number
}

type Props = {
  onFile: (data: Base64Image) => unknown
  btnProps?: Omit<ButtonProps, 'children'>
  children: ReactNode
}

export const FileUploadButton = ({ btnProps = {}, children, onFile }: Props) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const triggerUpload = () => {
    if (fileRef.current) {
      fileRef.current.click()
    }
  }

  const processFile = async (file: File) => {
    const { dataUrl } = await convertFileToBase64(file)
    const { height, width } = await getImageDimensions(dataUrl)
    const data = {
      dataUrl,
      height,
      width,
      size: file.size
    }
    onFile(data)
  }

  const handleFileChange = async (e: HTMLFileInputEvent) => {
    try {
      e.preventDefault()
      const file = e.currentTarget.files[0]
      if (!file) {
        return
      }
      if (file.type !== 'image/png') {
        throw new Error('Only png is allowed')
      }
      await processFile(file)
    } catch (error) {
      console.error(error)
    } finally {
      if (fileRef.current) {
        fileRef.current.value = ''
      }
    }
  }

  return (
    <>
      <Input type={'file'} id={'file'} ref={fileRef} hidden onChange={handleFileChange} data-testid={'file-input'} />
      <Button type={'button'} {...btnProps} data-testid={'file-upload-btn'} onClick={triggerUpload}>{children}</Button>
    </>
  )
}
