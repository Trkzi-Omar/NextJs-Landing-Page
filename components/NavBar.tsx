import type {NextPage} from 'next'
import Image from "next/image";
import imgRightArrow from "../public/assets/img/arrow-1-2@2x.svg";
import imgHamburger from "../public/assets/img/hamburger.svg";
import imgHorizontalLine from "../public/assets/img/line-1@1x.svg";

const NavBar: NextPage = () => {
    return (
        <nav
            className="flex flex-wrap items-center justify-between
            w-full pb-1 sm:pb-3 pt-2 md:pt-4 px-0 md:px-12 xl:px-28 2xl:px-40 text-lg text-white bg-transparent
            bg-no-repeat bg-left-bottom bg-origin-border
            bg-[url('../public/assets/img/sm-navbar-h-line.svg')]
            sm:bg-[url('../public/assets/img/line-1@1x.svg')]
            ">
            <span className={'logo-text ml-7 mr-4 cursor-pointer'}>S</span>
            <ul className={'hidden md:flex overflow-hidden'}>
                <li className={'cursor-pointer mx-4 lg:mx-8'}>Home</li>
                <li className={'cursor-pointer mx-4 lg:mx-8'}>About</li>
                <li className={'cursor-pointer mx-4 lg:mx-8'}>Innovation</li>
                <li className={'cursor-pointer mx-4 lg:mx-8'}>Contact</li>
            </ul>
            <span className={'cursor-pointer ml-4 mr-7'}>
                <a className={'flex md:hidden peer'}>
                    <Image src={imgHamburger} alt={''}/>
                </a>
                {/*@TODO: Use TypeScript to change the className (visible <-> hidden) onClick() of the hamburger*/}
                <a className={''}>
                    ROAD TO GERMANY BABE
                </a>
                <a className={'hidden md:flex'}>
                    <span>Sign-in</span>
                    <span className={'pl-2 pr-2 group-hover:pl-4 group-hover:pr-0 duration-700 ease-in-out'}>
                        <Image src={imgRightArrow} alt={''}/>
                    </span>
                </a>
            </span>
        </nav>
    )
}


export default NavBar