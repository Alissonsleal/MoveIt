import { ButtonHTMLAttributes } from 'react';
import { FaPlay } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const CycleButton: React.FC<ButtonProps> = ({ active, ...rest }) => {
  return (
    <Container type="button" isActive={active} {...rest}>
      {active ? (
        <strong>
          Iniciar um ciclo
          <ImCross color={'#666666'} />
        </strong>
      ) : (
        <strong>
          Abandonar ciclo
          <FaPlay />
        </strong>
      )}
    </Container>
  );
};

export default CycleButton;