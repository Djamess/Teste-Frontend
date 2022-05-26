import { React, useRef, useState } from "react";
import Container from "../layouts/Container";
import Column from "../layouts/Column";
import Row from "../layouts/Row";
import IconButtonRemove from "../components/IconButtonRemove";
import ProfilePeople from "../components/ProfilePeople";


/**
 * Renderiza todas pessoas com presença confirmada ou não.
 */

const renderInvitedPeople = (data) => {
  const invited_people = data.invited_people ? data.invited_people : [];
  return invited_people.map(({ name }, index) => (
    <ProfilePeople name={name} key={index} />
  ));
};


/**
 * Componente que representa um Card para ser listado no Dashboard
 */
const Card = ({ id, srcImg, alt, title, type, date, description, data }) => {

  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClickExpand = () => setIsActive(!isActive)

  return (
    <div id={`card${id}`} className="div-card">
      <figure>
        <Container className="container">
          <Row className="d-flex align-items-center">
            <Column classStyle="col-3 col-md-2">
              <div className="div-img">
                <img className="img-fluid img-card" alt={alt} src={srcImg} />
              </div>
            </Column>
            <Column classStyle="col-9 col-md-10">
              <div className="content">
                <h3 className="title-card">{title}</h3>
                <div className='d-flex align-items-center'>
                  <span className={type}>{type.toUpperCase()}</span>
                  {/* <span className="event">{event}</span> */}
                  <span className="date">{date}</span>
                  {type === "event" ?
                    <div>
                      <button onClick={onClickExpand} className="btn-list-people">3 CONFIRMAÇÕES DE 15
                        <nav ref={dropDownRef} className={`nav-people ${isActive ? "active" : "inactive"}`}>
                          <ul className="list-people">
                            <li>
                              {renderInvitedPeople(data)}
                            </li>
                          </ul>
                        </nav>
                      </button>
                    </div>
                    : null
                  }
                </div>
                <figcaption>{description}</figcaption>
              </div>
            </Column>
          </Row>
        </Container>
      </figure>
      <IconButtonRemove cardId={id} className="btn-card" icon="fas fa-ellipsis-h" />
    </div>
  );
};

export default Card;
