import { Link, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#f2d8df] px-4 py-8 text-zinc-900 sm:px-6 lg:px-10">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl overflow-hidden rounded-[2rem] border-2 border-[#9e5d70] bg-[#eed0d8] shadow-[0_28px_70px_rgba(70,20,40,0.2)] lg:grid-cols-[1fr_1.05fr]">
        <div className="relative flex items-center justify-center bg-[#b86a81] p-8 text-white sm:p-12">
          <div className="max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f8e5eb]">Login Quote</p>
            <blockquote className="mt-4 text-2xl font-bold leading-relaxed sm:text-3xl">
              "Every login is a fresh start."
            </blockquote>
          </div>
          <div className="absolute -bottom-10 -right-8 hidden h-52 w-52 rounded-full border-8 border-white/50 bg-[#f6dbe2] lg:block">
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7899ff]" />
          </div>
        </div>

        <main className="flex items-center bg-[#f8f3f5] px-6 py-10 sm:px-10 lg:px-14">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
            <div className="mt-6">
              <Link
                to="/"
                className="rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-zinc-500 hover:text-zinc-950"
              >
                Back Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
