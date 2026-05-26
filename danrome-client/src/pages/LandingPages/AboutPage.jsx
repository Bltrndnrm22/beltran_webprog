import Button from '../../assets/components/Button';

const AboutPage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
                        <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img
                                src="/logoko.jpg"
                                className="h-90 w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                            About Me
                        </p>
                        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                            Passionate Developer and Designer Creating Clear and Meaningful Digital Experiences
                        </h1>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                            I’m a developer and designer with a strong interest in building simple, user-friendly digital products. I focus on turning ideas into clean and functional solutions through thoughtful design and structured development. 
                        </p>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                            As a student, I’ve worked on projects ranging from e-commerce systems to safety-focused applications like SafeRoute. Through these experiences, I continue to improve both my technical and design skills while solving real-world problems.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button to="/" variant="primary">
                                Back Home
                            </Button>
                            <Button to="/articles">View My Work</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Profile Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                        Quick summary blocks
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">5</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Projects Built
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">10</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Tools & Technologies
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">User-Focused Design</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Approach
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-2xl font-bold text-zinc-900">Building Practical Applications</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Current Focus
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Featured Projects</p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Project Highlights</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img src="/campus.png" alt="Campus Navigation System" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Campus Navigation System</h3>
                        <p className="mt-2 text-sm text-zinc-600">A student-focused navigation platform that helps users find classrooms, offices, and facilities easily using a simple and interactive map interface.</p>
                    </article>
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="aspect-4/3 overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img src="/food.png" alt="Food Ordering App" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Food Ordering App</h3>
                        <p className="mt-2 text-sm text-zinc-600">An online food ordering system designed for students, allowing quick browsing, easy checkout, and a smooth ordering experience for everyday meals.</p>
                    </article>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                            Section Flow
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Stacked content wireframe</h2>
                        
                        <div className="mt-6 space-y-4">
                            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                                <h3 className="text-lg font-semibold text-zinc-900">Intro Block</h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-600">
                                    I'm Danrome Beltran, a developer from National University with a passion for combining design and technology. I enjoy creating projects that are not only functional but also easy to understand and use.
                                </p>
                            </article>

                            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                                <h3 className="text-lg font-semibold text-zinc-900">Experience Block</h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-600">
                                    As a student, I’ve worked on different academic and personal projects such as e-commerce platforms and safety-based applications. These projects helped me understand how to build systems that are practical and user-focused.
                                </p>
                            </article>

                            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                                <h3 className="text-lg font-semibold text-zinc-900">Details Block</h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-600">
                                    I focus on developing web and mobile applications that are simple, clear, and user-friendly. Through continuous learning and hands-on projects, I aim to create solutions that improve everyday experiences while growing as both a developer and designer.
                                </p>
                            </article>

                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Skills & Tools</p>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                                <img src="/react.webp" alt="React" className="h-50 w-50 object-contain" />
                            </div>
                            <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                                <img src="/node.png" alt="Node.js" className="h-50 w-50 object-contain" />
                            </div>
                            <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                                <img src="/github.png" alt="GitHub" className="h-50 w-50 object-contain" />
                            </div>
                            <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                                <img src="/figma.png" alt="Figma" className="h-50 w-50 object-contain" />
                            </div>
                        </div>
                        <Button className="mt-5">Download Resume</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
