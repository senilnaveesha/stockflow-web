import React from 'react'
import Card from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";

function Home() {
    return (
        <div>
            home
            <Card content={"Card 1"}/>
            <Card content={"Card 2"}/>

            <Button />
        </div>
    )
}

export default Home