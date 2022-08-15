import { Menu, Affix } from 'antd'
import { Link } from 'next/link'

export default function Navbar(){
    return (
        <Affix>
            <Menu mode="horizontal">
                <Menu.Item key="one">
                    Navigation One
                </Menu.Item>
                <Menu.Item key="two">
                    Navigation One
                </Menu.Item>
                <Menu.Item key="three">
                    Navigation One
                </Menu.Item>
            </Menu>
        </Affix>
    )
}