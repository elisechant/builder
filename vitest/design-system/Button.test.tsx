import {describe, expect, test} from 'vitest'
import Button from '@/design-system/Button'
import {render} from '@testing-library/react'

const renderButton = (props = {}) => render(<Button {...props}>text</Button>)

describe('Button', () => {
  describe('style variants', function () {
    test('happy path', () => {
      expect(renderButton()).toMatchSnapshot()
    })
    test('block', () => {
      expect(renderButton({ block: true })).toMatchSnapshot()
    })
    test('color', function() {
      expect(renderButton({ color: 'primary' })).toMatchSnapshot()
      expect(renderButton({ color: 'secondary' })).toMatchSnapshot()
      expect(() => renderButton({ color: 'tertiary' })).toThrowError()
    })
    test('size', function() {
      expect(renderButton({ size: 'sm' })).toMatchSnapshot()
      expect(renderButton({ size: 'lg' })).toMatchSnapshot()
      expect(() => renderButton({ size: 'md' })).toThrowError()
    })
  });
})
