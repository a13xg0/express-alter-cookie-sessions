export interface User {
  id: string
  name: string
  email: string
  password: string
  shortSession: boolean
}

export const users: User[] = [
  {
    id: '1',
    name: 'Alice',
    email: 'alice@example.com',
    password: 'password',
    shortSession: false,
  },
  {
    id: '2',
    name: 'Bob',
    email: 'bob@example.com',
    password: 'password',
    shortSession: true,
  },
]
