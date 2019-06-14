import { Schema } from 'mongoose';

export const roles = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} no es un rol permitido.',
};

export const UserSchema: Schema = new Schema({
  id: { type: String, required: [true, 'Identificación - Dato requerido'], unique: true },
  name: { type: String, required: [true, 'Nombre - Dato requerido'] },
  surname: { type: String, required: [true, 'Apellido - Dato requerido'] },
  username: { type: String, required: [true, 'Nombre de usuario - Dato requerido'], unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: roles, default: 'USER_ROLE', required: [true, 'Rol - Dato requerido'] },
  logged: { type: Boolean, default: false },
  status: { type: Boolean, default: true },
});
