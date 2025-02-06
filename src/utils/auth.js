export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "fake-jwt-token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Fake User", email: "fake@example.com", id: "fake-id" },
    });
  });
};

export const register = (email, password, username) => {
  return new Promise((resolve, reject) => {
    resolve({
      user: {
        name: username,
        email: email,
        id: "fake-user-id",
      },
    });
  });
};
