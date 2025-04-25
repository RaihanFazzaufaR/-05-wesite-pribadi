import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image'
import Image1 from '../../../public/images/project1.png';
import Image2 from '../../../public/images/project2.png';

export const metadata: Metadata = {  
    title: 'Proyek',
    description: 'Halaman proyek',
    openGraph: {
        title: 'Proyek',
        description: 'Halaman proyek',
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
                <div className='flex flex-col items-center w-60 bg-gray-800 justify-center max-w-sm rounded overflow-hidden shadw-lg'>
                    <Image className='w-20 py-4' src={imageSrc} alt={name}/>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{name}</div>
                    </div>
                    <div className='px-6 py-4'>
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
                <h1 className='flex items-center justify-center font-bold text-xl text-zinc-50'>Proyek</h1>
                <p className='flex items-center justify-center text-base mt-6 text-zinc-50'>Berikut adalah beberapa proyek yang telah saya kerjakan</p>
            </header>
            <div className='mt-16'>
                <h2 className='flex items-center justify-center text-xl'>Aplikasi</h2>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-14 gap-y-16 mt-8 mb-4 w-fit mx-auto'>
                    <ProjectItem name='SIRAWA' url="https://github.com/RaihanFazzaufaR/project-base-learning-2024" urlDisplay='SIRAWA' imageSrc={Image1}/>
                    <ProjectItem name='MoodSync' url="https://github.com/ExpressCode-Team" urlDisplay='MoodSync' imageSrc={Image2}/>
                </ul>
            </div>
        </div>
    );
}

// export default function Home() {
//     return (
//         <div className="flex items-center justify-center px-3 py-4 text-xl">
//             <header>
//                 <h1 className='font-bold text-xl text-zinc-50'>Project Saya</h1>
//             </header>
//         </div>
//     )
// }
// export default function Projects() {
//     return (
//         <div className="flex items-center justify-center px-3 py-4 text-xl">
//             <h1>Proyek</h1>
//         </div>
//     );
// }