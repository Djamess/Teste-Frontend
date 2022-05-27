import { React, useRef, useState } from "react";
import Container from "../layouts/Container";
import Column from "../layouts/Column";
import Row from "../layouts/Row";
import IconButtonRemove from "../components/IconButtonRemove";
import ProfilePeople from "../components/ProfilePeople";

/**
 * Renderiza todas pessoas com presença confirmada ou não.
 */

const renderInvitedPeople = (invited_people) => {
  return invited_people.map(({avatar, name, username, confirmed_presence}, index) => (
      <ProfilePeople key={index} avatar={avatar} name={name} username={username} confirmed_presence={confirmed_presence}/>
  ))
};

/**
 * Componente que representa um Card para ser listado no Dashboard
 */
const Card = ({ id, title, type, description, date, invited_people, srcImg }) => {

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
                <img className="img-fluid img-card" alt={title} src={srcImg} />
              </div>
            </Column>
            <Column classStyle="col-9 col-md-10">
              <div className="content">
                <h3 className="title-card">{title}</h3>
                <div className='d-flex align-items-center'>
                  <span className={type}>{type.toUpperCase()}</span>
                  <span className="date">{date}</span>
                  {type === "event" ?
                    <div>
                      <button onClick={onClickExpand} className="btn-list-people">Pessoas confirmadas
                        <nav ref={dropDownRef} className={`nav-people ${isActive ? "active" : "inactive"}`}>
                          <ul className="list-people">
                            <li>
                              {renderInvitedPeople(invited_people)}
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
