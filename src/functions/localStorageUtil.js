export function clearLocalStorage() {
  // solo se debearia eliminar los datos del usuario.
  localStorage.removeItem('user');
  localStorage.removeItem('x-token');
  localStorage.removeItem('email');
}
