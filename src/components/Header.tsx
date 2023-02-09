import logo from '../assets/logo.svg'; 

export function Header() {
    return (
        <div className="bg-[url('../assets/cover.svg')] h-[296px] bg-no-repeat bg-center bg-cover flex justify-center">
            <div className="mt-16">
                <img src={logo} alt="Icone de um terminal e texto github blog" />
            </div>
        </div>
    )
}