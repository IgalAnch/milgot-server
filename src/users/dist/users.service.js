"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.__esModule = true;
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
// import { validate } from 'class-validator';
var common_2 = require("@nestjs/common"); //CardService
var user_entity_1 = require("./user.entity");
var http_exception_1 = require("@nestjs/common/exceptions/http.exception");
var auth_service_1 = require("../auth/auth.service");
var document_type_service_1 = require("./document-type/document-type.service");
/*
to-do:
======
*authenticate roles
*1 table interface on admin
*
*/
var UsersService = /** @class */ (function () {
    function UsersService(documentTypeService, userRepository, authService) {
        this.documentTypeService = documentTypeService;
        this.userRepository = userRepository;
        this.authService = authService;
    }
    UsersService.prototype.findAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            var all;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.find({
                            select: [
                                'id',
                                'firstName',
                                'lastName',
                                'username',
                                'previousLastName',
                                'birthYear',
                                'gender',
                                'idNumber',
                                'password',
                            ]
                        })];
                    case 1:
                        all = _a.sent();
                        //await console.log(all);
                        return [2 /*return*/, all];
                }
            });
        });
    };
    UsersService.prototype.getRandomInt = function (max) {
        var n = Math.floor(Math.random() * Math.floor(max));
        return n;
    };
    UsersService.prototype.findOne = function (username) {
        return __awaiter(this, void 0, Promise, function () {
            var one;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ username: username })];
                    case 1:
                        one = _a.sent();
                        return [2 /*return*/, one];
                }
            });
        });
    };
    /**check user */
    UsersService.prototype.findById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var user, errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            errors = { User: ' not found!' };
                            throw new http_exception_1.HttpException({ errors: errors }, 401);
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**check user */
    UsersService.prototype.isEmail = function (email) {
        return __awaiter(this, void 0, Promise, function () {
            var user, errors, n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            errors = { User: ' not found!' };
                            throw new http_exception_1.HttpException({ errors: errors }, 401);
                        }
                        n = this.getRandomInt(999);
                        user.email = n.toString();
                        //
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UsersService.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    UsersService.prototype.getTypesOfDocuments = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.documentTypeService.addProductType()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.userRepository.findOne(id)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.register = function (username, password, firstName, lastName, previousLastName, 
    //birthYear,
    gender) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = new user_entity_1.User();
                        obj.username = username;
                        obj.password = password;
                        obj.firstName = firstName;
                        obj.lastName = lastName;
                        obj.previousLastName = previousLastName;
                        obj.gender = gender;
                        return [4 /*yield*/, this.userRepository.save(obj)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user]; // NOT null anymore
                }
            });
        });
    };
    UsersService.prototype.register2 = function (username, password, firstName, lastName, previousLastName, birthYear, gender, idNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = new user_entity_1.User();
                        obj.username = username;
                        obj.password = password;
                        obj.firstName = firstName;
                        obj.lastName = lastName;
                        obj.previousLastName = previousLastName;
                        obj.birthYear = birthYear;
                        obj.gender = gender;
                        obj.idNumber = idNumber;
                        return [4 /*yield*/, this.userRepository.save(obj)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user]; // NOT null anymore
                }
            });
        });
    };
    ///TEST
    UsersService.prototype.testObject = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var id, idNumber, firstName, lastName, gender, birthYear, previousLastName, username, someUser, users, firstUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = user.id, idNumber = user.idNumber, firstName = user.firstName, lastName = user.lastName, gender = user.gender, birthYear = user.birthYear, previousLastName = user.previousLastName, username = user.username;
                        someUser = {
                            id: user.id,
                            idNumber: user.idNumber,
                            firstName: user.firstName,
                            gender: user.gender,
                            birthYear: user.birthYear,
                            lastName: user.lastName,
                            previousLastName: user.previousLastName,
                            username: user.username
                        };
                        return [4 /*yield*/, this.userRepository.find({
                                where: someUser
                            })];
                    case 1:
                        users = _a.sent();
                        firstUser = users[0];
                        return [2 /*return*/, firstUser];
                }
            });
        });
    };
    UsersService.prototype.findAllProductTypes = function (id) { };
    UsersService = __decorate([
        common_1.Injectable(),
        __param(0, common_2.Inject(common_2.forwardRef(function () { return document_type_service_1.DocumentTypeService; }))),
        __param(1, typeorm_1.InjectRepository(user_entity_1.User)),
        __param(2, common_2.Inject(common_2.forwardRef(function () { return auth_service_1.AuthService; })))
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
