import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../actions";



const Header = (props) => {
    return(
        <Container>
            <Content>
               <Logo>
                <a href="/home">
                    <img src="/images/home-logo.svg"></img>
                </a>
               </Logo>
               <Search>
                <div>
                    <input type="text" placeholder="search"></input>
                </div>
                <Searchicon>
                <img src="/images/search-icon.svg"></img>
                </Searchicon>
               </Search>
               <Nav>
                <NavListwrap>
                    <Navlist className="active">
                         <a>
                       <img src="/images/nav-home.svg"></img>
                       <span>Home</span>
                        </a>
                    </Navlist>

                    <Navlist>
                         <a>
                       <img src="/images/nav-jobs.svg"></img>
                       <span>jobs</span>
                        </a>
                    </Navlist>

                    <Navlist>
                         <a>
                       <img src="/images/nav-network.svg"></img>
                       <span>network</span>
                        </a>
                    </Navlist>

                    <Navlist>
                         <a>
                       <img src="/images/nav-messaging.svg"></img>
                       <span>message</span>
                        </a>
                    </Navlist>

                    <Navlist>
                         <a>
                       <img src="/images/nav-notifications.svg"></img>
                       <span>notification</span>
                        </a>
                    </Navlist>

                    <User>
                        <a>
                            {props.user && props.user.photoURL ? (<img src={props.user.photoURL}></img>) :
                           ( <img src="/images/user.svg"></img>)}
                        <span>user</span>
                        <img src="/images/down-icon.svg"></img> 
                        </a>

                        <SignOut onClick={() => props.SignOut()}>
                            <a>SIgn out</a>
                        </SignOut>
                    </User>

                    <Work>
                        <a>
                        <img src="/images/nav-work.svg"></img>
                        <span>Work
                        <img src="/images/down-icon.svg"></img>
                        </span>
                        </a>
                    </Work>

                </NavListwrap>
                </Nav>
            </Content>
        </Container>
    );
}

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.06);
left: 0;
position: fixed;
padding: 0 24px;
top: 0;
/* width: 100vh; */
width: 100%;
z-index: 100;
`;

const Content = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
max-height: 100%;
max-width: 1128px;
`;

const Logo = styled.div`
margin-right: 8px;
font-size: 0px;
`;

const Search = styled.span`
opacity: 1;
flex-grow: 1;
position: relative;
& > div{
    max-width: 280px;
    input {
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        border-radius: 2px;
        color: rgba(0, 0, 0, 0.9);
        width: 218px;
        padding: 0 8px 0 40px;
        line-height: 1.75px;
        font-weight: 400;
        font-size: 14px;
        height: 34px;
        background-color: #dce5f1;
        vertical-align: text-top;
    }
}
`;

const Searchicon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 2px;
border-radius: 0 2px 2px 0;
margin: 0; 
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
`;

const Nav = styled.nav`
margin-left: auto;
display: block;
@media (max-width: 768px){
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
}
`;



const NavListwrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;

.active {
    span:after {
        content: "";
        transform: scaleX(1);
        border-bottom: 2px solid var(--white, #fff);
        bottom: 0;
        left: 0;
        position: absolute;
        transition: transform 0.2s ease-in-out;
        width: 100%;
        border-color: rgba(0, 0, 0, 0.9);
    }
}
`;

const Navlist = styled.li`
display: flex;
align-items: center;

a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        font-weight: 300;
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        min-width: 70px;
    }
}

&:hover,
&:active {
    a {
        span{
            color: rgba(0, 0, 0, 0.9);
        }
    }
}
`;

const SignOut = styled.div`
position: absolute;
top: 65px;
background: white;
border-radius: 0 0 5px 5px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: none;
`;

const User = styled.a`
a > img {
        width: 24px;
        height: 24px;
        border-radius: 50px;
      
    }

    span {
        align-items: center;
        display: flex;
       }
       margin-left: 10px;
       text-align: center;

       &:hover {
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content:center;
        }
       }
       

`;

const Work = styled.a`
a > img {
        width: 24px;
        height: 24px;
    
      
    }

    span {
        align-items: center;
        display: flex;
       }

       border-left: 1px solid rgba(0, 0, 0, 0.06);
       margin-left: 32px;
       padding-left: 10px;
       text-align: center;

`;

const mapStatetoprops = (state) => {
    return{
         user: state.userState.user
    };
};

const mapDispatchToprops = (dispatch) => ({
    SignOut: () => dispatch(signOutAPI())
});



export default connect( mapStatetoprops, mapDispatchToprops)(Header)