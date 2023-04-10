import Format from '../../layout/format'
import Image from "next/image"
import Link from "next/link"

export default function Entry2() {
    return (

        <Format>
            <section className="py-16">
                <div className="container mx-auto md:px-20">

                    {Slide()}
                </div>
            </section>
        </Format>
    )
}
function Slide() {
    return (
        <div className="grid md:grid-cols-2 py-3">
            <div className="info flex justify-center flex-col">
                <div className="grid md:grid-cols-2 py-3">
                    <div className="info flex justify-center flex-col">
                        <div className="category">
                            <Link href={"/posts/entry2"}></Link>
                            <Link href={"/posts/entry2"}>APRIL 10, 2023</Link>
                        </div>
                        <div className="title">
                            <Link href={"/posts/entry2"}>the new struggle in web development</Link>
                        </div>
                        <p className="text-gray-500 py-3">
                            The world of web development is in a constant state of flux, presenting developers with new challenges and obstacles to overcome. One of the most prominent struggles in recent times is the delicate balance between ensuring optimal performance and creating rich, immersive user experiences. As web applications become increasingly sophisticated, developers must grapple with the complexity of managing multiple stateful components, optimizing server-side rendering, and implementing real-time interactivity. Additionally, the advent of responsive design, accessibility requirements, and cross-browser compatibility adds further layers of intricacy to the development process. Faced with these multifaceted challenges, web developers must continuously adapt to emerging technologies, methodologies, and best practices in order to stay ahead of the curve and deliver high-quality, performant web applications that meet the ever-changing demands of users and clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

