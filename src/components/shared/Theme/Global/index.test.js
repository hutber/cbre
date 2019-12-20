import React from 'react'
import { shallowWithIntl as shallow } from 'utils/testHelper'

import Theme from '.'

describe('components | Theme', () => {
  it('renders component', () => {
    const component = shallow(
      <Theme>
        <span>I'm themed!</span>
      </Theme>
    )

    expect(component).toMatchSnapshot()
  })
})
