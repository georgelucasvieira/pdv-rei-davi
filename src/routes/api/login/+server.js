import { json } from '@sveltejs/kit';
import { AUTH_SECRET } from '$env/static/private';

export async function POST({ request, cookies }) {
  const { password } = await request.json();

  if (password === AUTH_SECRET) {
    // cria cookie válido por 12 horas
    cookies.set('session', 'authenticated', {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 12 // 12h
    });

    return json({ success: true });
  }

  return new Response('Unauthorized', { status: 401 });
}
