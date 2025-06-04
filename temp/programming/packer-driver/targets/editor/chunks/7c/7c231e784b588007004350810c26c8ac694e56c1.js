System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, _crd, classJavaName, ATAndroidSplashTS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5f078wp0mVKTbTZM7Pg9/Hu", "ATAndroidSplashTS", undefined);

      __checkObsolete__(['native']);

      classJavaName = "com/thinkup/cocosjs/TUSplashBridge";

      _export("ATAndroidSplashTS", ATAndroidSplashTS = {
        loadSplash: function (placementId, settings) {
          console.log("thinkup++++++++++ Android-loadSplash");
          native.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
        },
        setAdListener: function (listener) {
          console.log("thinkup++++++++++ Android-setAdListener");
          native.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
        },
        hasAdReady: function (placementId) {
          console.log("thinkup++++++++++ Android-hasAdReady");
          return native.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
        },
        checkAdStatus: function (placementId) {
          console.log("thinkup++++++++++ Android-checkAdStatus:" + placementId);
          return native.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
        },
        showAd: function (placementId) {
          console.log("thinkup++++++++++ Android-showAd:" + placementId);
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
        },
        showAdInScenario: function (placementId, scenario) {
          console.log("thinkup++++++++++ Android-showAdInScenario:" + placementId + "---" + scenario);
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        },
        entryAdScenario: function (placementId, scenario) {
          console.log("thinkup++++++++++ Android-entryAdScenario:" + placementId + "---" + scenario);
          native.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c231e784b588007004350810c26c8ac694e56c1.js.map