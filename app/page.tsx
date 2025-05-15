import Image from 'next/image'
import '../app/globals.css'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

export default function page() {
  return (
    <div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-8 p-[100px]'>

            {/* Grid 1 */}
        <div className='mx-auto text-center'>
          <h1 className='text-3xl font-bold text-indigo-600/75 '>SDEP HELPDESK</h1>
          <Image
          alt='EcoHelpDesk'
          src='/help.png'
          width={560}        
          height={560}    
          />
        </div>
               {/* End of Grid 1 */}

              {/* Grid 2 */}
        <div className='pt-24'>
          <div className='text-sm border-b p-2 border-b-orange-400 w-[300px] mx-auto grid grid-col-2 gap-4 text-center'>Be part of our work</div>
          
          {/* 1 button */}
          <div className='grid grid-grid-2 gap-4'>
            <Link href='/auth/register' className='mx-auto bg-black/90 text-[14px] p-2 text-white rounded-lg hover:-translate-y-2 transition-transform w-[200px]  mt-4 text-center'>
            <div className='flex items-center justify-center '>Get Started<span><FontAwesomeIcon icon={faArrowRight} className='ml-2 w-5 h-5'/></span></div>
            </Link>
          {/* 2 Link */}
            <Link href='/auth/signin' className='mx-auto bg-black/90 text-[14px] p-2 text-white rounded-lg hover:-translate-y-2 transition-transform w-[200px]  text-center'>
            <div className='flex items-center justify-center '>Sign in (Member)<span><FontAwesomeIcon icon={faArrowRight} className='ml-2 w-5 h-5'/></span></div>
            </Link>
         </div>
        </div>
      </div>
    </div>
  )
}
