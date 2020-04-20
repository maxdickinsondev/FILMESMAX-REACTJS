import React, { Component } from 'react';

import { ActorList, Header, TextHeader, List, 
    ActorImage, ActorName, ActorNameMovie
} from './styles';

export default class Actor extends Component {
    render() {
        return (
            <>
                <Header>
                    <TextHeader> Actors</TextHeader>    
                </Header>

                <ActorList>
                        <List>
                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>

                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>

                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>

                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>

                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>

                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>

                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>

                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez Juanito Torres </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>

                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>

                            <li>
                                <ActorImage src="https://image.tmdb.org/t/p/w185/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg" />
                                
                                <div>
                                    <ActorName> Selena Gomez </ActorName>
                                    <ActorNameMovie> Minerva </ActorNameMovie>
                                </div>
                            </li>
                        </List>                   
                    </ActorList>
            </>

            
        );
    }
}