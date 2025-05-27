import { createContext } from 'react'
import type { AuthContextType } from '../types/auth'

// Create context with default undefined value
export const AuthContext = createContext<AuthContextType | undefined>(undefined)