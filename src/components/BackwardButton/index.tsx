import { FiChevronLeft } from 'react-icons/fi'
import { useRouter } from 'next/router'

export function BackwardButton()  {
    const router = useRouter()

    return <div className="backIcon" onClick={ () => router.back() } >< FiChevronLeft fontSize="2rem"/></div>

}