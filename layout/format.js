import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function Format({ children }) {
    return (
        <>
            <Head>
                <title>Memory Lane</title>
            </Head>

            <Header />
            <main className="px-4 sm:px-8 md:px-16 lg:px-24">{children}</main>
            <Footer />
        </>
    );
}
