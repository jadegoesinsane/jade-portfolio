function Header() {
    return (
        <header className="p-4">
            <nav className="flex justify-center gap-x-8">
                <a href="/#about">
                About
                </a>
                <a href="/#resume">
                Resume
                </a>
                <a href="/#contact">
                Contact
                </a>
            </nav>
        </header>
    );
}

export default Header;