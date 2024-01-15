import './Button.module.css';

export const Button = ({ onloadMore }) => {
  return (
    <div className="Button-container" onClick={onloadMore}>
      <button type="button" className="Button">
        Load more
      </button>
    </div>
  );
};
