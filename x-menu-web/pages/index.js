import Head from 'next/head'

import Slide from '../Components/Slide'
import Navbar from '../Components/Navbar'
import Image from 'next/image'

import { Row, Col, Button, Typography } from 'antd'

const Title = Typography.Title

export default function Home() {
  return (
    <div>
      <Head>
        <title>xMENU</title>
        <meta name="description" content="Find your menu here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Slide banner>
          <Title level={4} style={{}}>Browsing Restaurants ?</Title>
          <Title level={1} style={{margin: 0}}>xMENU</Title>
          <Title level={4} style={{width: '45%'}}>
            xMENU is a web application that allows you to create and manage your own menu. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolor fuga fugiat temporibus, quae quisquam inventore vero quos laudantium molestiae eaque corporis, assumenda vel cumque sit ducimus consectetur quod doloremque.
          </Title>
        </Slide>

        <Navbar />

        <Slide>
          <Row>
            <Col span={10}>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nobis dolor in atque vero quia tenetur?</h2>
              <h2>Lorem ipsum dolor sit.</h2>
              <h2>Lorem ipsum dolor sit.</h2>
              <h2>Lorem ipsum dolor sit.</h2>
            </Col>
            <Col span={10} offset={4}>
              <Image src="https://picsum.photos/600/300" alt="side 1" width={600} height={300} />
            </Col>
          </Row>
        </Slide>
        
        <Slide>
          <Row>
            <Col span={10}>
              <Image src="https://picsum.photos/600/300" alt="side 2" width={600} height={300} />
            </Col>
            <Col span={10} offset={4}>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nobis dolor in atque vero quia tenetur?</h2>
              <h2>Lorem ipsum dolor sit.</h2>
              <h2>Lorem ipsum dolor sit.</h2>
              <h2>Lorem ipsum dolor sit.</h2>
            </Col>
          </Row>
        </Slide>

        <Row>
          <Col span={4} offset={1}>
            <h3>Benefits of xMENU</h3>
          </Col>
          <Col span={4} offset={2}>
            <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
          </Col>
          <Col span={4} offset={2}>
            <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
          </Col>
          <Col span={4} offset={2}>
            <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h3>
          </Col>
        </Row>

        <Slide center>
          <h2>Browsing Restaurants ?</h2>
          <h1 style={{margin: 0}}>xMENU</h1>
          <h2 style={{width: '45%'}} align="center">
            xMENU is a web application that allows you to create and manage your own menu. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <Row>
            <Col>
              <Button type="primary" shape="round" size="large">
                Browse restaurants
              </Button>
            </Col>
            <Col style={{marginLeft: '15px'}}>
              <Button type="primary" shape="round" size="large" style={{width: '175px'}}>
                Add your menu
              </Button>
            </Col>
          </Row>
        </Slide>
        
        <Slide isFooter>
          <Row>
            <Col span={2}>
              <Image src="https://picsum.photos/50/50" alt="logo" width={50} height={50} />
            </Col>
            <Col span={2} offset={20}>
              <Image src="https://picsum.photos/50/50" alt="logo" width={50} height={50} />
            </Col>
          </Row>
        </Slide>
      </main>
      
    </div>
  )
}
