import type { Metadata } from 'next';

export const metadata: Metadata = {  
    title: 'Essay',
    description: 'Halaman essay',
    openGraph: {
        title: 'Essay',
        description: 'Halaman essay',
    },
};

export default function Home() {
    return (
        <div className="flex items-center justify-center px-3 py-4 text-xl">
            <header>
                <h1 className='font-bold text-xl text-zinc-50'>Esai</h1>
            </header>
        </div>
    )
}
// export default function Essays() {
//     return (
//         <div className="flex items-center justify-center px-3 py-4 text-xl">
//             <h1>Essays</h1>
//         </div>
//     );
// }