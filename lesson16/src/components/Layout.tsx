import { NavLink, Outlet } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import MembersPage from '@/pages/MembersPage';

function navButtonClassName(isActive: boolean) {
  return [
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-primary text-primary-foreground'
      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
  ].join(' ');
}

export function Layout() {
  return (
    <div className="bg-background min-h-screen">
      <header className="border-border bg-card/50 border-b backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <p className="text-foreground text-sm font-semibold tracking-tight">
            Lesson 16
          </p>
          <nav className="flex flex-wrap items-center gap-2" aria-label="Main navigation">
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
            <SignedOut>
              <SignInButton className="bg-gray-100 text-black rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer" />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <NavLink
                to="/members"
                className={({ isActive }) => navButtonClassName(isActive)}
              >
                Members
              </NavLink>
              <UserButton />
            </SignedIn>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8"><Outlet /></main>
    </div>
  );
}
