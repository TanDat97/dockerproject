import Link from "next/link"
import fetch from "isomorphic-unfetch"

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link  href="/">
        <button>Back</button>
      </Link>
      <div>Robots data</div>
      <div>
        {
          props.robots.map(robot => (
            <li key={robot.id}>
              <Link href={`robot/${robot.id}`}>
                <a>{robot.name}</a>
              </Link>
            </li>
          ))
        }
      </div>
    </div>
  )
}

Robots.getInitialProps = async function()  {
  const res = await  fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  console.log(data)
  return {
    robots: data
  }
}

export  default  Robots;