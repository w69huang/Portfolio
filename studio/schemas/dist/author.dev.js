"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _skillset = _interopRequireDefault(require("./skillset"));

var _backend = _interopRequireDefault(require("./backend"));

var _framework = _interopRequireDefault(require("./framework"));

var _other = _interopRequireDefault(require("./other"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [{
    name: 'name',
    title: 'Name',
    type: 'string'
  }, {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'name',
      maxLength: 96
    }
  }, {
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true
    }
  }, {
    name: 'bio',
    title: 'Bio',
    type: 'array',
    of: [{
      title: 'Block',
      type: 'block',
      styles: [{
        title: 'Normal',
        value: 'normal'
      }],
      lists: []
    }]
  }, {
    name: 'skills',
    title: 'Skill Sets',
    type: 'array',
    of: [{
      type: 'skillset'
    }]
  }],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
};
exports["default"] = _default;