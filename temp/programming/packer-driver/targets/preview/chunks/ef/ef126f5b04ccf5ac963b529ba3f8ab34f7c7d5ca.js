System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, _crd, classJavaName, ATAndroidInterstitialTS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4308GkfahPFrXmCbHJzOkX", "ATAndroidInterstitialTS", undefined);

      __checkObsolete__(['native']);

      classJavaName = "com/thinkup/cocosjs/TUInterstitialJSBridge";

      _export("ATAndroidInterstitialTS", ATAndroidInterstitialTS = {
        loadInterstitial: function loadInterstitial(placementId, settings) {
          console.log("Android-loadInterstitial");
          native.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
        },
        setAdListener: function setAdListener(listener) {
          console.log("Android-setAdListener");
          native.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
        },
        hasAdReady: function hasAdReady(placementId) {
          console.log("Android-hasAdReady");
          return native.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
        },
        checkAdStatus: function checkAdStatus(placementId) {
          console.log("Android-checkAdStatus:" + placementId);
          return native.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
        },
        showAd: function showAd(placementId) {
          console.log("Android-showAd:" + placementId);
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
        },
        showAdInScenario: function showAdInScenario(placementId, scenario) {
          console.log("Android-showAdInScenario:" + placementId + "---" + scenario);
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        },
        entryAdScenario: function entryAdScenario(placementId, scenario) {
          console.log("Android-entryAdScenario:" + placementId + "---" + scenario);
          native.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef126f5b04ccf5ac963b529ba3f8ab34f7c7d5ca.js.map