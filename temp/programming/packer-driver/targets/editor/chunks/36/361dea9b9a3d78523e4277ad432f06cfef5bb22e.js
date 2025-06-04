System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, _crd, classJavaName, ATAndroidInterstitialAutoAdTS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1727IBp4dGBLVfnoJvy4fC", "ATAndroidInterstitialAutoTS", undefined);

      __checkObsolete__(['native']);

      classJavaName = "com/thinkup/cocosjs/TUInterstitialAutoAdJSBridge";

      _export("ATAndroidInterstitialAutoAdTS", ATAndroidInterstitialAutoAdTS = {
        setAdListener: function (listener) {
          console.log("Android-setAdListener");
          native.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
        },
        addPlacementIds: function (placementIds) {
          console.log("Android-addPlacementIds");
          native.reflection.callStaticMethod(classJavaName, "addPlacementIds", "(Ljava/lang/String;)V", placementIds);
        },
        removePlacementId: function (placementId) {
          console.log("Android-removePlacementId");
          native.reflection.callStaticMethod(classJavaName, "removePlacementId", "(Ljava/lang/String;)V", placementId);
        },
        setAdExtraData: function (placementId, settings) {
          console.log("Android-setAdExtraData");
          native.reflection.callStaticMethod(classJavaName, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
        },
        hasAdReady: function (placementId) {
          console.log("Android-hasAdReady");
          return native.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
        },
        checkAdStatus: function (placementId) {
          console.log("Android-checkAdStatus:" + placementId);
          return native.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
        },
        showAd: function (placementId) {
          console.log("Android-ivautoad_showAd:" + placementId);
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
        },
        showAdInScenario: function (placementId, scenario) {
          console.log("Android-ivautoad_showAdInScenario:" + placementId + "---" + scenario);
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        },
        entryAdScenario: function (placementId, scenario) {
          console.log("Android-entryAdScenario:" + placementId + "---" + scenario);
          native.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=361dea9b9a3d78523e4277ad432f06cfef5bb22e.js.map