"use strict";
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 91084:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"ODI-Addon-v0.0-alpha-0824","title":"DI Addons Object","description":"(DRAFT) -- This object holds extension/addon objects to be embedded in the CDM JSON.","type":"object","patternProperties":{"^ADDON_":{"title":"Addon Data","description":"All addon objects must be named ADDON_[name]. They need to have a UUID and owner information, to mitigate addon naming collisions.","type":"object","properties":{"addonMeta":{"$ref":"./DI-Asset.json"},"owner":{"title":"Addon Owner","description":"Holds info about the owning entity for this addon. Typically a vendor or similar.","type":"object","properties":{"uuid":{"title":"Owner UUID","description":"This UUID should identify the owner across all of their addons.","$ref":"./UUID.json"},"name":{"title":"Owner Name","description":"Human-readable name associated with the above owner UUID","type":"string"}},"required":["uuid","name"]},"data":{"title":"Addon Data","description":"All addon data goes here. Information stored here is not standardized. Structure determined by addon owners."}},"required":["addonMeta","owner"],"additionalProperties":false}},"additionalProperties":false}');

/***/ })

};
;