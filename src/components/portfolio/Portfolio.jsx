import { useRef } from "react"
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum minima harum dolor, ducimus perspiciatis laudantium maxime itaque alias error nesciunt!"
    },
    {
        id: 2,
        title: "Next.JS Commerce",
        img: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum minima harum dolor, ducimus perspiciatis laudantium maxime itaque alias error nesciunt!"
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum minima harum dolor, ducimus perspiciatis laudantium maxime itaque alias error nesciunt!"
    },
    {
        id: 4,
        title: "Java API Rest",
        img: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum minima harum dolor, ducimus perspiciatis laudantium maxime itaque alias error nesciunt!"
    }
]

    const Single = ({item}) => {

        const ref = useRef()

        const {scrollYProgress} = useScroll({
            target: ref,
            //offset: ["start start", "end start"]
        })

        const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

        return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>)
    }

export function Portfolio() {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
}

export default Portfolio