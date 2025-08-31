export const handle = async ({ event, resolve }) => {
  const session = event.cookies.get('session');

  if (!session && !event.url.pathname.startsWith('/login') && !event.url.pathname.startsWith('/api/login')) {
    return Response.redirect(new URL('/login', event.url));
  }

  return resolve(event);
};
