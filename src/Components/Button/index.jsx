export const Button = ({ btnInner, handleClick }) => {
  return <button onClick={handleClick}>{btnInner}</button>;
};

export default Button;
