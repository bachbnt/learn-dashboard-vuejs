import Cookies from 'universal-cookie'

export class Cookie {
  static readonly ACCESS_TOKEN = 'access_token'

  private uCookie = new Cookies()

  setItem(key: string, value: any) {
    this.uCookie.set(key, value, { path: '/' })
  }

  getItem(key: string): any {
    return this.uCookie.get(key)
  }

  hasItem(key: string): boolean {
    return !!this.uCookie.get(key)
  }

  removeItem(key: string) {
    this.uCookie.remove(key)
  }
}

export const cookie = new Cookie()
