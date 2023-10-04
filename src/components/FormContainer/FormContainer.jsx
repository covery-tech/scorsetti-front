import "./index.css";
import Container from "../Container/Container";
import PrincipalText from "../Principal-Text/Principaltext";

export default function Form({ children, principalText }) {
  return (
    <Container>
      {principalText && <PrincipalText />}
      <div className="flex flex-forms-direction justify-around">{children}</div>
      {/* {showModal && (
        <ModalPortal onClose={handleCloseModal}>
          <ModalCotizaciones cotization={cotization} nPersons={nPersons}/>
        </ModalPortal>
      )} */}
    </Container>
  );
}
