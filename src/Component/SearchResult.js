import React, { Component } from 'react'
import SingleFilme from './SingleFilme';

export class SearchResult extends Component {

    render() {
        return (
            <div className='row justify-content-center'>
                {
                    this.props.allMovies.map
                        (singleMovie =>
                            <SingleFilme singleMovie={singleMovie} key={singleMovie.id} />
                        )
                }
            </div>
        )
    }
}

export default SearchResult
