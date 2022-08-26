import type {NextPage} from 'next'
import NavBar from '../components/NavBar'
import Image from "next/image";
import imgSmHorizontalLine from "../public/assets/img/sm-navbar-h-line.svg";
import imgHorizontalLine from "../public/assets/img/line-1@1x.svg";

const Home: NextPage = () => {
    return (
        <div className={'p-0'}>
            <NavBar/>
            {/*<Image className={'opacity-100 sm:opacity-0 w-screen left-0'} src={imgSmHorizontalLine} alt=""/>
            <Image className={'opacity-0 sm:opacity-100 absolute w-screen left-16 '} src={imgHorizontalLine} alt=""/>*/}
        </div>
    )
}

export default Home