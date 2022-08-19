import { Layout } from "antd"

export default function Slide({children, isFooter, style, center, banner, padded, background}) {

    const styleObject = {
        height: '94vh',
        padding: padded ? '12em 12em 0em 12em' : '12em 6em 0em 6em',
        
        ...(center && { display: 'grid', placeItems: 'center', paddingTop: 0}),
        ...(banner && { 
                backgroundImage: `
                    linear-gradient(90deg, rgba(243,230,239,1) 50%, rgba(59,82,73,0) 100%), 
                    url("food.svg")
                `,
                backgroundSize: 'cover', backgroundPosition: 'top', 
            }),
        ...(background && {backgroundColor: background}),
        ...style
    }

    const footerStyle = {
        backgroundColor: '#382933',
        color: '#A4B494'
    }

    return (
        <Layout>
            {!isFooter ? (
                <Layout.Content style={styleObject}>
                    {children}
                </Layout.Content>
            ) : (
                <Layout.Footer style={footerStyle}>
                    {children}
                </Layout.Footer>
            )}
        </Layout>
    )
}