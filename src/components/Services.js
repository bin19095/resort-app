import React, {Component} from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from "./Title";

class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free Cocktails",
                info:"Lorem Ipsum dolor sit amet consectetur adipsicing elit m Magni ,corporis!"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Lorem Ipsum dolor sit amet consectetur adipsicing elit m Magni ,corporis!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info:"Lorem Ipsum dolor sit amet consectetur adipsicing elit m Magni ,corporis!"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Lorem Ipsum dolor sit amet consectetur adipsicing elit m Magni ,corporis!"
            }

        ]
    }
    render() {
        return (
            <section className="services">

                    <Title title='services' />
                <div className="services-center">
                {this.state.services.map((item,index) =>{
                    return <article key={index}
                                    className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>
                            {item.info}
                        </p>
                    </article>

                })
                }
                </div>
            </section>
        );
    }
}

export default Services;