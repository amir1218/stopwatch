import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';


export default function DisplayModeToggle() {
    const [darkMode, setDarkMode] = useState(true)


    function toggleMode(e) {
        setDarkMode(prevVal => !prevVal);

        const html = document.getElementsByTagName("html")[0];
        if (darkMode) {
            html.setAttribute('data-bs-theme', 'dark');
        } else {
            html.setAttribute('data-bs-theme', 'light');
        }
    }

    return <Form style = {{ justifyContent:'right', float: 'right' }}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    onChange={toggleMode}
                />
           </Form>
}
