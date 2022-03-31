import { AiFillHome } from 'react-icons/ai'
import { BiNotification } from 'react-icons/bi'
import { CgAddR } from 'react-icons/cg'
import { RiUser3Fill } from 'react-icons/ri'
import { TiMessage } from 'react-icons/ti'


function FooterMobile() {
    return (
        <footer onClick={e => e.stopPropagation()}>
            <ul className="fixed w-full z-10 bottom-0 px-4 h-[54px] flex items-center justify-between text-white">
                <li>
                    <AiFillHome className="w-9 h-7" />
                </li>
                <li>
                    <TiMessage className="w-9 h-10" />
                </li>
                <li>
                    <CgAddR className="w-9 h-7" />
                </li>
                <li>
                    <BiNotification className="w-9 h-7" />
                </li>
                <li>
                    <RiUser3Fill className="w-9 h-7" />
                </li>
            </ul>
        </footer>
    )
}

export default FooterMobile