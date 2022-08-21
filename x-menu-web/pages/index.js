import Head from 'next/head'
import Image from 'next/image'

import Slide from '../Components/Slide'
import Navbar from '../Components/Navbar'

import { Row, Col, Button, Typography } from 'antd'
import { FacebookOutlined } from '@ant-design/icons';

import { createClient } from 'contentful'

const Title = Typography.Title

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY
  })

  const data = await client.getEntry('rfzWeN9loZt52peLHtDws');

  return {
    props: {pageData: data}
  };
}

export default function Home({pageData}) {
  const fields = pageData.fields

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
          <Title level={4} style={secondaryColor}>{fields.heroSubheading}</Title>
          <Title level={1} style={titleStyle}>{fields.heroHeadline}</Title>
          <Title level={4} style={{...secondaryColor, width: '45%'}}>{fields.heroParagraph}</Title>
        </Slide>

        <Navbar />

        <Slide padded center background={'#A4B494'}>
          <Row>
            <Col span={10}>
              <Title level={2} style={subtitleStyle}>{fields.slideOneTitle}</Title>
              <Title level={4} style={{marginLeft: '2rem'}}>{fields.slideOneList[0]}</Title>
              <Title level={4} style={{marginLeft: '2rem', marginTop: 0}}>{fields.slideOneList[1]}</Title>
              <Title level={4} style={{marginLeft: '2rem', marginTop: 0}}>{fields.slideOneList[2]}</Title>
            </Col>
            <Col span={10} offset={4}>
              <Image 
                src={`https:${fields.slideOneMedia.fields.file.url}`} 
                alt={fields.slideOneMedia.fields.file.filename} 
                width={400} height={319} 
              />
            </Col>
          </Row>
        </Slide>
        
        <Slide padded center>
          <Row>
            <Col span={10}>
              <Image 
                src={`https:${fields.slideTwoMedia.fields.file.url}`} 
                alt={fields.slideTwoMedia.fields.file.filename} 
                width={400} height={319} 
              />
            </Col>
            <Col span={10} offset={4}>
              <Title level={2} style={subtitleStyle}>{fields.slideTwoTitle}</Title>
              <Title level={4} style={{marginLeft: '2rem'}}>{fields.slideTwoList[0]}</Title>
              <Title level={4} style={{marginLeft: '2rem', marginTop: 0}}>{fields.slideTwoList[1]}</Title>
              <Title level={4} style={{marginLeft: '2rem', marginTop: 0}}>{fields.slideTwoList[2]}</Title>
            </Col>
          </Row>
        </Slide>

        <Row style={{backgroundColor: '#f0f2f5', justifyContent: 'center'}}>
          <Col span={12} style={{backgroundColor: '#A4B494', borderRadius: '15px'}}>
            <Row>
              <Col span={4} offset={1}>
                <h3>{fields.listTitle}</h3>
              </Col>
              <Col span={4} offset={2}>
                <h3>{fields.listElements[0]}</h3>
              </Col>
              <Col span={4} offset={2}>
                <h3>{fields.listElements[1]}</h3>
              </Col>
              <Col span={4} offset={2}>
                <h3>{fields.listElements[2]}</h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Slide center>
          <Title level={2}>{fields.callToActionSubheading}</Title>
          <Title level={1} style={titleStyle}>{fields.callToActionTitle}</Title>
          <Title level={2} style={{width: '45%'}} align="center">
            {fields.callToActionParagraph}
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
