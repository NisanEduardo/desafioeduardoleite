import Image from 'next/image'
import Logo from '../../../public/images/meudesafio.svg'
import { FiChevronLeft } from 'react-icons/fi'
import Link from 'next/link'

import { useRouter } from 'next/router'

export function Header () {
    const router = useRouter()

    return (
        <header className="mainHeader">
            <div className="backIcon" onClick={ () => router.back() } >
                < FiChevronLeft fontSize="2rem"/>
            </div>
            <h1>
                <Link href="/">
                    <a><Image src={ Logo } alt="Logo Desafio Eduardo Leite" /></a>
                </Link>
            </h1>
        </header>
    )
}