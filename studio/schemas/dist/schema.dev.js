"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _schemaCreator = _interopRequireDefault(require("part:@sanity/base/schema-creator"));

var _schemaType = _interopRequireDefault(require("all:part:@sanity/base/schema-type"));

var _blockContent = _interopRequireDefault(require("./blockContent"));

var _category = _interopRequireDefault(require("./category"));

var _post = _interopRequireDefault(require("./post"));

var _author = _interopRequireDefault(require("./author"));

var _project = _interopRequireDefault(require("./project"));

var _skillset = _interopRequireDefault(require("./skillset"));

var _backend = _interopRequireDefault(require("./backend"));

var _framework = _interopRequireDefault(require("./framework"));

var _other = _interopRequireDefault(require("./other"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
// We import object and document schemas
// Then we give our schema to the builder and provide the result to Sanity
var _default = (0, _schemaCreator["default"])({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: _schemaType["default"].concat([// The following are document types which will appear
  // in the studio.
  _post["default"], _author["default"], _category["default"], _project["default"], _skillset["default"], _backend["default"], _framework["default"], _other["default"], // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  _blockContent["default"]])
});

exports["default"] = _default;