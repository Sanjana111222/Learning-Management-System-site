import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
                <section className='text-lg text-red'>
                    Copyright {year} | All rights reserved
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='https://www.facebook.com/'>
                        <BsFacebook />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='https://www.instagram.com/accounts/login/?hl=en'>
                        <BsInstagram />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='https://www.linkedin.com/in/sanjana-goyal-3a289026a/'>
                        <BsLinkedin />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='https://developer.x.com/en/docs/authentication/guides/log-in-with-twitter'>
                        <BsTwitter />
                    </a>
                </section>
            </footer>
        </>
    );

}

export default Footer;