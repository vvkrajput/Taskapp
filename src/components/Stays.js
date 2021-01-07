import React, { Component } from 'react'
import '../App.css';
import * as BsIcons from "react-icons/bs";
import {Navbar,Nav,NavLink} from "react-bootstrap"
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from "react-icons/bi"
import Globe from '../images/Globe.png'
import PersonIcon from '../images/PersonIcon.jpg'
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import room3 from '../images/room3.jpg'
import room4 from '../images/room4.jpg'
export default class Stays extends Component {
    render() {
        return (
            <div>
                
                    <div className="row topbar">
                        <div className="col-sm-3"><BsIcons.BsArrowLeft style={{color:"blue",fontSize:"5vw"}}/></div>
                        <div className="col-sm-5">
                            <div className="mt-3" style={{width:"100%",height:"7vh" ,borderWidth:0.1,borderStyle:"solid",borderColor:"gray",borderRadius:25}}>
                             <div className=" text-center pt-1">
                             <a className="an ml-3 mr-3"> London</a>
                             <a className="an ml-3 mr-3"> Add notes </a>
                             <a className="an ml-3 mr-3"> Add Guests </a>
                             <a className="ml-3"><BiIcons.BiSearch style={{fontSize:30,color:"blue"}}/></a>
                             </div>
                             
                            </div>
                        </div >
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2">
                           <div className="pt-3">Switch to hosting<img className="img-fluid ml-2 pt-1"  src={Globe} alt="Globe" height="15px" width="30px"/></div> </div>
                        <div clas="col-sm-1">  
                           <div className="bg-white mt-3" style={{height:"40px",width:"100px",borderRadius:20,borderWidth:0.1,borderStyle:"solid",borderColor:"gray"}}>
                               <div><AiIcons.AiOutlineMenu className="ml-3 pt-1" style={{fontSize:25}}/><img className="img-fluid pt-1"  src={PersonIcon} alt="PersonIcon" height="15px" width="30px"/></div>
                            </div>
                        </div>
                   
                    </div>

                    <div className="row mt-4">
                        <p className="ml-5 ">150 Stays</p>
                    </div>

                    <div className="row">
                        <h3 className="ml-5">Stays in London</h3>
                    </div>

                    <div className="row sec ml-4 mt-5"> 
                       <div className="col-sm-4">
                        <img className="img-fluid"  src={room1} alt="room1" />
                       </div>
                       <div className="col-sm-8">
                           <p className="pt-3">Enter apartment in London</p>
                           <h3>Room 1</h3>
                           <p className="pt-3">2 Guests . Studio . 2 Beds . 1 Bathroom</p>
                           <p className="text-right mt-5 pt-3">$500/night</p>
                       </div>
                    </div>

                    <div className="row sec ml-4 mt-5"> 
                       <div className="col-sm-4">
                        <img className="img-fluid"  src={room2} alt="room2" />
                       </div>
                       <div className="col-sm-8">
                           <p className="pt-3">Enter apartment in London</p>
                           <h3>Room 2</h3>
                           <p className="pt-3">2 Guests . Studio . 2 Beds . 1 Bathroom</p>
                           <p className="text-right mt-5 pt-3">$500/night</p>
                       </div>
                    </div>

                    <div className="row sec ml-4 mt-5"> 
                       <div className="col-sm-4">
                        <img className="img-fluid"  src={room3} alt="room3" />
                       </div>
                       <div className="col-sm-8">
                           <p className="pt-3">Enter apartment in London</p>
                           <h3>Room 3</h3>
                           <p className="pt-3">2 Guests . Studio . 2 Beds . 1 Bathroom</p>
                           <p className="text-right mt-5 pt-3">$500/night</p>
                       </div>
                    </div>

                    <div className="row sec ml-4 mt-5"> 
                       <div className="col-sm-4">
                        <img className="img-fluid"  src={room4} alt="room4" />
                       </div>
                       <div className="col-sm-8">
                           <p className="pt-3">Enter apartment in London</p>
                           <h3>Room 4</h3>
                           <p className="pt-3">2 Guests . Studio . 2 Beds . 1 Bathroom</p>
                           <p className="text-right mt-5 pt-3">$500/night</p>
                       </div>
                    </div>
                
                <div style={{height:"10vh"}}></div>
            </div>
        )
    }
}
