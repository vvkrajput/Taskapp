import React, { Component } from 'react'
import Globe from '../images/Globe.png'
import London from '../images/London.jpg'
import Paris from '../images/Paris.jpg'
import Italy from '../images/Italy.jpg'
import Maldives from '../images/Maldives.jpg'
import Home1 from '../images/Home1.jpg'
import PersonIcon from '../images/PersonIcon.jpg'
import * as AiIcons from 'react-icons/ai';
import {Navbar,Nav,NavLink} from "react-bootstrap"
import '../App.css'
import * as BiIcons from "react-icons/bi"
import One from '../images/One.jpg'
import Two from '../images/Two.jpg'
import Three from '../images/Three.jpg'
import Four from '../images/Four.jpg'
import Five from '../images/Five.jpg'
import Six from '../images/Six.jpg'
import Seven from '../images/Seven.jpg'
export default class Home extends Component {
    render() {
        return (
            <div>
               <div className="row" style={{backgroundColor:"black",height:"10vh"}}>
                  <div className="col-sm-3"></div>
                  <div className="col-sm-7"> <h2 className="pt-2 ml-5" style={{color:"white"}}> Get the latest on our COVID-19 response!!</h2></div>
                  <div className="col-sm-2"></div>
               </div>

               <div className="row" style={{backgroundImage:'url('+Home1+')',height:"90vh"}}>
                  <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-12 float-right">
                        <Navbar className="float-right"  expand="sm" style={{ transition:"1s ease-out"}}>
                         <Nav className="mr-auto">
                  
                            <NavLink>Switch to hosting<img className="img-fluid ml-2 pt-2"  src={Globe} alt="Globe" height="15px" width="30px"/></NavLink>
                            <NavLink>
                              <div className="bg-white ml-2" style={{height:"40px",width:"100px",borderRadius:20}}>
                               <div><AiIcons.AiOutlineMenu className="ml-3 pt-1" style={{fontSize:25}}/><img className="img-fluid pt-1"  src={PersonIcon} alt="PersonIcon" height="15px" width="30px"/></div>
                              </div>
                            </NavLink>
                         </Nav>
              
                        </Navbar>
                        </div>
                       </div>

                       <div className="row text-center text-white">
                        <div className="col-sm-12">
                          <h5>Places to stay</h5>
                        </div>
                       </div>

                       <div className="row mt-4">
                           <div className="col-sm-2"></div>
                           <div className="col-sm-8 bg-white pt-2" style={{height:"10vh",borderRadius:"25px"}}>
                             <a className="an ml-5 mr-5"> Location </a>
                             <a className="an ml-5 mr-5"> Check in </a>
                             <a className="an ml-5 mr-5"> Check Out </a>
                             <a className="an ml-5 mr-4"> Guests </a>
                             <a className><BiIcons.BiSearch style={{fontSize:50,color:"blue"}}/></a>
                           </div>
                           <div className="col-sm-2" ></div>

                       </div>

                       <div className="row mt-5">
                          <div className="col-sm-2"></div>
                          <div className="col-sm-10">
                              <p style={{fontSize:70}}><b>Go <br/> Near</b></p>
                          </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-2">
                                <div className="bg-white" style={{ borderRadius:15}}><p className="ml-2">Explore nearby stays</p></div>
                            </div>
                            <div className="col-sm-8"></div>
                        </div>
                  </div>
               </div>

              <div className="row">
                  <div className="row pt-3"><div className="col-sm-12"><h1 className="ml-5">Popular Destinations</h1></div></div>
                  <div className="row">
                  <div className="col-sm-3 pt-4"><img className="img-fluid ml-5"  src={London} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  <div className="col-sm-3 pt-4"><img className="img-fluid ml-5"  src={Italy} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  <div className="col-sm-3 pt-4"><img className="img-fluid ml-5"  src={Maldives} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  <div className="col-sm-3 pt-4"><img className="img-fluid ml-5"  src={Paris} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  </div>
              </div>
               
               <div className="row">
               <div className="col-sm-3 pl-5"><h3>London</h3></div>
                  <div className="col-sm-3 pl-5"><h3>Italy</h3></div>
                  <div className="col-sm-3 pl-5"><h3>Maldives</h3></div>
                  <div className="col-sm-3 pl-5"><h3>Paris</h3></div>
               </div>


               <div className="row">
                  <div className="row pt-3"><div className="col-sm-12"><h1 className="ml-5">Best Deals</h1></div></div>
                  <div className="row">
                  <div className="col-sm-1"></div>
                  <div className="col-sm-5 pl-5 pt-4">
                    <div className="card" style={{width:"80%",height:"70vh"}}>
                     <img className="card-img-top" src={Paris} alt="Card image cap"/>
                      <div className="card-body">
                       <h5 className="card-title">Paris Offer</h5>
                       <p className="card-text">Best Place to explore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5  pt-4">
                  <div className="card" style={{width: "80%",height:"70vh"}}>
                     <img className="card-img-top" src={London} alt="Card image cap"/>
                      <div className="card-body">
                       <h5 className="card-title">Londen Offer</h5>
                       <p className="card-text">Best Place to explore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1"></div>
                 
                  </div>
              </div>
      
            
              <div className="row">
                  <div className="row pt-3"><div className="col-sm-12"><h1 className="ml-5">Live anywhere</h1></div></div>
                  <div className="row">
                  <div className="col-sm-3 pt-4"><img className="img-fluid ml-5"  src={One} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  <div className="col-sm-3 pt-4"><img className="img-fluid ml-5"  src={Two} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  <div className="col-sm-3 pt-4"><img className="img-fluid ml-5"  src={Three} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  <div className="col-sm-3 pt-4"><img className="img-fluid ml-5"  src={Four} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  </div>
              </div>
               
               <div className="row">
               <div className="col-sm-3 pl-5"><h3>Hotels</h3></div>
                  <div className="col-sm-3 pl-5"><h3>Cottages</h3></div>
                  <div className="col-sm-3 pl-5"><h3>Pets welcome</h3></div>
                  <div className="col-sm-3 pl-5"><h3>Unique stays</h3></div>
               </div>



               <div className="row">
                  <div className="row pt-3"><div className="col-sm-12"><h1 className="ml-5">Join millions of hosts</h1></div></div>
                  <div className="row">
                  <div className="col-sm-4 pt-4"><img className="img-fluid ml-5"  src={Five} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  <div className="col-sm-4 pt-4"><img className="img-fluid ml-5"  src={Six} alt="London" style={{borderRadius:10,height:"40vh"}}/></div>
                  <div className="col-sm-4 pt-4"><img className="img-fluid ml-5"  src={Seven} alt="London" style={{borderRadius:10,height:"40vh",width:"350px"}}/></div>
                 
                  </div>
              </div>
               
               <div className="row">
               <div className="col-sm-4 pl-5"><h3>Host Your Home</h3></div>
                  <div className="col-sm-4 pl-5"><h3>Host an online experience</h3></div>
                  <div className="col-sm-4 pl-5"><h3>Host an experience</h3></div>
                </div>

                <div className="row" style={{height:"10vh"}}></div>

                <div className="row text-center">
                    <div className="col-sm-3">About</div>
                    <div className="col-sm-3">Community</div>
                    <div className="col-sm-3">Host</div>
                    <div className="col-sm-3">Support</div>
                </div>
                <div className="row" style={{height:"10vh"}}></div>

            </div>
        )
    }
}
