// Tipagem estruturada.
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

// Verificação
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

// Simulando a Base de Dados
const bdUser = { username: 'Ewerton', password: '2023' };

// Simulando o POST do Front
const sentUser = { username: 'Ewerton', password: '2023' };

// Enviando
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
