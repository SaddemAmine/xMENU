import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Row, Col, Card, Typography } from 'antd'
import { FacebookOutlined } from '@ant-design/icons';

import Slide from '../Components/Slide'

const Title = Typography.Title

export default function layout({children, post}){
    const titleStyle = {
        fontSize: '8em',
        color: '#382933',
        margin: 0,
        marginBottom: 0,
        lineHeight: 'normal',
        textAlign: 'center'
    }

    const containerStyle = {
        backgroundColor: '#A4B494'
    }

    return (
        <div style={containerStyle}>
            <Head>
                <title>xMENU Blog</title>
                <meta name="description" content="Find your menu here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Row>
                <Col span={2}>
                    <Link href="/">
                        <a>Go back</a>
                    </Link>
                </Col>
                <Col span={20}>
                    <Title level={1} style={{fontSize: '8em', color: '#382933', margin: 0, marginBottom: 0, lineHeight: 'normal', textAlign: 'center'}}>xMENU <span style={{color: 'black'}}>blog</span></Title>
                </Col>
            </Row>
          
            {!post ? (<Row style={{justifyContent: 'space-evenly', margin: '12em 3em'}}>
                {children}
            </Row>) : (<div style={{padding: '0px 5rem'}}>
                {children}
            </div>
            )}

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
        </div>
    )
}