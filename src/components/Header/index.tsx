import Image from 'next/image'
import Logo from '../../../public/images/meudesafio.svg'
import { FiChevronLeft } from 'react-icons/fi'
import Link from 'next/link'

export function Header () {
    return (
        <header className="mainHeader">
            <div className="backIcon">< FiChevronLeft fontSize="2rem"/></div>
            <h1>
                <Link href="/">
                    <a><Image src={ Logo } alt="Logo Desafio Eduardo Leite" /></a>
                </Link>
            </h1>
        </header>
    )
}