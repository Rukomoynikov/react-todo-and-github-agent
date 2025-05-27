import { useState } from 'react'
import { Button } from 'primereact/button'
import { useAuth } from '../../hooks/useAuth'
import { SignInForm } from './SignInForm'
import { SignUpForm } from './SignUpForm'

export function AuthButtons() {
  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)
  const { user, signOut } = useAuth()

  return (
    <div className="flex gap-2">
      {user ? (
        <Button 
          label="Sign Out" 
          icon="pi pi-sign-out" 
          onClick={signOut}
          className="p-button-text"
        />
      ) : (
        <>
          <Button 
            label="Sign In" 
            icon="pi pi-sign-in" 
            onClick={() => setSignInVisible(true)}
            className="p-button-text"
          />
          <Button 
            label="Sign Up" 
            icon="pi pi-user-plus" 
            onClick={() => setSignUpVisible(true)}
            className="p-button-text"
          />
          <SignInForm 
            visible={signInVisible} 
            onHide={() => setSignInVisible(false)} 
          />
          <SignUpForm 
            visible={signUpVisible} 
            onHide={() => setSignUpVisible(false)} 
          />
        </>
      )}
    </div>
  )
}