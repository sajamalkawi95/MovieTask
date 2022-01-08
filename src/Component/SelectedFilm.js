import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
export class SelectedFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: this.props.show
        }
    }
    render() {
        return (
            <Modal
                size="xl"
                show={this.state.show}
                onHide={() => this.setState({ show: !this.state.show })}
            >
                <div style={{ backgroundColor: '#121212', color: "white" }}>
                    <Modal.Header closeButton>
                        <Modal.Title >
                            {this.props.item.original_title || this.props.item.name}
                        </Modal.Title>
                        <div className='release_date'>
                            <button> release date {this.props.item.release_date}</button>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container2'>
                            <div >
                                <img src={`https://image.tmdb.org/t/p/w500/${this.props.item.poster_path}`} alt="adidas" />
                            </div>
                            <div>
                                <div className="card">
                                    <div className="sneaker">
                                        <img src={`https://image.tmdb.org/t/p/w500/${this.props.item.backdrop_path}`} alt="adidas" />
                                    </div>
                                    <div className="info">
                                        <h2 className="title">
                                            {this.props.item.original_title || this.props.item.name}
                                        </h2>
                                        <h3>
                                            overview :   {this.props.item.overview}
                                        </h3>

                                        <div class="sizes">
                                            <button class="active">popularity</button>
                                            <button class="active">rate</button>
                                            <button class="active">votes</button>
                                        </div>

                                        <div class="sizes">
                                            <button class="active">{this.props.item.popularity}</button>
                                            <button class="active">{this.props.item.vote_average}</button>
                                            <button class="active">{this.props.item.vote_count}</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                </div>
            </Modal >
        )
    }
}

export default SelectedFilm
