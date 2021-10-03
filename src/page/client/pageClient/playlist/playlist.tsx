import React, { useEffect } from 'react'
import './playlist.scss'
import {Link} from "react-router-dom"
// import Slider from "react-slick";

// import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';
// import Tamtrang from './tamtrang';

interface playlist<T> {

}
const Playlist: React.FC<playlist<any>> = ({ ...props }) => {
   
    return (
        <>
            <div className="container-playlist">
                <div className="playlist-content">
                    <div className="col-content">
                        <div className="img">
                            <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                        </div>
                        <div className="name">
                            <p>Name playlist</p>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1.9375C3.239 1.9375 1 4.42271 1 7.48884C1 9.96396 1.875 15.8383 10.488 21.7765C10.6423 21.8818 10.8194 21.9375 11 21.9375C11.1806 21.9375 11.3577 21.8818 11.512 21.7765C20.125 15.8383 21 9.96396 21 7.48884C21 4.42271 18.761 1.9375 16 1.9375C13.239 1.9375 11 5.30195 11 5.30195C11 5.30195 8.761 1.9375 6 1.9375Z" stroke="rgb(76, 195, 241)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </div>
                        <div className="btn">
                            <button className="btn__play">Phát ngẫu nhiên</button>
                        </div>
                    </div>
                    <div className="col-desc">
                        <p className="desc-h">Mô tả</p>
                        <div className="list-song">
                            <div className="item-song">
                                <div className="song-desc">
                                    <div className="img">
                                        <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                                    </div>
                                    <div className="desc">
                                        <span className="name-song">
                                            Ten bai hat
                                        </span>
                                        <span className="name-artist">
                                            Ten nghe si
                                        </span>
                                    </div>
                                </div>
                                <div className="song-time"><p>4:56</p></div>
                               <div className="list-box">
                                   <ul>
                                        <li>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.99985 8.2L8.39985 5.8M5.99985 8.2V1V8.2ZM5.99985 8.2L3.59985 5.8L5.99985 8.2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M0 9.39996L0.3726 10.891C0.437492 11.1506 0.587294 11.381 0.798198 11.5457C1.0091 11.7104 1.26901 11.7999 1.5366 11.8H10.4634C10.731 11.7999 10.9909 11.7104 11.2018 11.5457C11.4127 11.381 11.5625 11.1506 11.6274 10.891L12 9.39996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6855 2.38663C12.4838 1.91959 12.1929 1.49637 11.8292 1.14065C11.4653 0.783871 11.0362 0.500343 10.5652 0.305485C10.0769 0.102628 9.5531 -0.00120653 9.0243 1.05771e-05C8.28243 1.05771e-05 7.55862 0.203159 6.92961 0.586883C6.77913 0.678676 6.63618 0.779498 6.50074 0.889349C6.36531 0.779498 6.22236 0.678676 6.07188 0.586883C5.44287 0.203159 4.71906 1.05771e-05 3.97719 1.05771e-05C3.44299 1.05771e-05 2.92533 0.102337 2.43627 0.305485C1.96377 0.50111 1.53791 0.782508 1.17224 1.14065C0.808074 1.49597 0.517167 1.91929 0.316008 2.38663C0.106841 2.87268 0 3.38882 0 3.92002C0 4.42112 0.102327 4.94328 0.305475 5.47448C0.475517 5.9184 0.719295 6.37887 1.03079 6.84385C1.52436 7.5797 2.20303 8.34715 3.04572 9.12513C4.44218 10.4147 5.82509 11.3056 5.88378 11.3417L6.24041 11.5704C6.39842 11.6713 6.60157 11.6713 6.75957 11.5704L7.11621 11.3417C7.1749 11.3041 8.5563 10.4147 9.95426 9.12513C10.797 8.34715 11.4756 7.5797 11.9692 6.84385C12.2807 6.37887 12.526 5.9184 12.6945 5.47448C12.8977 4.94328 13 4.42112 13 3.92002C13.0015 3.38882 12.8946 2.87268 12.6855 2.38663V2.38663Z" fill="white"/>
                                            </svg>
                                        </li>
                                        <li>                                          
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.5 0C6.71549 0 6.92215 0.0856024 7.07452 0.237976C7.2269 0.390349 7.3125 0.597012 7.3125 0.8125V5.6875H12.1875C12.403 5.6875 12.6097 5.7731 12.762 5.92548C12.9144 6.07785 13 6.28451 13 6.5C13 6.71549 12.9144 6.92215 12.762 7.07452C12.6097 7.2269 12.403 7.3125 12.1875 7.3125H7.3125V12.1875C7.3125 12.403 7.2269 12.6097 7.07452 12.762C6.92215 12.9144 6.71549 13 6.5 13C6.28451 13 6.07785 12.9144 5.92548 12.762C5.7731 12.6097 5.6875 12.403 5.6875 12.1875V7.3125H0.8125C0.597012 7.3125 0.390349 7.2269 0.237976 7.07452C0.0856024 6.92215 0 6.71549 0 6.5C0 6.28451 0.0856024 6.07785 0.237976 5.92548C0.390349 5.7731 0.597012 5.6875 0.8125 5.6875H5.6875V0.8125C5.6875 0.597012 5.7731 0.390349 5.92548 0.237976C6.07785 0.0856024 6.28451 0 6.5 0V0Z" fill="white"/>
                                            </svg>
                                        </li>
                                    </ul>
                               </div>
                            </div>
                            <div className="item-song">
                                <div className="song-desc">
                                    <div className="img">
                                        <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                                    </div>
                                    <div className="desc">
                                        <span className="name-song">
                                            Ten bai hat
                                        </span>
                                        <span className="name-artist">
                                            Ten nghe si
                                        </span>
                                    </div>
                                </div>
                                <div className="song-time"><p>4:56</p></div>
                               <div className="list-box">
                                   <ul>
                                        <li>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.99985 8.2L8.39985 5.8M5.99985 8.2V1V8.2ZM5.99985 8.2L3.59985 5.8L5.99985 8.2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M0 9.39996L0.3726 10.891C0.437492 11.1506 0.587294 11.381 0.798198 11.5457C1.0091 11.7104 1.26901 11.7999 1.5366 11.8H10.4634C10.731 11.7999 10.9909 11.7104 11.2018 11.5457C11.4127 11.381 11.5625 11.1506 11.6274 10.891L12 9.39996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6855 2.38663C12.4838 1.91959 12.1929 1.49637 11.8292 1.14065C11.4653 0.783871 11.0362 0.500343 10.5652 0.305485C10.0769 0.102628 9.5531 -0.00120653 9.0243 1.05771e-05C8.28243 1.05771e-05 7.55862 0.203159 6.92961 0.586883C6.77913 0.678676 6.63618 0.779498 6.50074 0.889349C6.36531 0.779498 6.22236 0.678676 6.07188 0.586883C5.44287 0.203159 4.71906 1.05771e-05 3.97719 1.05771e-05C3.44299 1.05771e-05 2.92533 0.102337 2.43627 0.305485C1.96377 0.50111 1.53791 0.782508 1.17224 1.14065C0.808074 1.49597 0.517167 1.91929 0.316008 2.38663C0.106841 2.87268 0 3.38882 0 3.92002C0 4.42112 0.102327 4.94328 0.305475 5.47448C0.475517 5.9184 0.719295 6.37887 1.03079 6.84385C1.52436 7.5797 2.20303 8.34715 3.04572 9.12513C4.44218 10.4147 5.82509 11.3056 5.88378 11.3417L6.24041 11.5704C6.39842 11.6713 6.60157 11.6713 6.75957 11.5704L7.11621 11.3417C7.1749 11.3041 8.5563 10.4147 9.95426 9.12513C10.797 8.34715 11.4756 7.5797 11.9692 6.84385C12.2807 6.37887 12.526 5.9184 12.6945 5.47448C12.8977 4.94328 13 4.42112 13 3.92002C13.0015 3.38882 12.8946 2.87268 12.6855 2.38663V2.38663Z" fill="white"/>
                                            </svg>
                                        </li>
                                        <li>                                          
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.5 0C6.71549 0 6.92215 0.0856024 7.07452 0.237976C7.2269 0.390349 7.3125 0.597012 7.3125 0.8125V5.6875H12.1875C12.403 5.6875 12.6097 5.7731 12.762 5.92548C12.9144 6.07785 13 6.28451 13 6.5C13 6.71549 12.9144 6.92215 12.762 7.07452C12.6097 7.2269 12.403 7.3125 12.1875 7.3125H7.3125V12.1875C7.3125 12.403 7.2269 12.6097 7.07452 12.762C6.92215 12.9144 6.71549 13 6.5 13C6.28451 13 6.07785 12.9144 5.92548 12.762C5.7731 12.6097 5.6875 12.403 5.6875 12.1875V7.3125H0.8125C0.597012 7.3125 0.390349 7.2269 0.237976 7.07452C0.0856024 6.92215 0 6.71549 0 6.5C0 6.28451 0.0856024 6.07785 0.237976 5.92548C0.390349 5.7731 0.597012 5.6875 0.8125 5.6875H5.6875V0.8125C5.6875 0.597012 5.7731 0.390349 5.92548 0.237976C6.07785 0.0856024 6.28451 0 6.5 0V0Z" fill="white"/>
                                            </svg>
                                        </li>
                                    </ul>
                               </div>
                            </div>
                            <div className="item-song">
                                <div className="song-desc">
                                    <div className="img">
                                        <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                                    </div>
                                    <div className="desc">
                                        <span className="name-song">
                                            Ten bai hat
                                        </span>
                                        <span className="name-artist">
                                            Ten nghe si
                                        </span>
                                    </div>
                                </div>
                                <div className="song-time"><p>4:56</p></div>
                               <div className="list-box">
                                   <ul>
                                        <li>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.99985 8.2L8.39985 5.8M5.99985 8.2V1V8.2ZM5.99985 8.2L3.59985 5.8L5.99985 8.2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M0 9.39996L0.3726 10.891C0.437492 11.1506 0.587294 11.381 0.798198 11.5457C1.0091 11.7104 1.26901 11.7999 1.5366 11.8H10.4634C10.731 11.7999 10.9909 11.7104 11.2018 11.5457C11.4127 11.381 11.5625 11.1506 11.6274 10.891L12 9.39996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6855 2.38663C12.4838 1.91959 12.1929 1.49637 11.8292 1.14065C11.4653 0.783871 11.0362 0.500343 10.5652 0.305485C10.0769 0.102628 9.5531 -0.00120653 9.0243 1.05771e-05C8.28243 1.05771e-05 7.55862 0.203159 6.92961 0.586883C6.77913 0.678676 6.63618 0.779498 6.50074 0.889349C6.36531 0.779498 6.22236 0.678676 6.07188 0.586883C5.44287 0.203159 4.71906 1.05771e-05 3.97719 1.05771e-05C3.44299 1.05771e-05 2.92533 0.102337 2.43627 0.305485C1.96377 0.50111 1.53791 0.782508 1.17224 1.14065C0.808074 1.49597 0.517167 1.91929 0.316008 2.38663C0.106841 2.87268 0 3.38882 0 3.92002C0 4.42112 0.102327 4.94328 0.305475 5.47448C0.475517 5.9184 0.719295 6.37887 1.03079 6.84385C1.52436 7.5797 2.20303 8.34715 3.04572 9.12513C4.44218 10.4147 5.82509 11.3056 5.88378 11.3417L6.24041 11.5704C6.39842 11.6713 6.60157 11.6713 6.75957 11.5704L7.11621 11.3417C7.1749 11.3041 8.5563 10.4147 9.95426 9.12513C10.797 8.34715 11.4756 7.5797 11.9692 6.84385C12.2807 6.37887 12.526 5.9184 12.6945 5.47448C12.8977 4.94328 13 4.42112 13 3.92002C13.0015 3.38882 12.8946 2.87268 12.6855 2.38663V2.38663Z" fill="white"/>
                                            </svg>
                                        </li>
                                        <li>                                          
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.5 0C6.71549 0 6.92215 0.0856024 7.07452 0.237976C7.2269 0.390349 7.3125 0.597012 7.3125 0.8125V5.6875H12.1875C12.403 5.6875 12.6097 5.7731 12.762 5.92548C12.9144 6.07785 13 6.28451 13 6.5C13 6.71549 12.9144 6.92215 12.762 7.07452C12.6097 7.2269 12.403 7.3125 12.1875 7.3125H7.3125V12.1875C7.3125 12.403 7.2269 12.6097 7.07452 12.762C6.92215 12.9144 6.71549 13 6.5 13C6.28451 13 6.07785 12.9144 5.92548 12.762C5.7731 12.6097 5.6875 12.403 5.6875 12.1875V7.3125H0.8125C0.597012 7.3125 0.390349 7.2269 0.237976 7.07452C0.0856024 6.92215 0 6.71549 0 6.5C0 6.28451 0.0856024 6.07785 0.237976 5.92548C0.390349 5.7731 0.597012 5.6875 0.8125 5.6875H5.6875V0.8125C5.6875 0.597012 5.7731 0.390349 5.92548 0.237976C6.07785 0.0856024 6.28451 0 6.5 0V0Z" fill="white"/>
                                            </svg>
                                        </li>
                                    </ul>
                               </div>
                            </div><div className="item-song">
                                <div className="song-desc">
                                    <div className="img">
                                        <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                                    </div>
                                    <div className="desc">
                                        <span className="name-song">
                                            Ten bai hat
                                        </span>
                                        <span className="name-artist">
                                            Ten nghe si
                                        </span>
                                    </div>
                                </div>
                                <div className="song-time"><p>4:56</p></div>
                               <div className="list-box">
                                    <ul>
                                        <li>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.99985 8.2L8.39985 5.8M5.99985 8.2V1V8.2ZM5.99985 8.2L3.59985 5.8L5.99985 8.2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M0 9.39996L0.3726 10.891C0.437492 11.1506 0.587294 11.381 0.798198 11.5457C1.0091 11.7104 1.26901 11.7999 1.5366 11.8H10.4634C10.731 11.7999 10.9909 11.7104 11.2018 11.5457C11.4127 11.381 11.5625 11.1506 11.6274 10.891L12 9.39996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6855 2.38663C12.4838 1.91959 12.1929 1.49637 11.8292 1.14065C11.4653 0.783871 11.0362 0.500343 10.5652 0.305485C10.0769 0.102628 9.5531 -0.00120653 9.0243 1.05771e-05C8.28243 1.05771e-05 7.55862 0.203159 6.92961 0.586883C6.77913 0.678676 6.63618 0.779498 6.50074 0.889349C6.36531 0.779498 6.22236 0.678676 6.07188 0.586883C5.44287 0.203159 4.71906 1.05771e-05 3.97719 1.05771e-05C3.44299 1.05771e-05 2.92533 0.102337 2.43627 0.305485C1.96377 0.50111 1.53791 0.782508 1.17224 1.14065C0.808074 1.49597 0.517167 1.91929 0.316008 2.38663C0.106841 2.87268 0 3.38882 0 3.92002C0 4.42112 0.102327 4.94328 0.305475 5.47448C0.475517 5.9184 0.719295 6.37887 1.03079 6.84385C1.52436 7.5797 2.20303 8.34715 3.04572 9.12513C4.44218 10.4147 5.82509 11.3056 5.88378 11.3417L6.24041 11.5704C6.39842 11.6713 6.60157 11.6713 6.75957 11.5704L7.11621 11.3417C7.1749 11.3041 8.5563 10.4147 9.95426 9.12513C10.797 8.34715 11.4756 7.5797 11.9692 6.84385C12.2807 6.37887 12.526 5.9184 12.6945 5.47448C12.8977 4.94328 13 4.42112 13 3.92002C13.0015 3.38882 12.8946 2.87268 12.6855 2.38663V2.38663Z" fill="white"/>
                                            </svg>
                                        </li>
                                        <li>                                          
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.5 0C6.71549 0 6.92215 0.0856024 7.07452 0.237976C7.2269 0.390349 7.3125 0.597012 7.3125 0.8125V5.6875H12.1875C12.403 5.6875 12.6097 5.7731 12.762 5.92548C12.9144 6.07785 13 6.28451 13 6.5C13 6.71549 12.9144 6.92215 12.762 7.07452C12.6097 7.2269 12.403 7.3125 12.1875 7.3125H7.3125V12.1875C7.3125 12.403 7.2269 12.6097 7.07452 12.762C6.92215 12.9144 6.71549 13 6.5 13C6.28451 13 6.07785 12.9144 5.92548 12.762C5.7731 12.6097 5.6875 12.403 5.6875 12.1875V7.3125H0.8125C0.597012 7.3125 0.390349 7.2269 0.237976 7.07452C0.0856024 6.92215 0 6.71549 0 6.5C0 6.28451 0.0856024 6.07785 0.237976 5.92548C0.390349 5.7731 0.597012 5.6875 0.8125 5.6875H5.6875V0.8125C5.6875 0.597012 5.7731 0.390349 5.92548 0.237976C6.07785 0.0856024 6.28451 0 6.5 0V0Z" fill="white"/>
                                            </svg>
                                        </li>
                                    </ul>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quantam">
                    <div className="quantam-h4">
                        <h4>Có thể quan tâm</h4>
                    </div>
                    <div className="grid-box-playlist">
                        <div className="box-playlisst">
                            <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                            <p>
                            Tạo ra hàng loạt font chữ unicode độc đáo để sao chép và dán lên Facebook, Twitter, vân vân.
                            </p>
                        </div>
                        <div className="box-playlisst">
                            <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                            <p>
                            Tạo ra hàng loạt font chữ unicode độc đáo để sao chép và dán lên Facebook, Twitter, vân vân.
                            </p>
                        </div>
                        <div className="box-playlisst">
                            <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                            <p>
                            Tạo ra hàng loạt font chữ unicode độc đáo để sao chép và dán lên Facebook, Twitter, vân vân.
                            </p>
                        </div>
                        <div className="box-playlisst">
                            <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                            <p>
                            Tạo ra hàng loạt font chữ unicode độc đáo để sao chép và dán lên Facebook, Twitter, vân vân.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
    
    export default Playlist