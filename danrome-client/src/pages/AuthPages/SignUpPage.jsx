import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/UserService';

const inputClasses =
  'mt-2 w-full rounded-lg border border-[#d7b6c1] bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-[#9e5d70] focus:ring-4 focus:ring-[#f1dbe2]';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (password.trim().length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    try {
      await createUser({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        age: '18',
        gender: 'other',
        contactNumber: '09123456789',
        email: email.trim().toLowerCase(),
        role: 'editor',
        username: email.trim().toLowerCase().split('@')[0] || firstName.trim().toLowerCase(),
        password,
        address: 'Not set',
        isActive: true,
      });

      setSuccess('Account created. Redirecting to sign in...');
      setTimeout(() => navigate('/auth/signin'), 900);
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to create account.');
    }
  };

  return (
    <section className="overflow-hidden rounded-[1.6rem] border border-[#d6b0be] bg-white shadow-[0_20px_55px_rgba(78,23,44,0.16)]">
      <div className="border-b border-[#ead1da] bg-[#f4e6ec] px-7 py-6 text-zinc-900">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9e5d70]">
          Start Here
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Sign Up
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Create your account with a cleaner card-style registration form.
        </p>
      </div>

      <form className="space-y-5 px-7 py-7" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-semibold text-zinc-800">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="John"
              autoComplete="given-name"
              className={inputClasses}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-semibold text-zinc-800">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Ocray"
              autoComplete="family-name"
              className={inputClasses}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-semibold text-zinc-800">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-semibold text-zinc-800">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create your password"
            autoComplete="new-password"
            className={inputClasses}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-[#d96f8f] to-[#6f63d9] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[#ecd3dc]"
        >
          Create Account
        </button>
        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
        {success ? <p className="text-sm font-medium text-green-700">{success}</p> : null}

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <button
            type="button"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
          >
            Sign Up with Google
          </button>
          <button
            type="button"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
          >
            Sign Up with Apple
          </button>
        </div>

        <div className="border-t border-zinc-200 pt-6 text-center text-sm text-zinc-600">
          Already have an account?{' '}
          <Link
            to="/auth/signin"
            className="font-semibold text-zinc-950 transition hover:text-zinc-600"
          >
            Log In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUpPage;
