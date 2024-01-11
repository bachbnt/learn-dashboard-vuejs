export class RoutePath {
  static readonly HOME = '/'
  static readonly SIGN_IN = '/sign-in'
  static readonly SIGN_UP = '/sign-up'
  static readonly FORGOT_PASSWORD = '/forgot-password'
  static readonly ABOUT = '/about'
  static readonly CALCULATOR = '/calculator'
  static readonly STOCK = '/stock'
  static readonly CRYPTO = '/crypto'
  static readonly NOT_FOUND = '/:pathMatch(.*)*'
}

export class RouteName {
  static readonly HOME = 'home'
  static readonly SIGN_IN = 'signIn'
  static readonly SIGN_UP = 'signUp'
  static readonly FORGOT_PASSWORD = 'forgotPassword'
  static readonly ABOUT = 'about'
  static readonly CALCULATOR = 'calculator'
  static readonly STOCK = 'stock'
  static readonly CRYPTO = 'crypto'
  static readonly NOT_FOUND = '404'
}
