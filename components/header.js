import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-100 shadow-md">
            <div className="bg-slate-300 xl:container xl:mx-auto flex flex-col items-center xl:flex-row xl:justify-between text-center py-4">
                <div className="px-4 sm:px-8 md:px-16 lg:px-24">
                    <Link href="/">
                        <a>Memory Lane</a>
                    </Link>
                </div>
                <nav className="flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-4 text-indigo-500">
                    <Link href="/posts/entry1">
                        <a className="hover:text-indigo-700">Posts 1</a>
                    </Link>
                    <Link href="/posts/entry2">
                        <a className="hover:text-indigo-700">Posts 2</a>
                    </Link>
                    <Link href="/posts/entry3">
                        <a className="hover:text-indigo-700">Posts 3</a>
                    </Link>
                    <Link href="/posts/entry4">
                        <a className="hover:text-indigo-700">Posts 4</a>
                    </Link>
                    <Link href="/posts/entry5">
                        <a className="hover:text-indigo-700">Posts 5</a>
                    </Link>
                    <Link href="/posts/entry6">
                        <a className="hover:text-indigo-700">Posts 6</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
