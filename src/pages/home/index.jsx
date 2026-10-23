import React from 'react'
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Homecard from "./com/card.jsx";
import TopNav from "../../components/top-nav/TopNav";



function Home() {
    return (
        <div>
            home
           <TopNav />
            <Homecard />

            <Button />
        </div>
    )
}

export default Home