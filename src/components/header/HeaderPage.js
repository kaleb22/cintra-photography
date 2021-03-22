import './HeaderPage.scss'

const HeaderPage = () => {

    return (
        <header className="app-header">
            <span className="logo">Raphaela Cintra Fotografia</span>
            <div className="app-header--right">
                <ul className="list-unstyled">
                    <li><a href="https://facebook.com" className="fa fa-facebook"></a></li>
                    <li><a href="https://instagram.com" className="fa fa-instagram"></a></li>
                </ul>
            </div>
      </header>
    )
}

export default HeaderPage;