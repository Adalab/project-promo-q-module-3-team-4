import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={props.className}>
            <Link to="/" title="inicio">
                <img
                    className="header-app__logo"
                    src={props.logo}
                    alt="logo"
                    title="logo"
                />
            </Link>
        </header>
    )

}

export default Header;