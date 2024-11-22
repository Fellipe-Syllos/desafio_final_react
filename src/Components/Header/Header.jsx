import { Link } from 'react-router-dom'
import { Containerheader, Nav, Ul, Li   } from './styleHeader.jsx'
export default function Header() {
    return (
        <Containerheader>
            <Nav>
                <img src="/logo.png" alt="Logo Starburks" />
                <Ul>
                    <Li><Link to="/">Home</Link></Li>
                    <Li><Link to="/sobre">Sobre</Link></Li>
                    <Li><Link to="/novidades">Novidades</Link></Li>
                </Ul>
            </Nav>
        </Containerheader>
    )
}