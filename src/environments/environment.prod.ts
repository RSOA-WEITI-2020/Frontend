class Environment {
  get production() {
    return true;
  }

  get authBaseUrl() {
    return `${window.location.origin}/auth`;
  }

  get taskBaseUrl() {
    return `${window.location.origin}/task`;
  }

  get paymentBaseUrl() {
    return `${window.location.origin}/payment`;
  }
}

export const environment = new Environment();
