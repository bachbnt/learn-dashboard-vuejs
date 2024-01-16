import type { UserRole } from './UserRole'

export interface User {
  _id: string
  email: string
  fullName: string
  role: UserRole
}
