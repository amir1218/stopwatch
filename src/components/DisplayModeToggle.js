import React , {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';


export default function DisplayModeToggle() {
    const [darkMode, setDarkMode] = useState(
        () => {
            return localStorage.getItem('darkmode') === 'true' ? true : false
        }
    )

    useEffect(() => {
        const html = document.getElementsByTagName("html")[0];
        if (darkMode) {
            html.setAttribute('data-bs-theme', 'dark');
        } else {
            html.setAttribute('data-bs-theme', 'light');
        }
    });

    useEffect(() => {
        localStorage.setItem('darkmode', darkMode)
    }, [darkMode]);

    function toggleMode(e) {
        setDarkMode(!darkMode);
    }

    return <Form style = {{ justifyContent:'right', float: 'right' }}>
                 <Form.Check
                    type="switch"
                    id="custom-switch"
                    onChange={toggleMode}
                    checked={!darkMode}
                />
           </Form>
}
