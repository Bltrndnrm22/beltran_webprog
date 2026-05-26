import Button from '../assets/components/Button';

function NotFoundPage() {
  return (
    <div className="flex w-full justify-center bg-[#d8edf7] px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border-2 border-zinc-900 bg-[#f7f8fb] shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
        <div className="h-12 w-full border-b-2 border-zinc-900 bg-[#4e7ed8] sm:h-14">
          <div className="flex h-full items-center gap-3 px-6">
            <span className="h-3.5 w-3.5 rounded-full bg-white/95"></span>
            <span className="h-3.5 w-3.5 rounded-full bg-white/95"></span>
            <span className="h-3.5 w-3.5 rounded-full bg-white/95"></span>
          </div>
        </div>

        <div className="grid min-h-[520px] items-center gap-10 px-6 py-14 sm:px-10 md:grid-cols-[240px_1fr]">
          <div className="mx-auto">
            <div className="relative h-56 w-44">
              <div className="absolute left-12 top-2 h-14 w-20 rounded-t-full rounded-b-[1.2rem] border-2 border-zinc-900 bg-[#2b3a62]"></div>
              <div className="absolute left-10 top-10 h-24 w-24 rounded-full border-2 border-zinc-900 bg-[#ffe4cc]">
                <div className="absolute left-5 top-10 h-2.5 w-2.5 rounded-full bg-zinc-900"></div>
                <div className="absolute right-5 top-10 h-2.5 w-2.5 rounded-full bg-zinc-900"></div>
                <div className="absolute left-1/2 top-14 h-1.5 w-4 -translate-x-1/2 rounded-full bg-zinc-900"></div>
                <div className="absolute left-1/2 top-18 h-2 w-7 -translate-x-1/2 rounded-full border-2 border-zinc-900 bg-[#ffc8b6]"></div>
              </div>
              <div className="absolute left-11 top-[7.2rem] h-24 w-22 rounded-2xl border-2 border-zinc-900 bg-[#7ca6ff]"></div>
              <div className="absolute left-2 top-[7.7rem] h-12 w-10 rotate-[-20deg] rounded-full border-2 border-zinc-900 bg-[#ffe4cc]"></div>
              <div className="absolute right-2 top-[7.7rem] h-12 w-10 rotate-[20deg] rounded-full border-2 border-zinc-900 bg-[#ffe4cc]"></div>
              <div className="absolute left-[2.8rem] top-[12.3rem] h-16 w-8 rounded-full border-2 border-zinc-900 bg-[#2f4f95]"></div>
              <div className="absolute right-[2.8rem] top-[12.3rem] h-16 w-8 rounded-full border-2 border-zinc-900 bg-[#2f4f95]"></div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-[86px] font-black leading-none tracking-tight text-[#132b57] sm:text-[130px]">
              404
            </h1>
            <p className="mt-1 text-2xl font-semibold text-[#132b57] sm:text-4xl">
              Page Not Found
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Sorry, the page you are trying to visit does not exist or may have been moved.
            </p>
            <div className="mt-8">
              <Button to="/">Back Home</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;
