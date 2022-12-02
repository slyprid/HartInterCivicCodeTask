"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
/*@Injectable()*/
var InventoryService = /** @class */ (function () {
    function InventoryService(http, configService) {
        this.http = http;
        this.configService = configService;
        var config = configService.getConfig();
        console.log(config);
    }
    return InventoryService;
}());
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map