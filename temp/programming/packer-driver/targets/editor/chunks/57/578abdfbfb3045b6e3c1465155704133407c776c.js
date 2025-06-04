System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, _crd, classJavaName, ATAndroidNativeTS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc6dfEhmGJFzrbl6ANY2uZM", "ATAndroidNativeTS", undefined);

      __checkObsolete__(['native']);

      classJavaName = "com/thinkup/cocosjs/TUNativeJSBridge";

      _export("ATAndroidNativeTS", ATAndroidNativeTS = {
        loadNative: function (placementId, settings) {
          console.log("Android-loadNative");
          native.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
        },
        setAdListener: function (listener) {
          console.log("Android-setAdListener");
          native.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
        },
        hasAdReady: function (placementId) {
          console.log("Android-hasAdReady");
          return native.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
          ;
        },
        checkAdStatus: function (placementId) {
          console.log("Android-checkAdStatus:" + placementId);
          return native.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
        },
        showAd: function (placementId, adViewProperty) {
          console.log("Android-showAd");
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, adViewProperty, "");
        },
        showAdInScenario: function (placementId, adViewProperty, scenario) {
          console.log("Android-showAdInScenario");
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, adViewProperty, scenario);
        },
        removeAd: function (placementId) {
          console.log("Android-removeAd");
          native.reflection.callStaticMethod(classJavaName, "remove", "(Ljava/lang/String;)V", placementId);
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
//# sourceMappingURL=578abdfbfb3045b6e3c1465155704133407c776c.js.map