const Header = (props) => {
    return (
        <header className="header-app">
            <a href="./index.html#" title="inicio">
                <img
                    className="header-app__logo"
                    src={props.logo}
                    alt="logo"
                    title="logo"
                />
            </a>
        </header>

    )

}

export default Header;