import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image'
import Image1 from '../../../public/images/article1.jpg';
import Image2 from '../../../public/images/article2.jpg';

export const metadata: Metadata = {  
    title: 'Esai',
    description: 'Halaman esai',
    openGraph: {
        title: 'Esai',
        description: 'Halaman Esai',
    },
};

type ProjectItemProps = {
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
    return (
        <li>
           <a href={url}>
                <div className='flex flex-col items-center w-full bg-gray-800 justify-center max-w-sm rounded overflow-hidden shadw-lg'>
                    <Image className='w-full pb-4 max-h-50 object-cover' src={imageSrc} alt={name}/>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl text-justify mb-2'>{name}</div>
                    </div>
                    <div className='px-6 py-4 w-full flex justify-end'>
                        <span className='inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mb-2'>
                            {urlDisplay}
                        </span>
                    </div>
                </div>
            </a> 
        </li>
    );
}

export default function Projects() {
    return (
        <div className='mt-16 px-8'>
            <header>
                <h1 className='flex items-center justify-center font-bold text-xl text-zinc-50'>Esai</h1>
                <p className='flex items-center justify-center text-base mt-6 text-zinc-50'>Berikut adalah beberapa artikel yang kami kumpulkan</p>
            </header>
            <div className='mt-16'>
                <h2 className='flex items-center justify-center text-xl'>Artikel</h2>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-14 gap-y-16 mt-8 mb-4 w-full mx-auto'>
                    <ProjectItem name='PHP Tutorial | Learn PHP Programming for Beginner' url="https://www.tpointtech.com/php-tutorial" urlDisplay='Go To Website' imageSrc={Image1}/>
                    <ProjectItem name='Flutter Tutorial - Online Tutorial Libarary' url="https://www.tutorialspoint.com/flutter/index.htm" urlDisplay='Go To Website' imageSrc={Image2}/>
                </ul>
            </div>
        </div>
    );
}

// export default function Home() {
//     return (
//         <div className="flex items-center justify-center px-3 py-4 text-xl">
//             <header>
//                 <h1 className='font-bold text-xl text-zinc-50'>Esai</h1>
//             </header>
//         </div>
//     )
// }
// export default function Essays() {
//     return (
//         <div className="flex items-center justify-center px-3 py-4 text-xl">
//             <h1>Essays</h1>
//         </div>
//     );
// }