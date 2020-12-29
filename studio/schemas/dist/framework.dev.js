"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'framework',
  title: 'Framework',
  type: 'object',
  fields: [{
    name: 'name',
    title: 'Name',
    type: 'string'
  }, {
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true
    }
  }]
};
exports["default"] = _default;