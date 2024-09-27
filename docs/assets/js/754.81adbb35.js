"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 93754:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"ODI-Asset-v0.0-alpha-0824","title":"DI Base Asset","description":"(DRAFT) -- Base properties shared by all DI Assets.","type":"object","properties":{"uuid":{"description":"Unique identifier for this asset.","$ref":"./UUID.json"},"name":{"title":"Name","description":"The human-readable name for this asset.","type":"string"},"summary":{"title":"Summary","description":"Longer description of the asset.","type":"string"},"documentation":{"title":"Documentation","description":"Full documentation for the asset/element/model.","type":"object","properties":{"content":{"type":"string"},"MIMEType":{"type":"string"}},"required":["content","MIMEType"]},"version":{"title":"Asset Version","description":"Version number for the asset.","type":"string"},"draft":{"title":"Asset Draft Status","description":"Flag to mark non-functional or work-in-progress assets.","type":"boolean","default":true},"creator":{"title":"Creator","description":"Unique identifier for this asset\'s creator.","$ref":"./UUID.json"},"createdDate":{"title":"Creation Date","description":"Datetime when this asset was created.","type":"string","format":"date-time"},"updator":{"title":"Updator","description":"Unique identifier for the user that most recently updated this asset.","$ref":"./UUID.json"},"updatedDate":{"title":"Last Updated Date","description":"Datetime when this asset was most recently updated.","type":"string","format":"date-time"}},"required":["uuid"]}');

/***/ })

};
;