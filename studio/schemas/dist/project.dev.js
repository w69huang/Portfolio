"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [{
    name: "title",
    type: "string"
  }, {
    name: "date",
    type: "datetime"
  }, // {
  //     name: "place",
  //     type: "string",
  // },
  {
    name: "description",
    type: "text"
  }, {
    name: "projectType",
    title: "Project Type",
    type: "string",
    options: {
      list: [{
        value: "personal",
        title: "Personal"
      }, {
        value: "client",
        title: "Client"
      }, {
        value: "school",
        title: "School"
      }]
    }
  }, {
    name: "link",
    type: "url"
  }, {
    name: "tags",
    type: "array",
    of: [{
      type: "string"
    }],
    options: {
      layout: "tags"
    }
  }]
};
exports["default"] = _default;