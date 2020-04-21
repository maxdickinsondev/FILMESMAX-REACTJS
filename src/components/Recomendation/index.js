import React, { Component } from 'react';

import { Container, Header, TextHeader, MovieList, 
    DetailsMovie, ImageMovie, TitleMovie, Genre 
} from './styles';

export default class Recomendation extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <TextHeader> Recomendations </TextHeader>    
                </Header>

                <MovieList>
                    <DetailsMovie to="/">
                        <li>
                            <ImageMovie src="https://image.tmdb.org/t/p/w185/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" />

                            <div>
                                <TitleMovie>Birds of Pre: One Harley Quinn</TitleMovie>
                                <Genre> Action, Crime, Comedy </Genre>
                            </div>
                        </li>

                        <li>
                            <ImageMovie src="https://image.tmdb.org/t/p/w185/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" />

                            <div>
                                <TitleMovie>Birds of Pre: One Harley Quinn</TitleMovie>
                                <Genre> Action, Crime, Comedy </Genre>
                            </div>
                        </li>  

                        <li>
                            <ImageMovie src="https://image.tmdb.org/t/p/w185/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" />

                            <div>
                                <TitleMovie>Birds of Pre: One Harley Quinn</TitleMovie>
                                <Genre> Action, Crime, Comedy </Genre>
                            </div>
                        </li>  

                        <li>
                            <ImageMovie src="https://image.tmdb.org/t/p/w185/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" />

                            <div>
                                <TitleMovie>Birds of Pre: One Harley Quinn</TitleMovie>
                                <Genre> Action, Crime, Comedy </Genre>
                            </div>
                        </li>  

                        <li>
                            <ImageMovie src="https://image.tmdb.org/t/p/w185/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" />

                            <div>
                                <TitleMovie>Birds of Pre: One Harley Quinn</TitleMovie>
                                <Genre> Action, Crime, Comedy </Genre>
                            </div>
                        </li>  

                        <li>
                            <ImageMovie src="https://image.tmdb.org/t/p/w185/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" />

                            <div>
                                <TitleMovie>Birds of Pre: One Harley Quinn</TitleMovie>
                                <Genre> Action, Crime, Comedy </Genre>
                            </div>
                        </li>  

                        <li>
                            <ImageMovie src="https://image.tmdb.org/t/p/w185/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" />

                            <div>
                                <TitleMovie>Birds of Pre: One Harley Quinn</TitleMovie>
                                <Genre> Action, Crime, Comedy </Genre>
                            </div>
                        </li>  

                        <li>
                            <ImageMovie src="https://image.tmdb.org/t/p/w185/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" />

                            <div>
                                <TitleMovie>Birds of Pre: One Harley Quinn</TitleMovie>
                                <Genre> Action, Crime, Comedy </Genre>
                            </div>
                        </li>  
                    </DetailsMovie>
                </MovieList>
            </Container>
        );
    }
}