import React from 'react';
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import {padNumberZeroes} from './../utility.js'
import Laps from './Laps.js';
import Display from './Display.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Stopwatch(props) {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const [triggerButtonText, setTriggerButtonText] = useState('Start');
    const [triggerButtonClass, setTriggerButtonClass] = useState('btn-success');

    const formattedDisplay = () => {
        return padNumberZeroes((seconds/100).toFixed(2));
    }

    const lapClickHandler = () => {
        setLaps([formattedDisplay(), ...laps])
    }

    const resetClickHandler = () => {
        setSeconds(0);
        setLaps([]);
    }

    const clickHandler = e => {
        setIsRunning(prevCounter => !prevCounter);
        setTriggerButtonText(isRunning ? 'Start' : 'Stop');
        setTriggerButtonClass(isRunning ? 'btn-success' : 'btn-danger');
    }

    useEffect(() => {
        if (isRunning) {
            let timerId = setTimeout(() => {
                setSeconds(prevCounter => prevCounter + 1);
            }, 10);

            return () => {
                clearTimeout(timerId)
            }
        }
    });

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Display value={formattedDisplay()} />
                        <div id='buttons' style={{width: '100%', textAlign: 'center'}}>
                            <Button className={triggerButtonClass} onClick={clickHandler} variant="success">{triggerButtonText}</Button>
                            <Button onClick={lapClickHandler} variant="info">Lap</Button>
                            <Button onClick={resetClickHandler} variant='warning'>Reset</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col><Laps laps={laps}/></Col>
                </Row>
            </Container>
        </>
    );
}
