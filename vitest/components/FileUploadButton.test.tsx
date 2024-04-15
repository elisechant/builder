import {expect, test, describe, vi} from 'vitest'
import {render, screen, waitFor, fireEvent} from '@testing-library/react'
import {FileUploadButton} from "@/components/builder/FileUploadButton";

const renderButton = (onFile = () => {}) => {
  render(<FileUploadButton onFile={onFile}>Upload</FileUploadButton>)
}

describe('FileUploadButton', () => {
  test('render happy path', () => {
    renderButton()
    expect(screen.getByTestId('file-input')).toHaveClass('sr-only')
    expect(screen.getByTestId('file-upload-btn')).toBeVisible()
  })

  test('uploads to input', async () => {
    const file = new File(['foo'], 'foo.png', {type: 'image/png'})
    const cb = vi.fn()

    renderButton(cb)
    const input = screen.getByTestId('file-input')

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    expect(input.files[0]).toStrictEqual(file)
    // FIXME - Image does not fire onload in jsdom https://github.com/jsdom/jsdom/issues/1816
    // expect(cb).toHaveBeenCalled()
  })
})
