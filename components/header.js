import Link from "next/link"
export default function header() {
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="text-2xl space-x-3 text-indigo-500 ">
                    <a href="/"> 1.9 Assignment: Memory Lane </a> <br />
                </div>
                <div>
                    <div className="flex space-x-3 text-indigo-500">
                        <a href="/posts/entry1">Posts Entry 1 </a><br />
                        <a href="/posts/entry2">Posts Entry 2 </a><br />
                        <a href="/posts/entry3">Posts Entry 3 </a>
                    </div>
                </div>
            </div>
        </header>
    )
}