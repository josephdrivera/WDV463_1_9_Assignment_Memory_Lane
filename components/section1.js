import Link from "next/link"

export default function section1() {
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
          <Link href={"/posts/entry1"}></Link>
          <Link href={"/posts/entry1"}>APRIL 10, 2023</Link>
        </div>
        <div className="title">
          <Link href={"/"}>I'm continually amazed</Link>
        </div>
        <p className="text-gray-500 py-3">
          As a web development student, I'm continually amazed by the ever-evolving world of technology. With each new concept I learn, I become even more eager to explore the latest tools and frameworks that are shaping the industry. The rapid advancements in web technologies fuel my passion for coding, as I eagerly anticipate the groundbreaking innovations that lie ahead. I'm particularly excited to dive into technologies such as AI-powered chatbots, progressive web apps, and serverless architectures, as these cutting-edge solutions promise to revolutionize the way we build and interact with websites. Embracing the thrill of discovery, I am driven to acquire the knowledge and skills necessary to contribute to the future of web development.
        </p>
      </div>
    </div>
  )
}