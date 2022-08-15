import { Layout } from "antd"

export default function Slide({children, isFooter, style}) {
    return (
        <Layout>
            {!isFooter ? (
                <Layout.Content style={style ? style : null}>
                    {children}
                </Layout.Content>
            ) : (
                <Layout.Footer>
                    {children}
                </Layout.Footer>
            )}
        </Layout>
    )
}