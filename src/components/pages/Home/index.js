import React, {Component} from 'react';
import './home.css';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        this.state= {
            filmes: []
        };

        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes(){
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
         .then((received) => received.json())
         .then((json) => {
             this.setState({filmes: json});
             //console.log(json);
            });
    }

    render(){
        return(
            <div className="home">
                <div className="home__content">
                    { this.state.filmes.map((items) => {
                        return(
                            <div key={items.id} className="home__content__card">
                                <span className="home__content__name">{items.nome}</span>
                                <div className="home__content__card-img">
                                    <img src={items.foto} alt="foto" />
                                </div>
                                <Link to={`/filme/${items.id}`}>+</Link>
                            </div>
                        )
                        }) 
                    }
                </div>
            </div>
        )
    }
}

export default Home;