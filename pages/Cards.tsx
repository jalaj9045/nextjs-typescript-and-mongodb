import React from 'react'
import { Card } from 'react-bootstrap'
import Image from 'next/image'
function Cards() {
  return (
    <>
    
    <div className="card-caontainer">
    <Card className='Mycard'>
  <Card.Body>
    <Card.Title className='text-center'><Image src="/analytics.png" width={65} height={65}/></Card.Title>
    <Card.Text>
    <Card.Title>Risk Intelligence</Card.Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
    </Card.Text>
  </Card.Body>
</Card>

<Card className='Mycard'>
  <Card.Body>
    <Card.Title className='text-center'><Image src="/dataanyl.png" width={65} height={65}/></Card.Title>
    <Card.Text>
    <Card.Title>Big data analytics</Card.Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
    </Card.Text>
  </Card.Body>
</Card>

<Card className='Mycard'>
  <Card.Body>
    <Card.Title className='text-center'><Image src="/open-source.png" width={65} height={65}/></Card.Title>
    <Card.Text>
    <Card.Title>Sourcing Intelligence</Card.Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="card-caontainer">
    <Card className='Mycard'>
  <Card.Body>
    <Card.Title className='text-center'><Image src="/lightbulb.png" width={65} height={65}/></Card.Title>
    <Card.Text>
    <Card.Title>Smart procurement</Card.Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
    </Card.Text>
  </Card.Body>
</Card>

<Card className='Mycard'>
  <Card.Body>
    <Card.Title className='text-center'><Image src="/image 212.png" width={65} height={65}/></Card.Title>
    <Card.Text>
    <Card.Title>Technological supports</Card.Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
    </Card.Text>
  </Card.Body>
</Card>

<Card className='Mycard'> 
  <Card.Body>
    <Card.Title className='text-center'><Image src="/image 213.png" width={65} height={65}/></Card.Title>
    <Card.Text>
    <Card.Title>C-Smart Marketing</Card.Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
    </Card.Text>
  </Card.Body>
</Card>
</div>
    </>
  )
}

export default Cards