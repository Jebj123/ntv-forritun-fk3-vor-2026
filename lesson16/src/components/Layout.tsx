import { useAuth } from '@/auth/useAuth';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function navButtonClassName(isActive: boolean) {
  return [
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-primary text-primary-foreground'
      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
  ].join(' ');
}

export function Layout() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div className="bg-background min-h-screen">
      <header className="border-border bg-card/50 border-b backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <p className="text-foreground text-sm font-semibold tracking-tight">
            Lesson 16
          </p>
          <nav className="flex flex-wrap gap-2" aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => navButtonClassName(isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => navButtonClassName(isActive)}
            >
              About
            </NavLink>
            {isAuthenticated && (
              <NavLink
                to="/members"
                className={({ isActive }) => navButtonClassName(isActive)}
              >
                Members
              </NavLink>
            )}
            {isAuthenticated ? (
              <button
                type="button"
                className={navButtonClassName(false)}
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => navButtonClassName(isActive)}
              >
                Login
              </NavLink>
            )}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8"><Outlet /></main>
    </div>
  );
}
