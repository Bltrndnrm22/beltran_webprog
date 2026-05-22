import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const inputClasses =
  'mt-2 w-full rounded-lg border border-[#d7b6c1] bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-[#9e5d70] focus:ring-4 focus:ring-[#f1dbe2]';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === 'beltran@example.com' && password === 'beltran123') {
      setError('');
      navigate('/dashboard');
      return;
    }

    setError('Invalid email or password.');
  };

  return (
    <section className="overflow-hidden rounded-[1.6rem] border border-[#d6b0be] bg-white shadow-[0_20px_55px_rgba(78,23,44,0.16)]">
      <div className="border-b border-[#ead1da] bg-[#f4e6ec] px-7 py-6 text-zinc-900">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9e5d70]">
          Welcome Back
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Log In
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Access your account and continue exploring your article space.
        </p>
      </div>

      <form className="space-y-5 px-7 py-7" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="signin-email" className="text-sm font-semibold text-zinc-800">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-semibold text-zinc-800">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use at least 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 accent-zinc-900"
            />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-[#8d5365] transition hover:text-[#5f2f3f]">
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-[#d96f8f] to-[#6f63d9] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[#ecd3dc]"
        >
          Log In
        </button>

        {error ? (
          <p className="text-sm font-medium text-red-600">{error}</p>
        ) : null}

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <button
            type="button"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
          >
            Log In with Google
          </button>
          <button
            type="button"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
          >
            Log In with Apple
          </button>
        </div>

        <div className="border-t border-zinc-200 pt-6 text-center text-sm text-zinc-600">
          No account yet?{' '}
          <Link
            to="/auth/signup"
            className="font-semibold text-zinc-950 transition hover:text-zinc-600"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignInPage;
