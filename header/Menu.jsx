import Link from 'next/link';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classes from './menu.module.scss';

const Menu = ({ isOpen, toggleMenu, querySense }) => {
  const classMenu = classNames(classes.menu, { [`${classes.toggle}`]: isOpen });
  return (
    <div className={classMenu}>
      <ul className={classes.menu__container}>
        <li className={classes['menu-item']}>
          <button className={`${classes.btn} ${classes['btn-test']}`}>
            <img src="https://bodyvic.com/img/girl.svg" alt="Avatar" />
            Test
          </button>
          <FontAwesomeIcon className={classes.close} icon={faTimes} onClick={toggleMenu} />
        </li>
        <li className={classes['menu-item']}>
          <Link href="/" as="/" onClick={toggleMenu}>
            <a className={classes.btn}>На главную</a>
          </Link>
        </li>
        <li className={classes['menu-item']}>
          <Link href="/users/[userId]" as={`/users/${querySense}`} onClick={toggleMenu}>
            <a className={classes.btn}>Мой кабинет</a>
          </Link>
        </li>
        <li className={classes['menu-item']}>
          <Link href="/" as="/" onClick={toggleMenu}>
            <a className={classes.btn}>На главную</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
