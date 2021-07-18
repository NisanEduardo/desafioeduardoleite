import Image from 'next/image'
import Logo from '../../../public/images/meudesafio.svg'

import Link from 'next/link'

export function Header () {
    return (
        <header className="mainHeader">
            <h1>
                <Link href="/">
                    <a><Image src={ Logo } alt="Logo Desafio Eduardo Leite" /></a>
                </Link>
            </h1>
        </header>
    )
}