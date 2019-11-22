import React from 'react';

export const Navitem = ({...props}) => {
    return (
        <li className="nav-item">
            <a href={props.link} className="nav-link" >
            {props.text}
            </a>
        </li>
    );
}; 

export const Searchbar = ({...props}) => {
    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
};

export const Dropdown = props => {

    const Listitem = ({...props}) => (
        <a className="dropdown-item" href={props.href}>{props.title}</a>
    );

    return (    
        <>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.title}</a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
                <Listitem title="action1" href="#" />    
                <Listitem title="action2" href="#" />
            </div>
        </li>
        <style jsx='true'>
        {`
        .dropdown:hover .dropdown-menu{
            display:block;
        }
        `}
        </style>
        </>
    )
};

export const Logo = ({...props}) => {
    return (
        <div>
            <img src={props.source} />
            <a className="navbar-brand" href="#">{props.title}</a>
        </div>
    )
};

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Logo title="Mango Airlines" source="" />
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <>
                <Navitem link="#" text="About" />
                <Dropdown title="Flights">

                </Dropdown>
                </>
            </ul>
            <Searchbar />
        </div>
    </nav>
    </>
  )
};

export default Navbar;