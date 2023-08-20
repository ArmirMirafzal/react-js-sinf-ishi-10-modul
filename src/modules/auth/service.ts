import { auth, googleProvider } from 'config'
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile as baseUpdateProfile, User } from 'firebase/auth'

import { IForm } from './types'

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider)

export const logout = () => auth.signOut()

export const register = ({ email, password }: Pick<IForm.Register, 'email' | 'password'>) => createUserWithEmailAndPassword(auth, email, password)

export const updateProfile = (user: User, { name, avatarURL }: Omit<IForm.Register, 'email' | 'password'>) => baseUpdateProfile(user, { displayName: name, photoURL: avatarURL })
