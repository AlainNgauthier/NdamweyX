import React, {Component} from 'react';
import './filme.css';

class Filme extends Component{
    constructor(props){
        super(props);
        this.state = {
            filme: []
        }
    }
    
    componentDidMount(){
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
              this.setState({filme: json});
          })
    }

    render(){
        return(
            <div className="filme__content">
                <h1> {this.state.filme.nome} </h1>
                <img src={this.state.filme.foto} alt="title" />
                <h3>Sinopse</h3>
                {this.state.filme.sinopse}
            </div>
        );
    }
}
export default Filme;