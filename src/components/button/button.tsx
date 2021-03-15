import { Btn, BtnOutline, ButtonContainer } from './styles';

const Button = ({ outline, curve, name, type, width, disabled, ...props }: BtnOutline) => {
  return (
    <Btn>
      <ButtonContainer
        disabled={disabled}
        width={width}
        type={type}
        name={name}
        outline={outline}
        curve={curve}>
        {name}
      </ButtonContainer>
      {props.children}
    </Btn>
  );
};

export default Button;
