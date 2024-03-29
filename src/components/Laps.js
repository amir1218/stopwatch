import React from 'react';
import Table from 'react-bootstrap/Table';
import DisplayModeToggle from './DisplayModeToggle.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Laps(props) {
    return (
        <>
            <Container>
                <Row style={{ borderBottom: '1px solid #d8d8d8'}}>
                    <Col>
                        <h2 style={{padding: '0px 0px 0px 0px'}}>Laps</h2>
                    </Col>
                    <Col>
                        <span role="img" aria-label='Light Mode' style = {{ float: 'right' }}>☀️</span>
                        <DisplayModeToggle />
                        <span role="img" aria-label='Dark Mode' style = {{ float: 'right', marginRight: '10px' }}>🌑</span>
                    </Col>
                </Row>
            </Container>
            <Table striped bordered hover>
                <tbody style={{fontSize: '24px'}}>
                    {props.laps.map(lap => {
                        return (
                            <tr key={lap}>
                                <td>{lap}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
