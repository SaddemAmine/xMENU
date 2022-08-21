import BlogLayout from '../Components/BlogLayout'
import { Card } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

import { createClient } from 'contentful'

export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_API_KEY
    })
  
    const data = await client.getEntries({content_type: 'blogPost'});
  
    return {
      props: {posts: data}
    };
}

export default function blog({posts}) {

    return (
        <BlogLayout>
            {posts.items.map(post => 
                <Link key={post.sys.id} href={"/blog/" + post.fields.slug}>
                    <Card
                        hoverable
                        cover={<Image 
                            src={`https:${post.fields.thumbnail.fields.file.url}`} 
                            alt={post.fields.thumbnail.fields.file.filename}
                            width={300} height={300} 
                            />}
                            >
                        <Card.Meta title={post.fields.title} description={post.fields.tagline} />
                    </Card>
                </Link>
            )}
        </BlogLayout>       
    )
}