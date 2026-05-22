import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 overflow-hidden bg-zinc-800 text-zinc-100">
      <div className="absolute inset-x-0 top-0 h-24 bg-zinc-100 [clip-path:polygon(0_0,100%_0,100%_25%,0_100%)]"></div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-wide">Danrome</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Portfolio projects and article entries focused on clean UI and practical frontend work.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-zinc-300">
              {quickLinks.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-zinc-300">
              <p>Based in the Philippines</p>
              <p>Email: your-email@example.com</p>
            </div>
            <div className="mt-5">
              <label htmlFor="newsletter" className="mb-2 block text-sm font-semibold text-zinc-100">
                Stay Updated
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Your email address"
                  className="w-full border-2 border-zinc-700 bg-zinc-100 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-300"
                />
                <button
                  type="button"
                  className="border-2 border-zinc-900 bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  Sign up
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-zinc-700 pt-5 text-sm text-zinc-400">
          <p>{`© ${year} Danrome. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
