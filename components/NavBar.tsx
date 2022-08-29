import type {NextPage} from 'next'
import {useState, useEffect} from "react";
import Image from "next/image";
import imgRightArrow from "../public/assets/img/arrow-1-2@2x.svg";
import imgHamburger from "../public/assets/img/hamburger.svg";
import imgHorizontalLine from "../public/assets/img/line-1@1x.svg";

const NavBar: NextPage = () => {
    const [sideMenuVisibility, setSideMenuVisibility] = useState('hidden')
    return (
        <nav
            className="flex flex-wrap items-center justify-between
            w-full pb-1 sm:pb-3 pt-2 md:pt-4 px-0 md:px-12 xl:px-28 2xl:px-40
            text-lg text-white bg-transparent
            bg-no-repeat bg-left-bottom bg-origin-border
            bg-[url('../public/assets/img/sm-navbar-h-line.svg')]
            sm:bg-[url('../public/assets/img/line-1@1x.svg')]
            "
            onChange={() => setSideMenuVisibility('hidden')}>
            <a className={'logo-text ml-10 mr-4 cursor-pointer'} href={'/'}>S</a>
            <ul className={'hidden md:flex overflow-hidden'}>
                <li className={'nav-links text-opacity-90 font-light hover:text-opacity-100 hover:font-bold mx-4 lg:mx-8'}>
                    <a href={'#Home'}>Home</a>
                </li>
                <li className={'nav-links text-opacity-90 font-light hover:text-opacity-100 hover:font-bold mx-4 lg:mx-8'}>
                    <a href={'#About'}>About</a>
                </li>
                <li className={'nav-links text-opacity-90 font-light hover:text-opacity-100 hover:font-bold mx-4 lg:mx-8'}>
                    <a href={'#Innovation'}>Innovation</a>
                </li>
                <li className={'nav-links text-opacity-90 font-light hover:text-opacity-100 hover:font-bold mx-4 lg:mx-8'}>
                    <a href={'#Contact'}>Contact</a>
                </li>
            </ul>
            <span className={'cursor-pointer ml-1 mr-8'}>
                <button className={'flex md:hidden'}
                        onClick={() => {
                            setSideMenuVisibility('hidden' === sideMenuVisibility ? 'visible' : 'hidden')
                            console.log(sideMenuVisibility)
                        }}>
                    <Image src={imgHamburger} alt={''}/>
                </button>
                <a className={'hidden md:flex whitespace-nowrap group'}>
                    <span>Sign-in</span>
                    <span className={'pl-2 pr-2 group-hover:pl-4 group-hover:pr-0 duration-700 ease-in-out'}>
                        <Image src={imgRightArrow} alt={''}/>
                    </span>
                </a>
            </span>
            <div
                className={sideMenuVisibility + ' md:hidden flex flex-wrap items-center  justify-between px-2 m-auto text-center h-auto w-full'}>
                <a className={'nav-links cursor-pointer mx-auto'} href={'#Home'}>Home</a>
                <a className={'nav-links cursor-pointer mx-auto'} href={'#About'}>About</a>
                <a className={'nav-links cursor-pointer mx-auto'} href={'#Innovation'}>Innovation</a>
                <a className={'nav-links cursor-pointer mx-auto'} href={'#Contact'}>Contact</a>
            </div>
        </nav>
    )
}


export default NavBar