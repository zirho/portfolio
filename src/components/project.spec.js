import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'

import { Project } from './projects'

describe('Project', () => {
  it('should render a project name', () => {
    const item = {
      name: 'testing name'
    }
    const wrapper = render(<Project project={item} />)

    expect(wrapper).to.have.text(' testing name')
  })
})
