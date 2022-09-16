import Link from 'next/link';
import classes from './button.module.css';

const Button = (props) => {
  const { link } = props;

  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button type={props.type} className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
