System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sys, _dec, _class, _class2, _crd, ccclass, property, Constant;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7583U1Yg9AnLHrQ2w3tITG", "Constant", undefined);

      __checkObsolete__(['_decorator', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Constant", Constant = (_dec = ccclass('Constant'), _dec(_class = (_class2 = class Constant {
        static init() {
          if (sys.os === sys.OS.ANDROID) {
            Constant.APPID = 'a5aa1f9deda26d';
            Constant.APPKEY = '4f7b9ac17decb9babec83aac078742c7';
            Constant.RewardedPlacementId = 'b5b449fb3d89d7';
            Constant.InterPlacementId = 'b5baca53984692';
            Constant.BannerPlacementId = 'b5baca4f74c3d8';
            Constant.NativePlacementId = 'b5aa1fa2cae775';
            Constant.AutoRewardedPlacementId = 'b5b449fb3d89d7';
            Constant.AutoInterPlacementId = 'b5baca53984692';
            Constant.SplashPlacementId = 'b5bea7cc9a4497';
          } else if (sys.os === sys.OS.IOS) {
            Constant.APPID = 'a5b0e8491845b3';
            Constant.APPKEY = '7eae0567827cfe2b22874061763f30c9';
            Constant.RewardedPlacementId = 'b5b44a0f115321';
            Constant.InterPlacementId = 'b5bacad26a752a';
            Constant.BannerPlacementId = 'b5bacaccb61c29';
            Constant.NativePlacementId = 'b5b0f5663c6e4a';
            Constant.AutoRewardedPlacementId = 'b5b44a0f115321';
            Constant.AutoInterPlacementId = 'b5bacad26a752a';
            Constant.SplashPlacementId = 'b5c22f0e5cc7a0';
          }

          Constant.YourScenarioId = 'your scenario id';
        }

        constructor() {
          Constant.init();
        }

      }, _class2.APPID = void 0, _class2.APPKEY = void 0, _class2.RewardedPlacementId = void 0, _class2.InterPlacementId = void 0, _class2.AutoRewardedPlacementId = void 0, _class2.AutoInterPlacementId = void 0, _class2.BannerPlacementId = void 0, _class2.NativePlacementId = void 0, _class2.SplashPlacementId = void 0, _class2.YourScenarioId = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60f064d22e620e6169005723e9bfeff9a50b1953.js.map