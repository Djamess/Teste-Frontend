import React, { Fragment, useState, useEffect } from "react";
import DADOS from "../data/data.json";
import Card from "../components/Card";
import Container from "../layouts/Container";
import Column from "../layouts/Column";
import Row from "../layouts/Row";
import CardInfo from "../components/CardInfo";
import Board from "../components/Board";
import CardBoard from "../components/CardBoard";
import SelectComponent from "../components/SelectComponent";
import IconButton from "../components/IconButton";

/**
 * Função responsável por gerar um componente Card
 * através dos dados de entrada.
 */


const RenderCard = ({ data, tipo }) => {
  return data && data.length > 0 ? data.filter(item => item.type === tipo || tipo === "TIPO").map(
    ({ id, title, description, type, event, date, file, common }, index) => {
      return (
        <Card
          id={id}
          title={title}
          description={description}
          common={common}
          type={type}
          srcImg={file.url}
          event={event}
          date={date}
          key={index}
        />
      );
    }
  ) : null
};

/**
 * Tela principal listagem dos dados.
 */
const Dashboard = (_) => {
  const [tipo, setTipo] = useState("TIPO")
  useEffect(() => [tipo])

  return (
    <Fragment>
      <section className=" ">
        <Container Classname="container">
          <Row>
            <Column classStyle="col-12 col-md-12 col-lg-8">
              <Row className="mb-2">
                <Column classStyle="col-4">
                  <h1 className="title">Endomarketing</h1>
                </Column>
                <Column classStyle="col-8 d-flex justify-content-end align-self-center">
                  <SelectComponent
                    onClick={(text) => setTipo(text)}
                    className="select-component"
                    name="marketing"
                    id="market"
                    options={[
                      { value: "1", text: "TIPO" },
                      { value: "2", text: "COMUNICADO" },
                      { value: "3", text: "EVENTO" },
                      { value: "4", text: "PUBLICAÇÃO" },
                    ]}
                  />
                  <IconButton
                    className="btn btn-primary"
                    icon="fas fa-plus"
                    text="CRIAR "
                  />
                </Column>
              </Row>
              <RenderCard data={DADOS.data} tipo={tipo} />
            </Column>
            <Column classStyle="col-12 col-md-12 col-lg-4">
              <div className="side-bar">
                <CardInfo title="Endormarketing">
                  Endomarketing está relacionado às ações de treinamento ou
                  qualificação dos colaboradoresda empresa visndo um melhor
                  serviço para o cliente. Marketing interno, devido ao nome, é
                  usualmente confundido com Endomarketing mesmo sendo conceitos
                  diferentes.
                </CardInfo>
                <Board title="Quadros de Gestão à vista">
                  <CardBoard />
                  <CardBoard />
                  <CardBoard />
                </Board>
              </div>
            </Column>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Dashboard;
