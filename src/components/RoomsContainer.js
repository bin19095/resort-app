import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList'
import Loading from './Loading';
import {withRoomConsumer} from "../context";

function RoomContainer({context}){
const{loading, sortedRooms, rooms }= context;
if(loading){
    return <Loading/>;
}
return(
    <>
        Hello Froms Rooms Container
        <RoomFilter rooms={rooms}/>
        <RoomList rooms={sortedRooms}/>
    </>
)
}
export default withRoomConsumer(RoomContainer);

/*
import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList'
import {RoomConsumer} from '../context'
import Loading from './Loading';
export default function RoomsContainer(){
    return(
        <RoomConsumer>
            {value => {
                // console.log("console from RoomContainer",value);
                const {loading, sortedRooms, rooms} = value
                if (loading) {
                    return <Loading/>;
                }
                    return (
                        <div>
                            Hello From Rooms Container
                            <RoomFilter rooms={rooms}/>
                            <RoomList rooms={sortedRooms}/>
                        </div>
                    );
                }
            }


        </RoomConsumer>


    );
}*/
