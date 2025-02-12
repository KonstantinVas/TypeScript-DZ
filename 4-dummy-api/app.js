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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
var Gender;
(function (Gender) {
    Gender["MAN"] = "male";
    Gender["WOMAN"] = "female";
})(Gender || (Gender = {}));
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://dummyjson.com/users');
            const users = response.data.users;
            users.forEach(user => {
                console.log(user.firstName + ' ' + user.gender);
            });
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.error('Axios error:', error.message);
                throw new Error(`Axios error: ${error.message}`);
            }
            else if (error instanceof Error) {
                console.error('Unexpected error:', error.message);
                throw new Error(`Unexpected error: ${error.message}`);
            }
            else {
                console.error('Unknown error:', error);
                throw new Error('Unknown error occurred');
            }
        }
    });
}
fetchData();
