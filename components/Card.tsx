import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface IParams {
  src?: string
  description?: string
  imgSize?: number
  href?: string
}

const Card = (props: IParams) => {
  return (
    <a href={props.href || 'https://github.com/NathanFirmo'}
      target='noreferrer'
      rel='next'
      className={styles.styledLink}>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.itemLogo}>
            <Image
              src={props.src || 'https://img.icons8.com/office/100/000000/logo.png'}
              alt="logo"
              width={props.imgSize || 64}
              height={props.imgSize || 64}
            />
          </div>
          <div className={styles.itemDescription || 'Description'}>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card

// 