import React from "react";
//import ReactDOM from "react-dom";
import './App.css'
const owl = {
  title: 'Usando get imgFoto() Imagem de Coruja - aula do site codeacademy',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg',
  largura: 300,
  altura: 300
};
//retorna true ou false
const escondeImg = Math.random() < 0.5;

class Owl extends React.Component {
  get imgFoto() {
    return owl.src;
  }
  aviso() {
    return alert("Cuidado se a curuja girar, tem efeito hipnótico!!");
  }
  render() {
    if (escondeImg == true) {
      return (
        <div>
          <h1>{owl.title}</h1>
          <header className="App-header">
            <img className="App-logo" src={this.imgFoto} alt={owl.title} width={owl.largura} height={owl.altura} />
          </header>
        </div>
      );
    } else {
      return (
        <><img className="App-logo2" src={owl.src} alt={owl.title} width={owl.largura} height={owl.altura} /><button onClick={this.aviso}>Clique para alertar</button></>
      );
    }
  }
}

export default Owl
