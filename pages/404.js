import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

export default function Custom404() {
    return ( 
        <div className={utilStyles.notfound}><h1>404 - Page Not Found</h1>
        <img  width="100%" height="auto"
        src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif' ></img>
        </div>);
  }