import React from 'react';
import mechanic1 from '../../../images/mechanic/mecanic1_400x250.jpg'
import mechanic2 from '../../../images/mechanic/mecanic2_400x250.jpg'
import mechanic3 from '../../../images/mechanic/mecanich3_400x250.jpg'
import mechanic4 from '../../../images/mechanic/mecanic4_400x250.jpg'
import Expetrt from '../Expert/Expetrt';

const experts= [
    {
        img:mechanic1,
        name:'Ansrew Smth',
        expertize:'-Engine Expert-'
    },
    {
        img:mechanic2,
        name:'John Anderson',
        expertize:'-Polish Expert-'
    },
    {
        img:mechanic3,
        name:'Jakaria Smith',
        expertize:'-Coloring Expert-'
    },
    {
        img:mechanic4,
        name:'Sakib Anderson',
        expertize:'-Elrounder Expert-'
    },
]
const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert =><Expetrt
                    
                        key ={expert.name}
                        expert ={expert}
                    >   
                    </Expetrt>)
                }    
            </div>

        </div>
    );
};

export default Experts;