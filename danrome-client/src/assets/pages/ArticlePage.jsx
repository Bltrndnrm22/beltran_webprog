import Button from '../components/Button';

const articleItems = [
    {
        id: 1,
        category: 'UI/UX',
        title: 'Campus Navigation System',
        description: 'A simple navigation system designed to help students easily find classrooms, offices, and key locations within the campus.',
        image: '/campus.png',
        author: 'Danrome Beltran',
        date: 'Mar 15, 2024',
        readTime: '10 min read',
    },
    {
        id: 2,
        category: 'Development',
        title: 'Food Ordering App',
        description: 'A user-friendly app that allows students to browse menus, place orders, and manage their meals quickly and easily',
        image: '/food.png',
        author: 'Danrome Beltran',
        date: 'Feb 12, 2025',
        readTime: '9 min read',
    },
    {
        id: 3,
        category: 'Development',
        title: 'Card-Based UI Implementation',
        description: 'A structured layout using cards and lists to organize content clearly for better readability and navigation.',
        image: '/react.webp',
        author: 'Danrome Beltran',
        date: 'Jan 08, 2024',
        readTime: '3 min read',
    },
    {
        id: 4,
        category: 'Engineering',
        title: 'Low-Fidelity Wireframe Flow',
        description: 'An early-stage wireframe showing layout structure and user flow, used to plan and organize interface ideas before development.',
        image: '/frame.webp',
        author: 'Danrome Beltran',
        date: 'Dec 15, 2025',
        readTime: '5 min read',
    },
];

const ArticlePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Articles
                </p>
                <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                    Selected projects presented in a clear and simple layout
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                    A collection of my works focused on design and development. Each project highlights how I approach building simple, user-friendly, and meaningful digital experiences.
                </p>
                <div className="mt-6">
                    <Button to ="/">Back Home</Button>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Featured Articles
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                        Article card grid
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {articleItems.map((article) => (
                        <article key={article.id} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                            <div className="overflow-hidden rounded-t-3xl">
                                <img src={article.image} alt={article.title} className="h-50 w-full object-cover" />
                            </div>
                            <div className="p-4">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">{article.category}</p>
                                <h3 className="mt-2 text-lg font-semibold text-zinc-900">{article.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-600">{article.description}</p>
                                <p className="mt-3 text-xs text-zinc-500">{article.date} • {article.author} • {article.readTime}</p>
                                <Button className="mt-4" aria-label={`Read more about ${article.title}`}>
                                    Read More
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ArticlePage;