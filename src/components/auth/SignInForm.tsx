import { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Password } from 'primereact/password'
import { useAuth } from '../../hooks/useAuth'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'

interface SignInFormProps {
  visible: boolean
  onHide: () => void
}

export function SignInForm({ visible, onHide }: SignInFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const toast = useRef<Toast>(null)
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await signIn(email, password)
      onHide()
      toast.current?.show({ 
        severity: 'success', 
        summary: 'Success', 
        detail: 'Successfully signed in' 
      })
    } catch {
      toast.current?.show({ 
        severity: 'error', 
        summary: 'Error', 
        detail: 'Failed to sign in' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  const footer = (
    <div>
      <Button 
        label="Cancel" 
        icon="pi pi-times" 
        onClick={onHide} 
        className="p-button-text" 
      />
      <Button 
        label="Sign In" 
        icon="pi pi-check" 
        onClick={handleSubmit} 
        loading={isLoading}
      />
    </div>
  )

  return (
    <>
      <Toast ref={toast} />
      <Dialog 
        header="Sign In" 
        visible={visible} 
        style={{ width: '400px' }} 
        footer={footer}
        onHide={onHide}
      >
        <form onSubmit={handleSubmit} className="p-fluid">
          <div className="field">
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleMask
              feedback={false}
              required
            />
          </div>
        </form>
      </Dialog>
    </>
  )
}