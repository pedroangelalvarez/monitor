import React from 'react';
import { Link } from 'react-router-dom';
import 'typeface-roboto';
import SwiftSlider from 'react-swift-slider'

import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const data =  [
    {'id':'1','src':'https://firebasestorage.googleapis.com/v0/b/lescanoweb.appspot.com/o/4106732.jpg?alt=media&token=3ed82277-472c-4636-a40b-e85e688ed58c'},
    {'id':'2','src':'https://firebasestorage.googleapis.com/v0/b/lescanoweb.appspot.com/o/25514.jpg?alt=media&token=82456c80-415a-4402-ab82-d764d413c45c'},
    {'id':'3','src':'https://firebasestorage.googleapis.com/v0/b/lescanoweb.appspot.com/o/25512.jpg?alt=media&token=44124458-ae31-4951-96aa-28843b032eb8'}
  ];

export class Preview extends React.Component {

    constructor(props) {
      super(props);
    }
  
    componentDidMount(){
    }

  
  
    render() {
      return (
		<div>
            <SwiftSlider data={data} activeDotColor={"#9F2914"}/>
        </div>
    )}
  }
  
export default Preview;


/*
:root{
    --black: #252525;
    --white: #f5f5f5;
    --orange: #ff5c63;

    --yellow-1: #ff7b62;
    --yellow-2: #ff9961;
    --yellow-3: #ffa55b;
    --yellow-4: #ffa754;
    --yellow-5: #ff9e4d;

    --brown-1: #dd666b;
    --brown-2: #a24850;
    --brown-3: #83373b;
    --brown-4: #733136;
}


    .mountain{
        position: absolute;
        bottom: -10%;
			  align: center;
        height: 245px;
        width: 245px;
        transform: rotateZ(45deg);
        border-radius: 8px;
        z-index: 200;

        background-image:
            linear-gradient(
                to right,
                var(--brown-4) 0px,
                var(--brown-4) 25px,
                var(--brown-3) 25px,
                var(--brown-3) 50px,
                var(--brown-2) 50px,
                var(--brown-2) 75px,
                var(--brown-1) 75px,
                var(--brown-1) 100px
            );
        transition: .5s linear;

    }

        
    .generic,
    .suns{
        width: 100%;
        height: 100%;
        background: var(--yellow-5);
        transition: .5s linear;

    }
        .sun{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 120px;
            height: 120px;
            margin-top: 15px;
            transform: translateX(-50%) translateY(-50%);
            border-radius: 50%;
            background: var(--yellow-1);
            z-index: 100;
            box-shadow:
                inset 2px 2px 6px 0px rgba(0,0,0,0.2),
                inset -2px -2px 6px 0px rgba(0,0,0,0.2);

            animation: sun 2s infinite alternate;
        }
        @keyframes sun {
            0%,80%{ transform: translateX(-50%) translateY(-50%) scale(1);}
            100%{ transform: translateX(-50%) translateY(-50%) scale(1.03);}
        }
        .sun:nth-of-type(2){
            width: 160px;
            height: 160px;
            background: var(--yellow-2);
            z-index: 90;
            animation: sun 2s infinite alternate .15s;
        }
        .sun:nth-of-type(3){
            width: 200px;
            height: 200px;
            background: var(--yellow-3);
            z-index: 80;
            animation: sun 2s infinite alternate .30s;
        }
        .sun:nth-of-type(4){
            width: 240px;
            height: 240px;
            background: var(--yellow-4);
            z-index: 70;
            animation: sun 2s infinite alternate .45s;
        }
@media (max-width: 768px){ .card{ transform: scale(.7);} }	


<div>

        <div class="mountain" id="mountain">
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
        </div>
        <div class="generic">
            <div class="suns" id="suns">
                <div class="sun"></div>
                <div class="sun"></div>
                <div class="sun"></div>
                <div class="sun"></div>
            </div>
        </div>

  

</div>

*/
