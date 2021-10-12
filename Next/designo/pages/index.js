import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modules/Home.module.css'
import { homeData } from '../data/homeData'
import ProjectCards from '../comps/ProjectCards'
import { portfolioData } from '../data/portfolioData'
import QualitiesCard from '../comps/QualitiesCard'

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

      <section className={styles.portfolioCard} >
        {
          portfolioData.map( (portfolio, index) =>(
            <ProjectCards header={portfolio.header} link={portfolio.link} cta={portfolio.cta} image={portfolio.image} key={index} />
          ) )
        }       
      </section>

      <section className={styles.qualities} >
        {homeData.qualities.map( (quality,index) => (
          <QualitiesCard key={index} src={quality.image} alt={quality.imageAlt} header={quality.header} des={quality.description} bg={homeData.bg} />
        )  )}
      </section>
    </div>
  )
}
