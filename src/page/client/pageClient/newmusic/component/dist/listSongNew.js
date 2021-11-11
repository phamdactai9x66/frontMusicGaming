"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var songApi_1 = require("api/songApi");
var GetTimeAudio_1 = require("page/client/common/GetTimeAudio");
var handle_1 = require("page/client/common/handle");
var react_1 = require("react");
var bs_1 = require("react-icons/bs");
var material_1 = require("@mui/material");
var ai_1 = require("react-icons/ai");
var io_1 = require("react-icons/io");
var core_1 = require("@material-ui/core");
var react_redux_1 = require("react-redux");
var actionAudio_1 = require("redux/audio/actionAudio");
var userPlaylist_1 = require("api/userPlaylist");
var react_router_1 = require("react-router");
var ModalLogged_1 = require("component/clientComponent/ModalLogged");
var Alert_1 = require("component/clientComponent/Alert");
var ListMusicNew = function (props) {
    var history = react_router_1.useHistory();
    var _a = react_1.useState(''), playlistName = _a[0], setPlaylistName = _a[1];
    var _b = react_1.useState(null), anchor = _b[0], setAnchor = _b[1];
    var _c = react_1.useState(null), anchor2 = _c[0], setAnchor2 = _c[1];
    var _d = react_1.useState([]), userPlaylists = _d[0], setUserPlaylists = _d[1];
    var _e = react_1.useState(false), isLogged = _e[0], setIsLogged = _e[1];
    var user = props.userState.user;
    var _f = react_1.useState([]), songs = _f[0], setSongs = _f[1];
    var dispatch = react_redux_1.useDispatch();
    var _g = react_1.useState({ status: "", content: "" }), handleStatus = _g[0], setHandleStatus = _g[1];
    var openPopover = function (event) {
        setAnchor(event.currentTarget);
    };
    var openPopover2 = function (event) {
        setAnchor2(event.currentTarget);
    };
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                dispatch(actionAudio_1.getlistAudio());
                return [2 /*return*/];
            });
        }); })();
    }, []);
    react_1.useEffect(function () {
        var getSongs = function () { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, songApi_1["default"].getAll({ _limit: 20 })];
                    case 1:
                        data = (_a.sent()).data;
                        setSongs(data);
                        return [2 /*return*/];
                }
            });
        }); };
        getSongs();
    }, []);
    var handleAdd = function (s, u, t) { return __awaiter(void 0, void 0, void 0, function () {
        var likeRes, playlistRes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (u === undefined) {
                        setIsLogged(true);
                        return [2 /*return*/];
                    }
                    if (!(t === 'like')) return [3 /*break*/, 2];
                    return [4 /*yield*/, handle_1.handleLike(s, u)];
                case 1:
                    likeRes = _a.sent();
                    if (likeRes && likeRes.status === "added") {
                        setHandleStatus({ status: "success", content: "Thêm vào yêu thích thành công." });
                    }
                    else if (likeRes && likeRes.status === "deleted") {
                        setHandleStatus({ status: "success", content: "Hủy bỏ yêu thích thành công." });
                    }
                    else {
                        setHandleStatus({ status: "failed", content: "Thêm vào yêu thích thất bại." });
                    }
                    _a.label = 2;
                case 2:
                    if (!(t === "playlist")) return [3 /*break*/, 4];
                    return [4 /*yield*/, handle_1.handleAddToPlaylist(s, u)];
                case 3:
                    playlistRes = _a.sent();
                    if (playlistRes && playlistRes.status === "successfully") {
                        setHandleStatus({ status: "success", content: "Thêm vào playlist thành công." });
                        setAnchor(null);
                    }
                    else if (playlistRes.status === "existed") {
                        setHandleStatus({ status: "failed", content: "Bài hát đã tồn tại trong playlist." });
                        setAnchor(null);
                    }
                    else {
                        setHandleStatus({ status: "failed", content: "Thêm vào playlist thất bại." });
                    }
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getUserPlaylists = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (user === "" || user === undefined) {
                        setAnchor(null);
                        setIsLogged(true);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, userPlaylist_1["default"].getAll({ id_User: user._id })];
                case 1:
                    data = (_a.sent()).data;
                    setUserPlaylists(data);
                    return [2 /*return*/];
            }
        });
    }); };
    var playAudio = function (_id) {
        dispatch(actionAudio_1.playSong({ _id: _id }));
        // console.log(_id);
    };
    var handleLogged = function () {
        setIsLogged(false);
    };
    if (handleStatus.status !== "") {
        setTimeout(function () {
            setHandleStatus({ status: "", content: "" });
        }, 3000);
    }
    var handleCreatePlaylist = function () { return __awaiter(void 0, void 0, void 0, function () {
        var form, isCreatedPlaylist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!playlistName) {
                        setHandleStatus({
                            status: "failed",
                            content: "Playlist không được để trống"
                        });
                        return [2 /*return*/];
                    }
                    form = new FormData;
                    form.append("name", playlistName);
                    form.append("id_User", user._id);
                    return [4 /*yield*/, userPlaylist_1["default"].postOne(form)];
                case 1:
                    isCreatedPlaylist = _a.sent();
                    if (isCreatedPlaylist.status === "successfully") {
                        setUserPlaylists(__spreadArrays(userPlaylists, isCreatedPlaylist.data));
                        setHandleStatus({
                            status: "success",
                            content: "Tạo mới Playlist thành công"
                        });
                        setAnchor2(null);
                    }
                    else {
                        setHandleStatus({
                            status: "failed",
                            content: "Không tạo được Playlist"
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isLogged && react_1["default"].createElement(ModalLogged_1["default"], { isLogged: isLogged, handleLogged: handleLogged }),
        handleStatus.status !== "" && react_1["default"].createElement(Alert_1["default"], { status: handleStatus.status, content: handleStatus.content }),
        songs.length !== 0 && songs.map(function (_a) {
            var any = _a.item, index = _a.index;
            return (react_1["default"].createElement("div", { className: "box-chart" },
                react_1["default"].createElement("h5", { className: "stt" }, index),
                react_1["default"].createElement("img", { width: 45, height: 45, src: item.image, alt: "" }),
                react_1["default"].createElement("div", { className: "box-icon", style: { left: "4rem" }, onClick: function () { return playAudio(item._id); } }, "\u25B6"),
                react_1["default"].createElement("div", { className: "name" },
                    react_1["default"].createElement("h6", null, item.title),
                    react_1["default"].createElement("div", { style: { fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" } }, "Ngh\u1EC7 s\u0129")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(GetTimeAudio_1["default"], { url: item.audio })),
                react_1["default"].createElement("div", { className: "icon_item" },
                    react_1["default"].createElement(ai_1.AiOutlineDownload, { onClick: function () { return handle_1.handleDownload(item._id); }, className: "icon" }),
                    react_1["default"].createElement(ai_1.AiFillHeart, { onClick: function () { return handleAdd(item._id, user._id, "like"); }, className: "icon" }),
                    react_1["default"].createElement(io_1.IoMdAdd, { className: "icon", onClick: function (e) {
                            openPopover(e);
                            getUserPlaylists();
                        } }),
                    react_1["default"].createElement(core_1.Popover, { open: Boolean(anchor), anchorEl: anchor, anchorOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        }, transformOrigin: {
                            vertical: "bottom",
                            horizontal: "right"
                        }, onClose: function () { return setAnchor(null); } },
                        react_1["default"].createElement("div", { style: { background: "#101929", margin: "", color: "#fff", width: "15rem" } },
                            react_1["default"].createElement("div", { className: "d-flex gap-2 p-2" },
                                react_1["default"].createElement("img", { width: 35, height: 35, src: item.image, alt: "" }),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("h6", null, item.name),
                                    react_1["default"].createElement("div", { style: { marginTop: "-0.7rem" } },
                                        react_1["default"].createElement("span", { style: { fontSize: "0.8rem" } }, "205k "),
                                        react_1["default"].createElement("span", { style: { fontSize: "0.8rem" } }, " 3.8M")))),
                            react_1["default"].createElement("hr", { style: { margin: "-0.1rem 0 0.5rem 0" } }),
                            react_1["default"].createElement(material_1.MenuItem, { className: "add list", onClick: openPopover2 },
                                react_1["default"].createElement(io_1.IoMdAdd, { className: "icon" }),
                                " \u2002 T\u1EA1o Playlist m\u1EDBi"),
                            react_1["default"].createElement(core_1.Popover, { open: Boolean(anchor2), anchorEl: anchor2, anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                }, transformOrigin: {
                                    vertical: "bottom",
                                    horizontal: "right"
                                }, onClose: function () { return setAnchor2(null); } },
                                react_1["default"].createElement("div", { className: "item p-3" },
                                    react_1["default"].createElement("form", null,
                                        react_1["default"].createElement("input", { type: "text", onChange: function (e) { return setPlaylistName(e.target.value); }, className: "mb-2 p-2 text-light", style: { background: "#0d141f", border: "0.1rem solid #0e5353" }, placeholder: "Nh\u1EADp t\u00EAn Playlist" }),
                                        react_1["default"].createElement("br", null),
                                        react_1["default"].createElement(material_1.Button, { color: "primary", onClick: handleCreatePlaylist, variant: "contained" }, "T\u1EA1o m\u1EDBi Playlist")))),
                            userPlaylists.length === 0 && react_1["default"].createElement(material_1.MenuItem, { className: "list", onClick: function () { return handleAdd(item._id, user._id, "playlist"); } },
                                react_1["default"].createElement(bs_1.BsMusicNoteList, null),
                                " \u2002 B\u1EA1n ch\u01B0a c\u00F3 Playlist n\u00E0o."),
                            userPlaylists.length !== 0 && userPlaylists.map(function (_) { return (react_1["default"].createElement(material_1.MenuItem, { className: "list", onClick: function () { return handleAdd(_._id, user._id, "playlist"); } },
                                react_1["default"].createElement(bs_1.BsMusicNoteList, null),
                                " \u2002 ",
                                _.name)); }))))));
        })));
};
exports["default"] = ListMusicNew;
