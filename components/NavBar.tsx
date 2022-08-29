import type {NextPage} from 'next'
import {useState} from "react";
import Image from "next/image";
import imgRightArrow from "../public/assets/img/arrow-1-2@2x.svg";
import imgHamburger from "../public/assets/img/hamburger.svg";
import imgX from "../public/assets/img/X-hamburger-exit.svg";
import imgLineMenu from "../public/assets/img/Line-Hamburger-Menu.svg";
import SocialLinks from "./SocialLinks";
import {motion} from "framer-motion";

const NavBar: NextPage = () => {
    const [sideMenuVisibility, setSideMenuVisibility] = useState('hidden')
    return (
        <nav
            className="flex flex-nowrap items-center justify-between
            w-full pb-1 sm:pb-3 pt-2 md:pt-4 px-0 md:px-12 xl:px-28 2xl:px-40
            text-lg text-white bg-transparent
            bg-no-repeat bg-left-bottom bg-origin-border
            bg-[url('../public/assets/img/sm-navbar-h-line.svg')]
            sm:bg-[url('../public/assets/img/line-1@1x.svg')]
            "
            onChange={() => setSideMenuVisibility('hidden')}>

            <motion.div
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 2, ease: "easeInOut"}}
            >
                <a className={'logo-text ml-10 mr-4 cursor-pointer'} href={'/'}>S</a>
            </motion.div>
            <ul className={'hidden md:flex overflow-visible'}>
                <motion.div
                    initial={{y: -400}}
                    animate={{y: 0}}
                    transition={{duration: 2, ease: "easeInOut"}}
                >
                    <li className={'nav-links opacity-50 font-light hover:opacity-100 hover:font-bold mx-4 lg:mx-8'}>
                        <a href={'#Home'}>Home</a>
                    </li>
                </motion.div>
                <motion.div
                    initial={{y: -300}}
                    animate={{y: 0}}
                    transition={{duration: 2, ease: "easeInOut"}}
                >
                    <li className={'nav-links opacity-50 font-light hover:opacity-100 hover:font-bold mx-4 lg:mx-8'}>
                        <a href={'#About'}>About</a>
                    </li>
                </motion.div>
                <motion.div
                    initial={{y: -200}}
                    animate={{y: 0}}
                    transition={{duration: 2, ease: "easeInOut"}}
                >
                    <li className={'nav-links opacity-50 font-light hover:opacity-100 hover:font-bold mx-4 lg:mx-8'}>
                        <a href={'#Innovation'}>Innovation</a>
                    </li>
                </motion.div>
                <motion.div
                    initial={{y: -100}}
                    animate={{y: 0}}
                    transition={{duration: 2, ease: "easeInOut"}}
                >
                    <li className={'nav-links opacity-50 font-light hover:opacity-100 hover:font-bold mx-4 lg:mx-8'}>
                        <a href={'#Contact'}>Contact</a>
                    </li>
                </motion.div>
            </ul>
            <SocialLinks/>
            <span className={'cursor-pointer ml-1 mr-8'}>
                <button className={'flex md:hidden'}
                        onClick={() => {
                            setSideMenuVisibility('visible')
                        }}>
                    <Image src={imgHamburger} alt={''}/>
                </button>
                <motion.div
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 2}}
                >
                    <a className={'hidden md:flex whitespace-nowrap group'} href={'#sign-in'}>
                        <span>Sign-in</span>
                        <span className={'pl-2 pr-2 group-hover:pl-4 group-hover:pr-0 duration-700 ease-in-out'}>
                            <Image src={imgRightArrow} alt={''}/>
                        </span>
                    </a>
                </motion.div>
            </span>

            {/*Hamburger menu*/}
            <div
                className={sideMenuVisibility + ' md:hidden bg-black z-50 fixed flex flex-nowrap flex-col top-0 left-0 right-0 bottom-0'}>
                <button className={'relative flex flex-row-reverse mr-12 mt-8'}
                        onClick={() => {
                            setSideMenuVisibility('hidden')
                        }}>
                    <Image src={imgX} alt={'X'} className={'nav-links cursor-pointer'}/>
                </button>
                <div
                    className={' flex flex-col flex-nowrap overflow-visible justify-start px-auto m-auto text-center h-screen w-full'}>
                    <a className={'nav-links cursor-pointer hover:font-black mx-auto'} href={'#Home'}
                       onClick={() => {
                           setSideMenuVisibility('hidden')
                       }}>Home</a>
                    <span className={'py-10 justify-items-center grid'}>
                    <Image className={''} src={imgLineMenu} alt={''}/>
                    </span>
                    <a className={'nav-links cursor-pointer hover:font-black mx-auto'} href={'#About'}
                       onClick={() => {
                           setSideMenuVisibility('hidden')
                       }}>About</a>
                    <span className={'py-10 justify-items-center grid'}>
                    <Image className={''} src={imgLineMenu} alt={''}/>
                    </span>
                    <a className={'nav-links cursor-pointer hover:font-black mx-auto'} href={'#Innovation'}
                       onClick={() => {
                           setSideMenuVisibility('hidden')
                       }}>Innovation</a>
                    <span className={'py-10 justify-items-center grid'}>
                    <Image className={''} src={imgLineMenu} alt={''}/>
                    </span>
                    <a className={'nav-links cursor-pointer hover:font-black mx-auto'} href={'#Contact'}
                       onClick={() => {
                           setSideMenuVisibility('hidden')
                       }}>Contact</a>
                </div>
            </div>
        </nav>
    )
}


export default NavBar