type User = {
  username: string;
  password: string | number;
};
type VerifyUserFn = (user: User, sentValues: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const dbUser: User = {
  username: 'joao',
  password: '123',
};

const sentUser: User = {
  username: 'joao',
  password: '123',
};

const sentUser2: User = {
  username: 'joao',
  password: 1,
};

console.log(verifyUser(dbUser, sentUser));
console.log(verifyUser(dbUser, sentUser2));
