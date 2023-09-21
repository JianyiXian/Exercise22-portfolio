const NavItem = (props) => {
    return (
        <li className="nav-item ">
            <a className="nav-link active" href={props.link} aria-current="page">
                <i className={props.src}></i> {props.name}
                <span className="visually-hidden">(current)</span>
            </a>
        </li >
    )
}

export default NavItem;

