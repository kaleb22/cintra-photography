import './BodyComponent.scss';
import React, {useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import WebFont from 'webfontloader';
import IconsComponent from '../icons/IconsComponent';
import FormComponent from '../form/FormComponent';

const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const BodyComponent = () => {

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Barlow Semi Condensed']
        }
      });
     }, []);

  return (
      <Container>
        <IconsComponent sectionTitle="Sobre Mim" id="sobreMim"></IconsComponent>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel justo sed dui faucibus placerat. Donec vitae nisi eget leo mattis faucibus. Pellentesque varius lacus eu quam ultricies, in auctor arcu consectetur. Nullam nulla metus, posuere sed volutpat id, interdum in diam. Pellentesque leo nisl, egestas non tristique et, imperdiet quis justo. Vivamus sem ex, efficitur ac purus vehicula, eleifend cursus ante. Praesent et sem at nisi cursus blandit.
            </p>

            <p>
              Phasellus euismod, magna ut sollicitudin porta, nisi urna auctor metus, vel fermentum est sem lacinia est. Nulla vitae efficitur justo. Vivamus in bibendum nisi. Aenean pellentesque elit eu nulla vehicula, vitae posuere urna faucibus. Vestibulum at sapien ac lorem vehicula volutpat vel sed est. Donec sit amet viverra quam, ac egestas magna. Integer ultrices scelerisque ligula nec feugiat. Mauris quis ipsum nibh.
            </p>
          </Col>
        </Row>

        <IconsComponent sectionTitle="Ensaios NewBorn" id="ensaioNewBorn"></IconsComponent>
        <p className="center-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel justo sed dui faucibus placerat. Donec vitae nisi eget leo mattis faucibus.
        </p>

        <Row>
          <UncontrolledCarousel items={items} indicators={false} controls={true} autoPlay={false}/>
        </Row>

        <IconsComponent sectionTitle="Ensaios Gestante" id="ensaioGestante"></IconsComponent>
        <p className="center-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel justo sed dui faucibus placerat. Donec vitae nisi eget leo mattis faucibus.
        </p>

        <Row>
          <UncontrolledCarousel items={items} indicators={false} controls={true} autoPlay={false}/>
        </Row>

        <IconsComponent sectionTitle="Ensaios Familia" id="ensaioFamilia"></IconsComponent>
        <p className="center-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel justo sed dui faucibus placerat. Donec vitae nisi eget leo mattis faucibus.
        </p>

        <Row>
          <UncontrolledCarousel items={items} indicators={false} controls={true} autoPlay={false}/>
        </Row>

        <IconsComponent sectionTitle="Entre em contato" id="contato"></IconsComponent>
        <p className="center-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel justo sed dui faucibus placerat. Donec vitae nisi eget leo mattis faucibus.
        </p>

        <Row>
          <FormComponent></FormComponent>
        </Row>

        <Row>
          <div style={{ backgroundColor: '#bfbfb4', height: '6em' }}></div>
        </Row>

      </Container>
  )

};

export default BodyComponent;