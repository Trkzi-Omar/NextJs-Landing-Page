import {NextPage} from "next";
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialLinks: NextPage = () => {
    return (
        <div className={'w-min h-min fixed top-52 right-10 flex flex-col'}>
            <a target={"_blank"} href={'https://github.com/Trkzi-Omar/NextJs-Landing-Page'} rel="noreferrer">
                <GitHubIcon fontSize={'large'}/>
            </a>
        </div>
    )
}
export default SocialLinks