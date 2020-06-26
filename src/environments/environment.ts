class Environment {
  get production() {
    return false;
  }

  get authBaseUrl() {
    return 'http://localhost:5000';
  }

  get taskBaseUrl() {
    return 'http://localhost:5001';
  }

  get paymentBaseUrl() {
    return 'http://localhost:5002';
  }
}

export const environment = new Environment();
