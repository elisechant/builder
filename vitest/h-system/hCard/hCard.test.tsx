import {describe, expect, test} from 'vitest'
import HCard from '@/h-system/hCard/HCard'
import {render} from '@testing-library/react'

const mock =  {
  id: 'V1StGXR8_Z5jdHi6B-myT',
  componentKey: 'hCard',
  props: {
    firstName: 'Alec',
    lastName: 'Lynch',
    email: 'alec@design.com',
    phone: '0255552626',
    addressStreetNumber: '2',
    addressStreet: 'Hill St',
    addressSuburb: 'Surry Hills',
    addressState: 'NSW',
    addressPostcode: '2010',
    addressCountry: 'Australia',
    avatar: {
      dataUrl: 'data:image/png;base64,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',
      width: '80px',
      height: '100px',
      size: 300,
    }
  },
  updatedAt: '2024-04-15T00:19:09.877Z'
}

const renderHCard = (props = {}) => render(<HCard {...props} />)

describe('Button', () => {
  test('happy path', () => {
    expect(render(<HCard {...mock.props} />)).toMatchSnapshot()
  })
  test('can render with incomplete data', () => {
    expect(render(<HCard firstName={mock.props.firstName} phone={mock.props.phone} />)).toMatchSnapshot()
    expect(render(<HCard avatar={mock.props.avatar} />)).toMatchSnapshot()
  })
})