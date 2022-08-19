import Head from 'next/head'

import Slide from '../Components/Slide'
import Navbar from '../Components/Navbar'
import Image from 'next/image'

import { Row, Col, Button, Typography } from 'antd'
import { FacebookOutlined } from '@ant-design/icons';

const Title = Typography.Title

export default function Home() {
  const titleStyle = {
    fontSize: '8em',
    color: '#519872',
    margin: 0,
    marginBottom: 0,
    lineHeight: 'normal'
  }

  const subtitleStyle = {
    fontSize: '4em',
  }

  const secondaryColor = {
    color: '#3B5249'
  }

  return (
    <div>
      <Head>
        <title>xMENU</title>
        <meta name="description" content="Find your menu here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Slide banner>
          <Title level={4} style={secondaryColor}>Browsing Restaurants ?</Title>
          <Title level={1} style={titleStyle}>xMENU</Title>
          <Title level={4} style={{...secondaryColor, width: '45%'}}>
            xMENU is a web application that allows you to create and manage your own menu. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolor fuga fugiat temporibus, quae quisquam inventore vero quos laudantium molestiae eaque corporis, assumenda vel cumque sit ducimus consectetur quod doloremque.
          </Title>
        </Slide>

        <Navbar />

        <Slide padded center background={'#A4B494'}>
          <Row>
            <Col span={10}>
              <Title level={2} style={subtitleStyle}>Easily find what you're looking for</Title>
              <Title level={4} style={{marginLeft: '2rem'}}>Lorem ipsum dolor sit.</Title>
              <Title level={4} style={{marginLeft: '2rem', marginTop: 0}}>Lorem ipsum dolor sit.</Title>
              <Title level={4} style={{marginLeft: '2rem', marginTop: 0}}>Lorem ipsum dolor sit.</Title>
            </Col>
            <Col span={10} offset={4}>
              <Image src="/chef.png" alt="Chef" width={400} height={319} />
            </Col>
          </Row>
        </Slide>
        
        <Slide padded center>
          <Row>
            <Col span={10}>
              <Image src="/noodles.png" alt="Noodles" width={400} height={319} />
            </Col>
            <Col span={10} offset={4}>
              <Title level={2} style={subtitleStyle}>Easily find what you're looking for</Title>
              <Title level={4} style={{marginLeft: '2rem'}}>Lorem ipsum dolor sit.</Title>
              <Title level={4} style={{marginLeft: '2rem', marginTop: 0}}>Lorem ipsum dolor sit.</Title>
              <Title level={4} style={{marginLeft: '2rem', marginTop: 0}}>Lorem ipsum dolor sit.</Title>
            </Col>
          </Row>
        </Slide>

        <Row style={{backgroundColor: '#f0f2f5'}}>
          <Col span={12} style={{backgroundColor: '#A4B494', borderRadius: '15px'}}>
            <Row>
              <Col span={4} offset={1}>
                <h3>Benefits of xMENU</h3>
              </Col>
              <Col span={4} offset={2}>
                <h3>Lorem ipsum dolor sit amet.</h3>
              </Col>
              <Col span={4} offset={2}>
                <h3>Lorem ipsum dolor sit amet.</h3>
              </Col>
              <Col span={4} offset={2}>
                <h3>Lorem ipsum dolor sit amet.</h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Slide center>
          <Title level={2}>Browsing Restaurants ?</Title>
          <Title level={1} style={titleStyle}>xMENU</Title>
          <Title level={2} style={{width: '45%'}} align="center">
            xMENU is a web application that allows you to create and manage your own menu. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Title>
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
              <Title level={5} style={{color: '#A4B494'}}>xMENU</Title>
            </Col>
            <Col span={2} offset={20}>
              <FacebookOutlined />
            </Col>
          </Row>
        </Slide>
      </main>
      
    </div>
  )
}
