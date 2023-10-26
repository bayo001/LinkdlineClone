import { useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal"

const Main = (props) => {
    const [showModal, setShadowModal] = useState ("close")

    const handleClick  = (e) => {
        e.preventDefault();
        if (e.target !==e.currentTarget){
            return;
        } 

        switch (showModal) {
            case "open" :
                setShadowModal("close")
                break;
                case "close":
                    setShadowModal("open");
                    break;
                    default:
                        setShadowModal("close")
                        break;
        }
    };


    return(
        <Container>
            <Sharebox>
                share
              
            <div >
            <img src="/images/user.svg" alt="" />
                <button onClick={handleClick}>Share a post</button>
            </div>
            
            <div>
                <button>
                 <img src="/images/photo-144.svg" alt="" /> 
                
                <span>Photo</span>  
                </button>

                <button>
                <img src="/images/video-75.svg" alt="" />
                <span>Video</span>  
                </button>

                <button>
                <img src="/images/specified-event.svg" alt="" />
                <span>Event</span>  
                </button>

                <button>
                <img src="/images/icon-article.svg" alt="" />
                <span> Article</span>  
                </button>
            </div>
            </Sharebox>

            <Article>
                <Actorshare>
                    <a>
                    <img src="/images/user.svg" alt="" />
                    <div>
                        <span>Tittle</span>
                        <span>info</span>
                        <span>Date</span>
                    </div>
                    </a>
                    {/* <button> <img src="/images/photo.svg" alt="" /></button> */}
                </Actorshare>
                <Description>description</Description>
                <Shareiage> 
                    <a>
                    <img src="/images/beautiful-girl.jpg" alt="" />
                    </a>            
                </Shareiage>
                <Socialcounts>
                        <li>
                            <button>
                            <img src="/images/like-16.svg" alt="" />
                            <img src="/images/like-54.svg" alt="" />
                            <span>75</span>
                            </button>
                        </li>
                        <li> 2 comments</li>
                    </Socialcounts>

                    <Socialicon>
                    <button>
                    <img src="/images/like-54.svg" alt="" />
                    <span>like</span>
                    </button>
                    <button>
                    <img src="/images/comment-65.svg" alt="" />
                    <span>comment</span>
                    </button>
                    <button>
                    <img src="/images/share-74.svg" alt="" />
                    <span>share</span>
                    </button>
                    <button>
                    <img src="/images/send-out-2.svg" alt="" />
                    <span>sends</span>
                    </button>
                    </Socialicon>
                    
            </Article>
            <PostModal showModal={showModal} handleClick={handleClick}/>
        </Container>
    )
};

const Container = styled.div`
grid-area: "Main";
`;

const Commoncard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgba(0 0 0 /15%);
`;

const Sharebox = styled(Commoncard)`
display: flex;
flex-direction: column; 
color: #956675;
margin: 0 0 8px;
background: white;
div {
    button{
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    
    }

    &:first-child{
            display: flex;
            align-items: center;
            padding: 8px 16px 8px 16px;

            img{
                width: 48px;
                border-radius:50%;
                margin-right: 8px;
            }

            button{
            margin: 4px 0;
            flex-grow: 1;
            padding-left: 16px;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 35px;
            background-color: white;
            text-align: left;
        } 
        } 

        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button{
                img{
                    margin: 0 4px 0 -2;
                }
                Span {
                    color:darkgrey;
                }
            }
        }

     
}  
`;

const Article = styled(Commoncard)`
padding: 0;
margin: 0 0 8px;
overflow: visible;
`;

const Actorshare = styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 14px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img{
        width: 48px;
        height: 48px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left: 8px;
        overflow: hidden;

        span{
            text-align: left;
            &:first-child{
                font-size: 14px;
                font-weight: 700;
                color: rgba(0, 0, 0, 1);
            }

            &:nth-child(n + 1){
            font-size: 12px;
            color: rgba(0, 0, 0, 6);
        }
            
        }
    }
}
button {
    position: absolute;
    right: 8px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
}

`;

const Description = styled.div`
padding: 0 14px;
overflow: hidden;
color: rgba(0, 0, 0, 0.9);
font: 14px;
text-align: left;
`;

const  Shareiage = styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background: #f9fafb;

img{
    width: 100%;
    object-fit: contain;
}
`;
 
const Socialcounts = styled.ul`
display: flex;
list-style:none;
line-height:1.3;
button {
    display:flex;
    justify-content:space-between;
    margin-right:40px;
    border: none;
    border-bottom: 1px solid #e9e5df;
}
`;

const Socialicon = styled.div`
 display: flex;
justify-content: flex-start;
border: none;
min-height: 40px;
padding: 4px 8px;
button {
    display:inline-flex;
    align-items:center;
    padding: 8px;
    color: #0a66c2;
    img {
        width: 40px;
        display: flex;
        justify-content: flex-start;
        height: 23px;
        border: none;
    }
   
}
`;





export default Main;