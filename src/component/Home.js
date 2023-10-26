import styled from "styled-components";
import Header from "./Header"
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Navigate } from "react-router-dom";
import {  connect } from "react-redux";

const Home = (props) => {
    return(
        <div>
            <Header />
            { !props.user && <Navigate to="/" /> }
            <Container>
               <Section>
                <h5><a>Hirring in a hurry</a></h5>
                <p>Find talented props in records with up work and business moving</p>
               </Section>
               <Layout>
                <Leftside />
                <Main />
                <Rightside />
               </Layout>
            </Container>


        </div>
    )
}


const Container = styled.div`
padding-top: 55px;
max-width: 100%;
`;

const Section = styled.section`
min-height: 50px;
padding: 16px;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
display: flex;
justify-content: center;

h5 {
    color: #0a66ca;
    font-size: 14px;
}

a{
    font-weight: 700;
    color: #a34469;
}

@media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
}

`;

const Layout = styled.div`
display: grid;
grid-template-areas: "leftside main rightside";
grid-template-columns: minmax(0, 500px) minmax(0, 1142px) minmax(300px, 7px);    
column-gap: 25px;
row-gap: 25px;
margin: 25px 0;


@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
}
`;

const mapStatetoprops = (state) => {
    return {
        user: state.userState.user,
    }
}

// export default Home;
export default connect(mapStatetoprops)(Home);