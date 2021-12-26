enum AppRoute {
  Main = '/',
  Guitars = '/guitars',
}

enum ApiRoute {
  Guitars = '/guitars',
}

enum ServiceMessage {
  ServerFail = 'Сервер не отвечает, попробуйте позже',
}

enum StarType {
  Default = 'DEFAULT',
  Product ='PRODUCT',
}

export {AppRoute, ApiRoute, ServiceMessage, StarType};
