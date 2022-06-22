import { Grid, Container } from '@mui/material'
import MediaCard from "../ProductCard/ProductCard";

function StoreCatalog() {
    return (
        <Container>
            <Grid container spacing={5} marginTop={0} marginBottom={5}>
                <MediaCard model="Polacrin Artex" price="12.500" rating="4.5" imgPath="https://http2.mlstatic.com/D_NQ_NP_781159-MLA49508318334_032022-O.webp"/>
                <MediaCard model="Venier Prestigio" price="15.000" rating="2" imgPath="https://http2.mlstatic.com/D_NQ_NP_834383-MLA44073838422_112020-O.webp"/>
                <MediaCard model="Recuplast Frentes" price="8.000" rating="3.5" imgPath="https://http2.mlstatic.com/D_NQ_NP_919052-MLA41100403753_032020-O.webp"/>
                <MediaCard model="Casablanca Pro" price="11.900" rating="3" imgPath="https://http2.mlstatic.com/D_NQ_NP_810890-MLA44975155881_022021-O.webp"/>
                <MediaCard model="Ingenia Pintumm" price="9.999" rating="3" imgPath="https://http2.mlstatic.com/D_NQ_NP_885423-MLA48404623302_122021-O.webp"/>
                <MediaCard model="Recuplast Interior" price="18.700" rating="5" imgPath="https://http2.mlstatic.com/D_NQ_NP_851230-MLA43390544508_092020-O.webp"/>
            </Grid>
        </Container>
    );
}

export default StoreCatalog;