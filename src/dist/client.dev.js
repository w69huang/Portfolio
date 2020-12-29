"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("@sanity/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _client["default"])({
  projectId: "uh4mciun",
  dataset: "production"
});

exports["default"] = _default;