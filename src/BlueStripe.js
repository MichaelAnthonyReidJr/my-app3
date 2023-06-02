import React from 'react'
import './BlueStripe.scss'
import { userNameAtom } from './atoms'
import { useRecoilValue } from 'recoil'

export const BlueStripe = () => {
  const userName = useRecoilValue(userNameAtom)
  return (
    <div className = 'BlueStripe'>
      UserName: { userName }
    </div>
  )
}

