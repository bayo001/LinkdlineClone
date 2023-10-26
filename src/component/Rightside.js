import styled from "styled-components";



const Rightside = (props) => {
    return(
       <Container>
        <Followcard>
            <Title>
                <h2>Add to your feed</h2>
                <img src="/images/feed-icon.svg" alt="error" />
            </Title>
            <Feedlist>
                <li>
                    <a>
                        <Avatar />
                    </a>
                    <div>
                        <span>#Linkdline</span>
                        <button>Follow</button>
                    </div>
                </li>
                <li>
                    <a>
                        <Avatar />
                    </a>
                    <div>
                        <span>#Video</span>
                        <button>follow</button>
                    </div>
                </li>
            </Feedlist>
            <Recomendation>
                View all recomendation
                <img src="/images/right-icon.svg" alt="error" />  
            </Recomendation>
        </Followcard>
        <Bannercard>
        <img
          src="images/jobs.jpg"
          alt=""
        />
        </Bannercard>
       </Container>
    )
}

const Container = styled.div`
grid-area: "Rightside";
`;

const Followcard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgba(0 0 0 /15%);
padding: 12px;
`;

const Title = styled.div`
display: inline-flex;
align-items: center;
justify-content: space-between;
font-size: 14px;
width: 100%;
color: rgba(0, 0, 0, 0.6);
`;

const Feedlist = styled.ul`
list-style: none;
margin-top: 15px;
li{
    display: flex;
    align-items: center;
    margin: 14px 0;
    position: relative;
    font-size: 14px;

    & > div {
        display: flex;
        flex-direction: column;
    }

    button {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.6);
        padding: 16px;
        align-items: center;
        border-radius: 15px;
        box-sizing: border-box;
        font-weight: 600;
        display: inline-flex;
        justify-content: center;
        max-height: 32px;
        max-width: 400px;
        text-align: center;
        outline: none;
    }
}
`;

const Avatar = styled.div`
background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width: 40px;
height: 40px;
margin-right: 8px;
`;

const Recomendation = styled.div`
color: #0a66c2;
display: flex;
align-items: center;
font-size: 14px;
`;

const Bannercard = styled(Followcard)`
img {
    width: 100%;
    height: 100%;
    
}
`;

export default Rightside;