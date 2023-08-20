import React from 'react'
import { auth } from 'config'

import { IContext } from '../types'
import { Mappers } from '..'

export const useProfile = () => {
  const [state, setState] = React.useState<IContext.Auth>({
    user: null,
    isLoading: true,
    isAuthenticated: false
  })

  React.useEffect(() => {
    auth.onAuthStateChanged(res => {
      const user = res ? Mappers.User(res) : null

      setState({ user, isLoading: false, isAuthenticated: !!user })
    })
  }, [])

  return [state, setState] as const
}
