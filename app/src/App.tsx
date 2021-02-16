import React, { ReactElement } from 'react'
import './App.scss'
import { add } from './add'
import Item from './Item'

interface Props {
  message: string
}
export default function App({ message }: Props): ReactElement {
  console.log('App render')
  if (message === 'poop') throw message
  return (
    <>
      <h1>
        {message} {add(3, 4)}
      </h1>
      <Item />
    </>
  )
}
