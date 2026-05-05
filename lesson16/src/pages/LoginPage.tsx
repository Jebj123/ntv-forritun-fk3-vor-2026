import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '@/auth/useAuth';
import { FormEvent } from 'react';


const defaultAfterLogin = '/members';

interface LocationState {
    from?: {pathname: string};
}


const LoginPage = () => {
    const {login, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as LocationState | null;
    const redirectTo = state?.from?.pathname || defaultAfterLogin;

    if (isAuthenticated) {
        return <Navigate to={redirectTo} replace />
    }

function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login();
    navigate(redirectTo, {replace: true});
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 rounded-2xl">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">    
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2 underline" htmlFor="username" placeholder="Username">Username</label>
                    <input className="w-full px-3 py-2 border rounded hover:border-black" type="text" id="username" name="username" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2 underline" htmlFor="password" placeholder="Password">Password</label>
                    <input className="w-full px-3 py-2 border rounded hover:border-black" type="password" id="password" name="password" placeholder="Password" />
                </div>
                <button className="w-full bg-gray-100 border text-black py-2 rounded hover:bg-white hover:border-blue-500 hover:scale-101 transition-colors" type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage