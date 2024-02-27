import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/logo.png"

const logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12  md:w-16 rounded-full overflow-hidden mr-2 md:mr-4">
        <Image
          src={Logo}
          alt="somhako"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
    </Link>
  )
}

export default logo
