import Link from 'next/link'
import Image from "../components/images"

const About = () => {
  return (
    <div style={{fontSize: '20px', color: 'blue'}}>
      <h1>About</h1>
      <Image/>
      <Link href="/"><button>Back</button></Link>
    </div>
  )
}

export default About