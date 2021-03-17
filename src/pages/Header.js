import styled from "styled-components";

const Header = ({url, head}) => {

    const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url});
    height: 380px;
    max-width: 1000px;
    background-position: cover;
    position: relative;
    margin: 20px auto 0 auto;
    `
    const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);

    `

    return (
        <HeroImage>
            <HeroText className="hero-text">
            <h1>{`${head}`}</h1>     
            </HeroText>
        </HeroImage>
        
    )
}

export default Header;