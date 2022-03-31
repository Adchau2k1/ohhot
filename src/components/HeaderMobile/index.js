import { BiSearch } from 'react-icons/bi'
import logo from '../../assets/images/OhHot-v1.png'

export default function HeaderMobile() {
    return (
        <header onClick={e => e.stopPropagation()}>
            <ul className="fixed z-10 w-full top-0 h-12 px-4 flex items-center justify-between text-white">
                <li className="font-normal text-xl">Mới nhất</li>
                <li><BiSearch className="text-[26px] mt-1" /></li>
            </ul>
            <img src={logo} className="w-[200px] absolute -top-[70px] left-0 right-0 mx-auto" alt="OhHot" />
        </header>
    )
}