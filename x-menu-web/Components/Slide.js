import { Layout } from "antd"

export default function Slide({children, isFooter, style, center, banner}) {

    const styleObject = {
        ...(center && { display: 'grid', placeItems: 'center' }),
        ...(banner && { 
                backgroundImage: `
                    linear-gradient(90deg, rgba(243,230,239,1) 50%, rgba(59,82,73,0) 100%), 
                    url("food.svg")
                `,
                backgroundSize: 'cover', backgroundPosition: 'top', 
            }),
        ...style,
    }

    return (
        <Layout>
            {!isFooter ? (
                <Layout.Content style={styleObject}>
                    {children}
                </Layout.Content>
            ) : (
                <Layout.Footer style={styleObject}>
                    {children}
                </Layout.Footer>
            )}
        </Layout>
    )
}