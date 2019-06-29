import React from 'react'
import Container from '../../components/Container.jsx'
import Image from '../../components/Image.jsx'
import SideNav from '../../components/SideNav.jsx'

const AdminHome = () => {
    return (
        <Container direction="column">
            <Image url="/src/images/admin-home-banner.jpg"
                           width="650"
                           height="250"/>
            <Container direction="row">
                <SideNav />
            </Container>
        </Container>
    )

}

export default AdminHome;