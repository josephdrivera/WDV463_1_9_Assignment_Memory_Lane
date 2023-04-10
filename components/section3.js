import Image from "next/image"
import Link from "next/link"

export default function section3() {
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">


                {Slide()}

            </div>
        </section>
    )
}
function Slide() {
    return (
        <div className="grid md:grid-cols-2 py-3">
            <div className="info flex justify-center flex-col">
                <div className="category">
                    <Link href={"/"}></Link>
                    <Link href={"/"}>APRIL 10, 2023</Link>
                </div>
                <div className="title">
                    <Link href={"/posts/entry3"}>been a Web Development Student</Link>
                </div>
                <p className="text-gray-500 py-3">Embarking on a journey as a web development student can be an incredibly exciting and rewarding experience. In today's digital age, the demand for skilled web developers continues to soar, making it an attractive field to enter. As a web development student, you'll immerse yourself in the world of programming languages, such as HTML, CSS, and JavaScript, learning how to create captivating websites and web applications that captivate users and meet client needs. In addition to mastering essential technical skills, you'll develop invaluable problem-solving abilities and a keen eye for design as you bring your creative visions to life. By embracing the constant evolution of web technologies and staying up to date with industry trends, you'll be well on your way to building a successful career in this dynamic and ever-growing field.</p>
            </div>
        </div>
    )
}