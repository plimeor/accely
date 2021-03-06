const TOKEN_KEY = 'ACCELY_CLIENT_TOKEN'

export function setToken(token: string | null): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token ?? '')
  }
}

export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY) || null
  }

  return null
}
