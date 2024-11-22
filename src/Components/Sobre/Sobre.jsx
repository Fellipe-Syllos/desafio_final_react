import { Section, Div, H3, Button } from "./style-sobre"
export default function Sobre() {
    return (
        <Section>
            <img src="/loja.png" alt="Loja antiga da Starburks em preto e branco" />
            <Div>
                <h2>PREPARAÇÃO</h2>
                <H3>Níveis de torra</H3>
                <p>
                    Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®
                </p>
                <Button>SAIBA MAIS</Button>
            </Div>
        </Section>
    )
}