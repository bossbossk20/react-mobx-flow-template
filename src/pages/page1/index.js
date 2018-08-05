import React from 'react'
import Button from '../../components/Button'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

type Props = {}

const Page1 = (props: Props) => {
  const { ExampleStore } = props
  return (
    <div>
      <h1>{ExampleStore.exampleData.text}</h1>
      <h1>Page1 </h1>
      <Button text='Click' />
    </div>
  )
}


export default compose(
  inject('ExampleStore'),
  observer
)(Page1)
