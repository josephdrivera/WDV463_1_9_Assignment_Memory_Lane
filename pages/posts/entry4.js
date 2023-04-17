import Format from '../../layout/format';
import Image from 'next/image';
import Link from 'next/link';

export default function Entry1() {
    return (
        <Format>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto md:px-20">
                    <Slide />
                </div>
            </section>
        </Format>
    );
}

function Slide() {
    return (
        <div className="grid md:grid-cols-2 gap-6 py-6">
            <div className="image">
                <Link href={"/posts/entry4"}>
                    <Image alt="APIimages" src={"/images/APIimages.jpg"} width={600} height={400} />
                </Link>
            </div>
            <div className="info flex flex-col items-center md:items-start">
                <div className="category flex space-x-4 text-sm text-gray-500">
                    <Link href="/">
                        <a>Deploying an API</a>
                    </Link>
                    <span>-</span>
                    <Link href="/">
                        <a>APRIL 17, 2023</a>
                    </Link>
                </div>
                <div className="title mt-2 mb-4">
                    <Link href="/">
                        <a className="text-2xl text-blue-600 font-semibold hover:text-blue-800">Deploying an API</a>
                    </Link>
                </div>
                <p className="text-gray-600">
                    As a web development student, I'm continually amazed by the ever-evolving world of technology. With each new concept I learn, I become even more eager to explore the latest tools and frameworks that are shaping the industry. The rapid advancements in web technologies fuel my passion for coding, as I eagerly anticipate the groundbreaking innovations that lie ahead. I'm particularly excited to dive into technologies such as AI-powered chatbots, progressive web apps, and serverless architectures, as these cutting-edge solutions promise to revolutionize the way we build and interact with websites. Embracing the thrill of discovery, I am driven to acquire the knowledge and skills necessary to contribute to the future of web development.
                </p>
            </div>
        </div>
    );
}