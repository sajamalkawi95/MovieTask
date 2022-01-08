import React, { Component } from 'react'
import SelectedFilm from './SelectedFilm';

export default class SingleFilme extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            selected: false
        }
    }
    showDiscription = () => {

    }
    render() {
        var boxStyle;
        if (this.state.hover) {
            boxStyle = { visibility: 'visible' }
        } else {
            boxStyle = { visibility: 'hidden' }
        }
        return (
            <div className='col-3'>
                {this.state.selected &&
                    <SelectedFilm item={this.props.singleMovie} show={this.state.selected} />}
                <div className="container" onMouseMove={() => this.setState({ hover: true })}
                    onMouseOut={() => this.setState({ hover: false })} >
                    <img alt='....' src={`https://image.tmdb.org/t/p/w500${this.props.singleMovie.poster_path}`
                        || `https://image.tmdb.org/t/p/original${this.props.singleMovie.poster_path}`} />
                    <div className="content-box" style={boxStyle}>

                        <h5 className="name" onClick={() => this.setState({ selected: true })}>
                            {this.props.singleMovie.original_title || this.props.singleMovie.name}
                        </h5>

                        <h6>popularity :{this.props.singleMovie.popularity}</h6>
                        <p>{this.props.singleMovie.overview}</p>
                    </div>
                </div >

            </div>
        )
    }
}
