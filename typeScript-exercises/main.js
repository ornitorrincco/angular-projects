"use strict";
exports.__esModule = true;
// import { Point } from './point';
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
// let point = new Point(1,2);
// point.draw();
