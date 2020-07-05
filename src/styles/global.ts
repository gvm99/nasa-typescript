import { createGlobalStyle} from 'styled-components'
import background from '../assets/background.jpg'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    background: url(${background});
    background-size: 1400px;
    -webkit-font-smoothing: antialiased;
}
body, input, button {
    font: 16px Roboto, sans-serif;
}
`;