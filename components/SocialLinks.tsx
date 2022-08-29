import {NextPage} from "next";
import Image from "next/image";
import iconGitHub from "/public/assets/img/social-link-github.svg";
import iconDribbble from "/public/assets/img/social-link-dribbble.svg";

const SocialLinks: NextPage = () => {
    return (
        <div className={'social-icons hidden lg:flex flex-row items-center justify-between'}>
            <a className={'p-0 m-0 flex flex-col items-center'} target={"_blank"} href={'https://dribbble.com/Helfa'} rel="noreferrer">
                <Image src={iconDribbble}/>
            </a>
            <a className={'p-0 m-0 flex flex-col items-center'} target={"_blank"} href={'https://github.com/Trkzi-Omar/NextJs-Landing-Page'} rel="noreferrer">
                <Image src={iconGitHub}/>
            </a>
        </div>
    )
}
export default SocialLinks