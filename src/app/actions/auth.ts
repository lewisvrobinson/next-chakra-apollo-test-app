'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { SESSION_COOKIE_NAME } from '@/constansts';

type FieldErrors = {
  [fieldName: string]: string;
};

export type FormState = {
  errors: FieldErrors;
};

function fieldIsValid(value: unknown) {
  return Boolean(value && typeof value === 'string' && value.trim().length > 0);
}

function validateLoginForm(formData: FormData) {
  const errors = {} as FieldErrors;
  const fields = ['username', 'title'];

  for (const field of fields) {
    const value = formData.get(field);
    const isValid = fieldIsValid(value);

    if (!isValid) {
      errors[field] = 'This field is required';
    }
  }

  return { errors };
}

export async function login(_formState: FormState, formData: FormData) {
  // Validate the login form and return any errors
  const { errors } = validateLoginForm(formData);

  // If there are errors, return them to the client
  if (errors) return { errors };

  // Create a new session object
  const session = {
    username: formData.get('username'),
    title: formData.get('title'),
  };

  // Set the session cookie – this will be used to authenticate the user
  // NOTE: If this was sensitive data, we would encrypt it before storing it in the cookie
  cookies().set({
    name: SESSION_COOKIE_NAME,
    value: JSON.stringify(session),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 365 * 1000,
    expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
    path: '/',
  });

  redirect('/');
}
