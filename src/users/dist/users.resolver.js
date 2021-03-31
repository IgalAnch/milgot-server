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
exports.UsersResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
//Entity+Model
var user_entity_1 = require("./user.entity"); //Entity+Model
var graphql_subscriptions_1 = require("graphql-subscriptions");
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
var pubSub = new graphql_subscriptions_1.PubSub();
var UsersResolver = /** @class */ (function () {
    function UsersResolver(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    UsersResolver.prototype.user = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usersService.findById(id)];
            });
        });
    }; //
    UsersResolver.prototype.users_all = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usersService.findAll()];
            });
        });
    };
    UsersResolver.prototype.isEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var user, access_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.isEmail(email)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.authService.login(user)];
                    case 2:
                        access_token = (_a.sent()).access_token;
                        user.firstName = access_token;
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UsersResolver.prototype.getTypesOfDocuments = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usersService.getTypesOfDocuments(id)];
            });
        });
    };
    //????????????????????????????????????????
    UsersResolver.prototype.testObject2 = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usersService.testObject(user)];
            });
        });
    };
    UsersResolver.prototype.register = function (username, password, firstName, lastName, previousLastName, 
    //@Args('birthYear') birthYear: number,
    gender) {
        return __awaiter(this, void 0, void 0, function () {
            var service;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.register(username, password, firstName, lastName, previousLastName, 
                        //birthYear,
                        gender)];
                    case 1:
                        service = _a.sent();
                        return [2 /*return*/, service];
                }
            });
        });
    };
    UsersResolver.prototype.register2 = function (idNumber, gender, birthYear, previousLastName, lastName, firstName, password, username) {
        return __awaiter(this, void 0, void 0, function () {
            var service;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.register2(username, password, firstName, lastName, previousLastName, birthYear, gender, idNumber)];
                    case 1:
                        service = _a.sent();
                        return [2 /*return*/, service];
                }
            });
        });
    };
    //   @Query(returns => User)
    //   async login(
    //     @Args('username', { type: () => String }) username: string,
    //     @Args('password', { type: () => String }) password: string,
    //     @Context() context, //: GraphQLExecutionContext,
    //   ) {
    //     console.log(1);
    //     console.log(username); //log //
    //     console.log(password); //log//
    //     let user = await this.usersService.fetchUser_unPw(username, password);
    //     let { access_token } = await this.authService.login(user);
    //     user.firstName = access_token;
    //     return user;
    //   }
    UsersResolver.prototype.verifyToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    UsersResolver.prototype.documentTypes = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usersService.findAllProductTypes(user.id)];
            });
        });
    };
    __decorate([
        graphql_1.Query(function (returns) { return user_entity_1.User; }),
        __param(0, graphql_1.Args('id', { type: function () { return graphql_1.Int; } }))
    ], UsersResolver.prototype, "user");
    __decorate([
        graphql_1.Query(function (returns) { return [user_entity_1.User]; })
    ], UsersResolver.prototype, "users_all");
    __decorate([
        graphql_1.Query(function (returns) { return user_entity_1.User; }) //RECENTLY CHANGED TO PASS ACCESS_TOKEN
        ,
        __param(0, graphql_1.Args('email'))
    ], UsersResolver.prototype, "isEmail");
    __decorate([
        graphql_1.Query(function (returns) { return user_entity_1.User; }),
        __param(0, graphql_1.Args('id'))
    ], UsersResolver.prototype, "getTypesOfDocuments");
    __decorate([
        graphql_1.Query(function (returns) { return user_entity_1.User; }),
        __param(0, graphql_1.Args('user'))
    ], UsersResolver.prototype, "testObject2");
    __decorate([
        graphql_1.Mutation(function (returns) { return user_entity_1.User; }),
        __param(0, graphql_1.Args('username')),
        __param(1, graphql_1.Args('password')),
        __param(2, graphql_1.Args('firstName')),
        __param(3, graphql_1.Args('lastName')),
        __param(4, graphql_1.Args('previousLastName')),
        __param(5, graphql_1.Args('gender'))
    ], UsersResolver.prototype, "register");
    __decorate([
        graphql_1.Mutation(function (returns) { return user_entity_1.User; }),
        __param(0, graphql_1.Args('idNumber')),
        __param(1, graphql_1.Args('gender')),
        __param(2, graphql_1.Args('birthYear')),
        __param(3, graphql_1.Args('previousLastName')),
        __param(4, graphql_1.Args('lastName')),
        __param(5, graphql_1.Args('firstName')),
        __param(6, graphql_1.Args('password')),
        __param(7, graphql_1.Args('username'))
    ], UsersResolver.prototype, "register2");
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        graphql_1.Query(function (returns) { return Boolean; })
    ], UsersResolver.prototype, "verifyToken");
    __decorate([
        graphql_1.ResolveField(),
        __param(0, graphql_1.Parent())
    ], UsersResolver.prototype, "documentTypes");
    UsersResolver = __decorate([
        graphql_1.Resolver(user_entity_1.User)
    ], UsersResolver);
    return UsersResolver;
}());
exports.UsersResolver = UsersResolver;
