import './HeaderPage.scss'
import { Container, Row, Col } from 'reactstrap'

const HeaderPage = () => {

    return (
    <Container>
      <Row>
        <Col>
          <header className="app-header">
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
            <div className="app-logo">
              <img src={process.env.PUBLIC_URL + '/rapha_sem_logo.png'} alt="raphaela cintra fotografia logo"></img>
            </div>
            
{/*             <div className="app-header--right">
              <ul className="list list--unstyled">
                <li><a href="https://facebook.com" className="fa fa-facebook"></a></li>
                <li><a href="https://instagram.com" className="fa fa-instagram"></a></li>
              </ul>
            </div> */}
          </header>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="nav-container">
          <div className="nav-container-grid">
              <div className="btn-menu"> <a href="#ensaioNewBorn">NewBorn</a> </div>
              <div className="btn-menu"> <a href="#ensaioGestante">Gestante</a> </div>
              <div className="btn-menu"> <a href="#ensaioFamilia">Familia</a> </div>
              <div className="btn-menu"> <a href="#id4">Contato</a> </div>
            </div>
        </div>
        </Col>


      </Row>
    </Container>
    )
}

export default HeaderPage;