import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { homeData } from '../data/homeData'

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>

        <div className={styles.heroLeft}>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <button className=' btn btn-dark ' >Learn more</button>
        </div>

        <div className={styles.heroRight} >
          
          <div>
   <Image src={homeData.image.srcDesktop} alt={homeData.image.alt} className={styles.heroimg} layout='responsive'/>



          </div>

         
          
            

          
          
        </div>
        
      </section>
    </div>
  )
}