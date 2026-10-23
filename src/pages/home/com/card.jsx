import React from 'react'

import Card  from "../../../components/ui/card.jsx";
import  button  from "../../../components/ui/button.jsx";

import { Button as ShadCNbutton } from '../../../components/ui/Button.jsx';

function Homecard() {
    return (
        <div>
            <Card content={"Card 1"} />
            <Card content={"Card 2"} />
            <Button />
            <ShadCNbutton>OK</ShadCNbutton>
            <ShadCNbutton variant="outline">Cancel</ShadCNbutton>
        </div>
    )
}

export default Homecard