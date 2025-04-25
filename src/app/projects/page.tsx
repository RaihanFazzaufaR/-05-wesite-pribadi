import type { Metadata } from 'next';

export const metadata: Metadata = {  
    title: 'Proyek',
    description: 'Halaman proyek',
    openGraph: {
        title: 'Proyek',
        description: 'Halaman proyek',
    },
};

export default function Home() {
    return (
        <div className="flex items-center justify-center px-3 py-4 text-xl">
            <header>
                <h1 className='font-bold text-xl text-zinc-50'>Project Saya</h1>
            </header>
        </div>
    )
}
// export default function Projects() {
//     return (
//         <div className="flex items-center justify-center px-3 py-4 text-xl">
//             <h1>Proyek</h1>
//         </div>
//     );
// }