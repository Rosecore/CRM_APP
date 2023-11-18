import { render } from 'react-dom'
import App from './app/App'
import './app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,

    document.getElementById('root')
)
