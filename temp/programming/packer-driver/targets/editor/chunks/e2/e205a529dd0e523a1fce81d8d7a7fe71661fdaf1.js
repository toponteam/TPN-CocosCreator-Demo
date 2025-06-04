System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, _crd, classJavaName, ATAndroidRewardedVideoJS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8111cH7b/5Cq7cU70azJvol", "ATAndroidRewardedVideoTS", undefined);

      __checkObsolete__(['native']);

      classJavaName = "com/thinkup/cocosjs/TURewardedVideoJSBridge";

      _export("ATAndroidRewardedVideoJS", ATAndroidRewardedVideoJS = {
        loadRewardedVideo: function (placementId, settings) {
          console.log("Android-loadRewardedVideo");
          native.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
        },
        setAdListener: function (listener) {
          console.log("Android-setAdListener");
          native.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
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
          console.log("Android-rv_showAd:" + placementId);
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
        },
        showAdInScenario: function (placementId, scenario) {
          console.log("Android-rv_showAdInScenario:" + placementId + "---" + scenario);
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
//# sourceMappingURL=e205a529dd0e523a1fce81d8d7a7fe71661fdaf1.js.map