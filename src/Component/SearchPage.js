import React, { Component } from 'react'
import SearchResult from './SearchResult';

export class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searhMovie: "challnge",
            resultMovie: []
        }
    }
    allMovie = () => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(resultMovie => resultMovie.json())
            .then(resultMovie => this.setState({ resultMovie: resultMovie.results }))
    }
    componentDidMount = () => {
        this.allMovie();
    }
    handleMovie = async (e) => {
        console.log(e.target.value);
        if (e.target.value !== "") {
            this.setState({
                searhMovie: e.target.value
            })
            this.exploreMovie();
        } else {
            this.allMovie();
        }
    }
    // `https://api.themoviedb.org/3/discover/movie?with_keywords=${this.state.searhMovie}&&with_genres=18&&api_key=${process.env.REACT_APP_API_KEY}&&sort_by=popularity`
    exploreMovie = async () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.searhMovie}`)
            .then(resultMovie => resultMovie.json())
            .then(resultMovie => this.setState({ resultMovie: resultMovie.results }))
    }
    render() {
        return (
            <center>
                <div >
                    <input className='SearchInput' type="text" id="cityName"
                        name="search" placeholder=" ... Search .... "
                        onChange={(e) => this.handleMovie(e)} />
                    {this.state.resultMovie.length > 0 ?
                        <SearchResult allMovies={this.state.resultMovie} />
                        :
                        <h1>no movie found</h1>
                    }

                </div>
            </center >
        )
    }
}

export default SearchPage
