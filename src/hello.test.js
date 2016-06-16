// import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'

import { Hello } from './hello'

describe('Hello', () => {
  it('should render text', () => {
    const wrapper = render(<Hello />)

    expect(wrapper).to.have.text('Hello world.')
  })
})
