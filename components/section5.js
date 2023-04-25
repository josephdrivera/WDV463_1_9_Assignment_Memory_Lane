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
            <div className="image">
                <Link href={"/posts/entry4"}>
                    <Image alt="APIimages" src={"/images/logo-og.png"} width={600} height={400} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="category">
                    <Link href={"/"}></Link>
                    <Link href={"/"}>APRIL 25, 2023</Link>
                </div>
                <div className="title">
                    <Link href={"/posts/entry5"}>Developing in React Native</Link>
                </div>
                <p className="text-gray-500 py-3">Developing in React Native offers a unique and efficient approach to mobile application development, making it a popular choice among developers. As a framework that allows for creating cross-platform applications using JavaScript and React, it simplifies the development process by enabling developers to write code once and run it on multiple platforms, such as iOS and Android. This reduces the time and resources required for development and eliminates the need to learn platform-specific languages like Swift for iOS or Kotlin for Android. Furthermore, React Native's component-based structure promotes reusability and modularity, leading to better-organized and maintainable code.</p>
            </div>
        </div>
    )
}