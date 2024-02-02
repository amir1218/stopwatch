import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Laps(props) {
    return (
        <>
            <h2 style={{padding: '0px 0px 0px 0px'}}>Laps</h2>
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
