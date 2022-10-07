import { Alert, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import e from "cors";

export const Newsletter = ({ onValidated, subscribe, status, message }) => {
    const [email,setEmail] = useState('');

    useEffect(() => {
      if (status === 'sucess') clearFields();
    }, [status])

    const handleSubmit = (e) => {
      e.preventDefault();
      email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
    }

    const clearFields = () => {
      setEmail('');
    }

    return (
        <Col lg={12}>
          <div className="newsletter-bx">
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3>Se inscreva para receber E-mails</h3>
                    {status === 'sending' && <Alert>Enviando...</Alert>}
                    {status === 'error' && <Alert varaint="danger">{message}</Alert>}
                    {status === 'sucess' && <Alert variant="sucess">{message}</Alert>}
                </Col>
                <Col md={6} xl={7}>
                    <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                          <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Endereço de E-mail"/>
                          <button type="submit">Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
          </div>
        </Col>
    )
}