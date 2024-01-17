import css from './Button.module.css';

export const Button = ({ onloadMore }) => {
  return (
    <div className={css.Buttoncontainer} onClick={onloadMore}>
      <button type="button" className={css.Button}>
        Load more
      </button>
    </div>
  );
};
