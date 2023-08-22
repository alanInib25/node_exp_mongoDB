import bcryptjs from 'bcryptjs';

export const encrypt = async (passwordPlain) => {
  return await bcryptjs.hash(passwordPlain, 10);
}

export const comparePassword = async (passwordPlain, passwordHashed) => {
  return await bcryptjs.compare(passwordPlain, passwordHashed)
}