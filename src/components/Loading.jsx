import React from 'react'
import '@styles/Loading.scss'

export const Loading = () => {
  return (
    <div class='container'>
    <div class='loader'>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
        <div class='loader--text'></div>
    </div>
    </div>

  )
}
