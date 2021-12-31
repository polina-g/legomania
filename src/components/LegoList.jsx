import React from 'react'
import './ListStyles.scss'

export default function LegoList({list}) {
  console.log(list)
  return (
    <ol className="ordered-list">
      {list.length && list.map((item) => (
        item
      ))}
    </ol>
  )
}