import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`



const Title = styled.h3`
    font-size: 24px;
    color: ${({ theme }) => theme.text_primary};
`;

const PublicationName = styled.h4`
    font-size: 18px;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 5px;
`;

const Description = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 10px;
`;

const Link = styled.a`
    font-size: 16px;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    margin-top: 15px;
    &:hover {
        text-decoration: underline;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const PublicationCard = ({ publication }) => {
    const formatDescription = (description) => {
        return description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <Card>
            <Body>
                <Title>{publication.title}</Title>
                <PublicationName>{publication.publication}</PublicationName>
                <Description>
                    {formatDescription(publication.description)}
                </Description>
                <Link href={publication.link} target="_blank" rel="noopener noreferrer">
                    Read More
                </Link>
            </Body>
        </Card>
    );
};

export default PublicationCard;
