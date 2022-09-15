import Link from 'next/link';
import classes from './button.module.css';

const Button = (props) => {
  const { link } = props;
  return (
    <Link href={link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
