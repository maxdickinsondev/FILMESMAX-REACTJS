import React, { Component } from 'react';

import { Container, Pages, ButtonPage } from './styles';

export default class Pagination extends Component {
    state = {
        currentPage: 1,
        numberPages: [],
    };

    async componentDidMount() {
        const { moviesPerPage } = this.props;
        const numberPages = [];

        let totalPages = await localStorage.getItem('numberPages');

        for (let i = 1; i < Math.ceil(totalPages / moviesPerPage); i++) {
            numberPages.push(i);
            this.setState({ numberPages: numberPages });
        }
    }

    handlePage(number) {
        if (number) {
            this.setState({ currentPage: number });
            localStorage.setItem('page', JSON.stringify(number));
            window.location.reload();
        }
    }
    
    render() {
        const { numberPages } = this.state;

        return (
            <Container>
                <Pages>
                    {numberPages.map(number => (
                        <li key={number}>
                            <ButtonPage type="button" onClick={() => this.handlePage(number)} >
                                {number}
                            </ButtonPage>
                        </li>
                    ))}
                </Pages>  
            </Container>
        )
    }
}