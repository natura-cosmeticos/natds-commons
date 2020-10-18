"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatdsIconsWoff2 = exports.NatdsIconsWoff = exports.NatdsIconsTtf = exports.NatdsIconsSvg = exports.NatdsIconsEot = exports.iconStyles = exports.iconNames = void 0;
var iconStyles = __importStar(require("./natds-icons.css"));
exports.iconStyles = iconStyles;
var natds_icons_json_1 = __importDefault(require("./natds-icons.json"));
exports.iconNames = natds_icons_json_1.default;
var NatdsIconsEot = __importStar(require("./fonts/natds-icons.eot"));
exports.NatdsIconsEot = NatdsIconsEot;
var NatdsIconsSvg = __importStar(require("./fonts/natds-icons.svg"));
exports.NatdsIconsSvg = NatdsIconsSvg;
var NatdsIconsTtf = __importStar(require("./fonts/natds-icons.ttf"));
exports.NatdsIconsTtf = NatdsIconsTtf;
var NatdsIconsWoff = __importStar(require("./fonts/natds-icons.woff"));
exports.NatdsIconsWoff = NatdsIconsWoff;
var NatdsIconsWoff2 = __importStar(require("./fonts/natds-icons.woff2"));
exports.NatdsIconsWoff2 = NatdsIconsWoff2;
//# sourceMappingURL=index.js.map