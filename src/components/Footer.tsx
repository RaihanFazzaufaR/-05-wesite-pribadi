type FooterLinkProps = {
    text: string;
    url: string;
}


function FooterLink({ text, url }: FooterLinkProps) {
    return (
        <a className="transition hover:text-teal-500" href={url}>{text}</a>
    )
}

export default function Footer() {
    return (
        <footer className="pt-10 px-8 pb-16 border-t">
            <div className="flex gap-6 text-sm font-medium text-white-600 justify-center">
                <FooterLink text="About Me" url="/" />
                <FooterLink text="Projects" url="/projects" />
                <FooterLink text="Essays" url="/essays" />
            </div>
            <p className="text-sm text-zinc-400 text-center py-5">&copy; 2025 Raihan Fazzaufa Rasendriya. All right reserved.</p>
        </footer>
    )
}
