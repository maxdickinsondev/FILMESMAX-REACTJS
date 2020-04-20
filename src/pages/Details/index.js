import React, { Component } from 'react';
import { FaRegMoneyBillAlt, FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';

import { Container, MovieImage, MovieInfo, Title, Description, 
    Info, Genres, OthersInfo, ReleaseData, Duration, Budget 
} from './styles';

export default class Details extends Component {
    state = {

    };

    async componentDidMount() {
        const { match } = this.props;
    }

    render() {
        return (
            <Container>
                <MovieImage 
                    src="http://image.tmdb.org/t/p/w300/iBvo3qOPcmhlqAaJcXcQHtx2qLk.jpg"
                />
    
                <MovieInfo>
                    <Info>
                        <Title>Mortal Kombat Legends: Scorpion's Revenge</Title>
                        <Description>
                            um texto qualquer so pra ver se não estar ultrapassando um texto qualquer so pra ver se não estar ultrapassando um texto qualquer so pra ver se não estar ultrapassando um texto qualquer so pra ver se não estar ultrapassando um texto qualquer so pra ver se não estar ultrapassando um texto qualquer so pra ver se não estar ultrapassando
                        </Description>
                        <Genres> Genres: Fantasy, Action, Adventure, Animation </Genres>
                    </Info>
    
                    <OthersInfo>
                        <ReleaseData>
                            <FaRegCalendarAlt 
                                size={30}
                                style={{ marginRight: '10px' }}
                            />
                            Release data: 11.4.2020 
                        </ReleaseData>

                        <Duration>
                            <FaRegClock 
                                size={30}
                                style={{ marginRight: '10px' }} 
                            />
                            Duration: 1h 20m 
                        </Duration>

                        <Budget> 
                            <FaRegMoneyBillAlt 
                                size={30} 
                                style={{ marginRight: '10px' }} 
                            />
                            Budget: $85.000.000 
                        </Budget>
                    </OthersInfo>
                </MovieInfo>
            </Container>
        );  
    }
}