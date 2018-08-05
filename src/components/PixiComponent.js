import React, { Component } from 'react';
import * as PIXI from '../../node_modules/pixi.js';
import Data from './projects-data/projectData';

import background from '../media/4k-wallpaper-action-adventure-312105.jpg';

export default class PixiComponent extends React.Component {
    constructor(props) {
        super(props);
        this.pixi_cnt = null;
        this.app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            transparent:false
        });
        window.onresize = () => {
            this.resize(window.innerWidth, window.innerHeight);
        };

        // window.onwheel = function(e) {
        //     e.preventDefault();
        //     console.log('scrolling');
        //     // if (e.ctrlKey) {
        //     //     zoom += e.deltaY;
        //     // } else {
        //     this.offsetX += e.deltaX * 2;
        //     this.offsetY -= e.deltaY * 2;
        //     console.log(this.offsetX, this.offsetY);
        //     // }
        // };

    }

    setup = () => {

        // {Object.keys(Data).map(key => (
        //     <div>
        //         {Data[key].title}
        //         <img src={Data[key].img1} key={key} />
        //     </div>
        // ))}

        if (!PIXI.loader.resources['bg']) {
            PIXI.loader
                .add("bg",background)
        }
        PIXI.loader.load(this.initialize);
        // PIXI.loader.reset();
    };

    initialize = () => {

        // this.projectData = this.Data;

        //We will create a sprite and then add it to stage and (0,0) position
        this.bgImg = new PIXI.Sprite(PIXI.loader.resources["bg"].texture);
        this.filter = new PIXI.filters.ColorMatrixFilter();

        // Filter
        // this.app.stage.filters = [this.displacementFilter];
        this.app.stage.filters = [this.filter];
        this.app.stage.addChild(this.bgImg);
        this.app.stage.interactive = true;
        this.bgImg.interactive = true;

        this.bgImg.anchor.set(0.5,0.5);

        this.bgImg.click = () => {
            this.bgImg.scale.x -= 0.1;
            this.bgImg.scale.y -= 0.1;
        };

        // title text style
        this.titleStyle = new PIXI.TextStyle({
            fontFamily: 'Helvetica',
            fontSize: 36,
            letterSpacing: 2,
            // fontStyle: 'italic',
            fontWeight: 'bold',
            fill: '#ffffff',
            stroke: '#4a1850',
            wordWrap: true,
            wordWrapWidth: 440
        });

        // add project 1


        this.animationLoop();
    };

    animationLoop = () => {

        requestAnimationFrame(this.animationLoop);
        // this.bgImg.rotation += 0.01;

        this.bgImg.x = this.app.renderer.width / 2;
        this.bgImg.y = this.app.renderer.height / 2;

    };

    updatePixiCnt= (element) => {
        // the element is the DOM object that we will use as container to add pixi stage(canvas)
        this.pixi_cnt = element;
        //now we are adding the application to the DOM element which we got from the Ref.
        if(this.pixi_cnt && this.pixi_cnt.children.length<=0) {
            this.pixi_cnt.appendChild(this.app.view);
            //The setup function is a custom function that we created to add the sprites. We will this below
            this.setup();
        }
    };

    resize = () => {
        // console.log('works: ', document.body.clientHeight);
        // window.location.reload();
    };

    render() {
        return (
            <div>
                <div ref={this.updatePixiCnt} />

            </div>
        );
    }
}


