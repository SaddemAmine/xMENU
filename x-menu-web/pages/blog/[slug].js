import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import BlogLayout from '../../Components/BlogLayout'

import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { Typography, Row, Col } from 'antd'
import Image from 'next/image'
const Title = Typography.Title

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY
})

export async function getStaticPaths(){
    const data = await client.getEntries({content_type: 'blogPost'});
    const paths = data.items.map(post => ({
        params: {
            slug: post.fields.slug
        }
    }))
    return {
        paths,
        fallback: false
    }    
}

export async function getStaticProps({ params }) {
    const {items} = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug
    });
    return {
        props: {
            post: items[0]
        }
    }
}

export default function blog({post}) {
    const {title, tagline, banner, content} = post.fields;

    console.log(content)

    const options = {
        renderNode: {
            [BLOCKS.HEADING_4]: (node, children) => <Title level={4} style={{fontSize: '1.5rem'}}>{children}</Title>,
            [BLOCKS.HEADING_5]: (node, children) => <Title level={5} style={{fontSize: '1.5rem'}}>{children}</Title>,
            [BLOCKS.PARAGRAPH]: (node, children) => <Typography.Paragraph style={{fontSize: '1.25rem'}}>{children}</Typography.Paragraph>,
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { url, title, details } = node.data.target.fields.file;
                return <Row style={{justifyContent: 'center'}}>
                    <Col span={6}>
                        <Image 
                            src={'http:' + url} 
                            alt={title} 
                            width={details.image.width} 
                            height={details.image.height} 
                        />  
                    </Col>
                </Row>
              }
        },
    }

    return (
        <BlogLayout post>
            <Title style={{textAlign: 'center'}}>{title}</Title>
            <Image 
                src={'https:' + banner.fields.file.url} 
                alt="test"
                width={banner.fields.file.details.image.width} 
                height={banner.fields.file.details.image.height}
            />
            <Title style={{textAlign: 'center', marginTop: 0}} level={2}>{tagline}</Title>

            {documentToReactComponents(content, options)}
        </BlogLayout>
    )
}