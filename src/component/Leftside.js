import styled from "styled-components";
import {  connect } from "react-redux";



const Leftside = (props) => {
    return(
       <Container>
        <Artcard>
            <Userinfo>
              <Cardbackground />

              <a>
               <Photo />
               <Link>welcome, {props.user ? props.user.displayName : ""}</Link>
              </a>
              <a>
                <Addphototext>Add a photo</Addphototext>
              </a>
             
            </Userinfo>

            <Widget>
                <a>
                    <div>
                    <span>Connection</span>
                     <span>Grow your network</span>
                    </div>
                    <img src="/images/widget-icon.svg" alt="error" />
                </a>
            </Widget>
            <Icon>
                <span>
                <img src="/images/item-icon.svg" alt="error" />
                My items
                </span>
            </Icon>
        </Artcard>
        <Communitycard>
            <a><span>Groups</span></a>
            <a>
                <sapn classname="b">
                    Event
                    <img src="/images/plus-icon.svg" alt="error" />
                </sapn>
            </a>
            <a>
                <span>Follow messages</span>
            </a>
            <a>
                <span>Discover More</span>
            </a>
        </Communitycard>
       </Container>
    )
}

const Container = styled.div`
grid-area: "leftside";
`;

const Artcard = styled.div`
text-align: center;
overflow : hidden;
margin-bottom: 0px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgba(0 0 0 / 15%);
`;

const Userinfo = styled.div`
border-radius: 1px solid rgba(0, 0, 0, 0.5);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
`;

const Cardbackground = styled.div`
background: url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
height: 54px;
margin: -12px -12px 0;
`;

const Photo = styled.div`
box-shadow: none;
background-image: url("/images/photo.svg") ;
background-image: url("/images/photo.svg");
width: 72px;
height: 72px;
box-sizing: border-box;
background-clip: content-box;
background-color: white;
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
border: 2px solid white;
margin: -38px auto 12px;
border-radius: 50%;
`;

const Link = styled.div`
font-size: 16px;
line-height: 1.5;
color: rgba(0, 0, 0, 0.9);
font-weight: 600;
`;

const Addphototext = styled.div`
color: #0a66c2;
margin-top: 4px;
font-size: 14px;
line-height: 1.33;
font-weight: 400;
padding-bottom: 12px;
border-bottom:  1px solid rgba(0, 0, 0, 0.15);
`;

const Widget = styled.div`
border-bottom:  1px solid rgba(0, 0, 0, 0.15);
padding-top: 12px;
padding-bottom: 12px;

& > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    div {
        display: flex;
        flex-direction: column;
        text-align: left;

        span {
            font-size: 12px;
            line-height: 1.333;
            &:first-child{
                color: rgba(0, 0, 0, 0.6);
            }

            &:nth-child(2){
                color: rgba(0, 0, 0, 1);
            }
        }
    }
}

svg {
    color: rgba(0, 0, 0, 1);
}

`;

const Icon = styled.div`
text-align: left;
padding: 12px;
font-size: 12px;
display: block;
span{
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
  
}
&:hover{
    background-color: rgba(0, 0, 0, 0.08);
}

`;  

const Communitycard = styled(Artcard)`
padding: 8px 0 0;
text-align: left;
display: flex;
flex-direction: column;
a{
    color: block;
    padding: 4px 12px 4px 12px;
    font-size: 12px;


    &:hover {
        color: #0a66c2;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &:last-child{
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
        border-top: 1px solid  rgba(0, 0, 0, 0.15) ;
        padding: 12px;

        &:hover{
            background-color: rgba(0, 0, 0, 0.08);
        }
    }

   
}
`;

const mapStatetoprops = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapStatetoprops)(Leftside)

// export default Leftside;