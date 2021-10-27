import React from 'react';
import { useParams } from 'react-router';

// import { Container } from './styles';

const Teste: React.FC = (props) => {
  const {  } = useParams();
  return (
    <div>
      {props}
    </div>
  );
}

export default Teste;