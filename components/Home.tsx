import {NextPage} from "next";
import {motion} from "framer-motion";

const Home: NextPage = () => {
    return (
        <div id={'Home'} className={'home w-screen flex flex-col flex-nowrap overflow-hidden justify-start '}>
            <div className={'home-text-upper w-screen md:mb-12'}>
                <div className={'home-text-upper-left block pt-6 pl-10 pr-24' +
                    ' md:pt-28 md:pb-0 md:px-0 md:pl-20 md:w-1/2'}>
                    <motion.div
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 2, ease: "easeInOut"}}
                    >
                        <span className={'paragraph-title'}>Let&rsquo;s innovate</span>
                    </motion.div>
                    <motion.div
                        initial={{y: 600, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 2, ease: "easeInOut"}}
                    >
                        <p className={'paragraph-text md:w-2/3'}>Est qu&rsquo;il possède une distribution de lettres
                            plus ou moins normale, et en tout cas comparable avec celle du français standard. De
                            nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem
                            Ipsum leur faux texte par défaut, et une recherche pour &apos;Lorem Ipsum&apos; vous
                            conduira vers de nombreux
                        </p>
                    </motion.div>
                    <div className={'buttons hidden md:flex float-left flex-wrap justify-start pt-14'}>
                        <motion.div
                            initial={{y: 400, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 2, ease: "easeInOut"}}
                        >
                            <div
                                className={'arrow-box group mx-0 my-1 p-0 flex items-center cursor-pointer' +
                                    ' grid content-center place-items-center' +
                                    ' bg-[url("../public/assets/img/Rectangle-Arrow.svg")]' +
                                    ' bg-origin-padding bg-no-repeat bg-cover bg-center bg-no-repeat'}>
                                <div
                                    className={'arrow z-10  mx-0 mt-2 mb-2 p-0 flex items-center relative' +
                                        ' grid content-center place-items-center' +
                                        ' group-hover:mt-4 group-hover:mb-0 duration-700 ease-in-out'}/>
                            </div>
                        </motion.div>
                        <div className={'w-0 h-auto px-1'}/>
                        <motion.div
                            initial={{y: 470, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 2, ease: "easeInOut"}}
                        >
                            <div
                                className={'learn-more group mx-0 my-1 p-0 overflow-visible grid place-items-center cursor-pointer '}>
                                <a className={'p-0 m-0 w-min whitespace-nowrap group-hover:font-extrabold'}>Learn
                                    more</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className={'home-text-upper-right-max-md  md:hidden mt-60 flex flex-row-reverse'}>
                    <div className={'buttons w-1/2 mr-5 flex float-right flex-wrap justify-end'}>
                        <motion.div
                            initial={{y: 400, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 2, ease: "easeInOut"}}
                        >
                            <div
                            className={'arrow-box group w-min mx-0 my-1 p-0 flex items-center cursor-pointer' +
                                ' grid content-center place-items-center' +
                                ' bg-[url("../public/assets/img/Rectangle-Arrow.svg")]' +
                                ' bg-origin-padding bg-no-repeat bg-cover bg-center bg-no-repeat'}>
                            <div
                                className={'arrow z-10 w-full mx-0 mt-2 mb-2 p-0 flex items-center relative' +
                                    ' grid content-center place-items-center' +
                                    ' group-hover:mt-3.5 group-hover:mb-0.5 duration-700 ease-in-out'}/>
                        </div>
                        </motion.div>
                        <div className={'w-0 h-auto px-1'}/>
                        <motion.div
                            initial={{y: 470, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 2, ease: "easeInOut"}}
                        >
                        <div
                            className={'learn-more ml-0 mr-0 my-1 p-0 overflow-visible grid content-center place-items-center  cursor-pointer ' +
                                ' bg-origin-padding bg-cover bg-center bg-[url("../public/assets/img/Rectangle-upper-left-gradient-learn-more.svg")]  bg-no-repeat'}>
                            <a className={'p-0 m-0 w-min whitespace-nowrap'}>Learn more</a>
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className={'home-text-lower w-screen flex flex-row-reverse mt-24'}>
                <div className={'home-text-lower-left block'}></div>
                <div className={'home-text-lower-right md:w-1/2 flex flex-wrap flex-row justify-end pr-32'}>
                    <motion.div
                        initial={{y: 350, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 2, ease: "easeInOut"}}
                    >
                        <div
                            className={'watch-max-md md:hidden mr-16 mb-12 grid content-center place-items-center cursor-pointer'}>
                            <a>Watch</a>
                        </div>
                        <div
                            className={'watch overflow-visible hidden md:block md:grid content-center items-center place-items-center cursor-pointer  align-middle'}>
                            <a>Watch</a>
                        </div>
                    </motion.div>
                    <div className={'w-1/12'}/>
                    <div className={'hidden paragraph md:inline-block'}>
                        <motion.div
                            initial={{y: 250, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 2, ease: "easeInOut"}}
                        >
                            <span className={'paragraph-title'}>Advo</span>
                        </motion.div>
                        <motion.div
                            initial={{y: 300, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 2, ease: "easeInOut"}}
                        >
                            <p className={'paragraph-text'}>Est qu&apos;il possède une distribution de lettres plus ou
                                moins normale, et en tout cas comparable avec celle du français standard. De nombreuses
                                suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur
                                faux texte par défaut, et une recherche pour &apos;Lorem Ipsum&apos; vous conduira vers
                                de nombreux
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home