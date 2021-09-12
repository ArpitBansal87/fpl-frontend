import { Button, InputGroup } from '@blueprintjs/core';
import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import styles from "../styles/register.module.scss";

interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const Register: React.FC<RegisterProps> = ({ }) => {
  const { control, handleSubmit } = useForm<RegisterProps>();
  const onSubmit: SubmitHandler<RegisterProps> = (data: any) => {
    console.log(data);
    console.log('inside the oinSubmit form handler');
  };
  return (
    <Container id="register-from" fluid="sm" className={styles.registerFormContainer}>
      <Card className="mb-2 mt-2 " style={{ width: '35rem' }}>
        <Card.Header>Register</Card.Header>
        <Card.Body className="m-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="justify-content-sm-center mb-3">
              <Col sm={5}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={
                    ({ field }) =>
                      <InputGroup id="firstname-input" placeholder="Firstname" {...field} />} />
              </Col>
              <Col sm={5}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={
                    ({ field }) =>
                      <InputGroup id="lastName-input" placeholder="Lastname" {...field} />} />
              </Col>
            </Row>
            <Row className="justify-content-md-center mb-3">
              <Col md={10}>
                <Controller name="email" control={control} defaultValue=""
                  render={
                    ({ field }) =>
                      <InputGroup id="email-input" placeholder="Email Id" {...field} />} />
              </Col>
            </Row>
            <Row className="justify-content-md-center mb-3">
              <Col md={10}>
                <Controller name="password" control={control} defaultValue=""
                  render={
                    ({ field }) =>
                      <InputGroup id="password-input" placeholder="Password" {...field} />} />
              </Col>
            </Row>
            <Row className="justify-content-md-center mb-3">
              <Col md={10}>
                <Controller name="confirmPassword" control={control} defaultValue=""
                  render={
                    ({ field }) =>
                      <InputGroup id="confirmPassword-input" placeholder="Password" {...field} />} />
              </Col>
            </Row>
            <Row className="justify-content-md-center mb-3">
              <Col sm={7} >
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;