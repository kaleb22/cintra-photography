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
              <img src="rapha_sem_logo.png"></img>
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
    </Container>
    )
}

export default HeaderPage;