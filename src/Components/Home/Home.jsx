import { Main, SectionCopo, Copo, BgCopo, SectionText, H2, Span, Div, Button } from "./style-Home"
export default function Home() {
    return (
        <Main>
            <SectionText>
                <H2>Mais que Café</H2>
                <H2>Isso é <Span>Starburks</Span></H2>
                <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                <Button>SAIBA MAIS</Button>
            </SectionText>
            <Div>
                <img src="./laranjaMini.png" alt="Copo laranja pequeno" />
                <img src="./vermelhoMIni.png" alt="Copo vermelho pequeno" />
                <img src="./amareloMini.png" alt="Copo amarelo pequeno" />
            </Div>
            <SectionCopo>
                <Copo src="./laranja.png" alt="Copo laranja grande" />
                <BgCopo src="./Ellipse-verde.png" alt="" />
            </SectionCopo>
        </Main>
    )
}