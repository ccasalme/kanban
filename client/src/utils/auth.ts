import jwtDecode from 'jwt-decode';

interface DecodedToken {
  userId: number;
  username: string;
  exp: number; // expiration time in seconds
}

class AuthService {
  // Return decoded user data
  getProfile(): DecodedToken | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }

  // Check if the user is logged in
  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check if the token is expired
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      if (!decoded.exp) return true;

      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    } catch (error) {
      return true;
    }
  }

  // Get the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('id_token');
  }

  // Log in by saving the token and redirecting
  login(idToken: string): void {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Log out by removing the token and redirecting
  logout(): void {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
