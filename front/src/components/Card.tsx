import React from 'react';
import '../styles/card.css';

interface CardProps {
    titulo: string;
    conteudo: string;
}

const Card: React.FC<CardProps> = ({ titulo, conteudo }) => {
  return (
    <div className="card-container">
      <h3 className="card-title">{titulo}</h3>
      <p className="card-text">{conteudo}</p>
    </div>
  );
};

export default Card;