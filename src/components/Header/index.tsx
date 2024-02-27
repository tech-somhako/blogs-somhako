"use client"
import Link from "next/link"
import Logo from "./logo"
import { FacebookIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterXIcon } from "../icons"
import { siteMetaData } from "@/src/utils/siteMetaData"
import { useThemeSwitch } from "../Hooks/useThemeSwitch"
import { useState } from "react"
import { cx } from "@/src/utils"

const Header = () => {

  const [mode,setMode] = useThemeSwitch();

  const [click, setClick] = useState(false)

  const toggle = () => {
    setClick(!click)
  }

  return (
    <header className="w-full p-4  px-5 md:px-10 flex items-center justify-between">
      <Logo />

      <button className="inline-block md:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className=" w-max py-3 px-6 md:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  md:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="https://somhako.com/about" target="_blank" className="mx-2">
          About
        </Link>
        <Link
          href="https://somhako.com/novus"
          target="_blank"
          className="mx-2 flex gap-1 items-center"
        >
          Novus
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-light text-sm px-1 rounded-md">
            beta
          </div>
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav
        className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden md:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="https://somhako.com/about" target="_blank" className="mx-2">
          About
        </Link>
        <Link
          href="https://somhako.com/novus"
          target="_blank"
          className="mx-2 flex gap-1 items-center"
        >
          Novus{" "}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-light text-sm px-1 rounded-md">
            beta
          </div>
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className=" hidden md:flex items-center">
        <a
          href={siteMetaData.linkedin}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetaData.twitter}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterXIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetaData.github}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetaData.facebook}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on facebook"
          target="_blank"
        >
          <FacebookIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  )
}

export default Header
