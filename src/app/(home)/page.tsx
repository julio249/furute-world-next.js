import { Main } from "next/document"
import { Description } from "app/components/Home/Description"
import { Hero } from "app/components/Home/Hero"
import { MainProducts } from "app/components/Home/MainProducts"
import { Metadata } from "next"
import { ChatLink } from "app/components/shared/ChatLink"


export const metadata: Metadata = {
  title: " Future World",
  description: "welcome to the future world, an ecommerce from another century",
  keywords: ["ecommerce", "future", "world", "technology"]
}

export default function Home(){

  return (
    <main >

      {/* <Hero />
      <Description /> */}
      <ChatLink />
      <MainProducts />

    </main>
  )
}