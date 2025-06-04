System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, _crd, OC_ATSDK_MANAGER_CLASS, OC_BIRDGE_CLASS, ATiOSTS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da9d0Say2tNybuwL8Ug1LdV", "ATiOSTS", undefined);

      __checkObsolete__(['native']);

      OC_ATSDK_MANAGER_CLASS = "ATSDKManager";
      OC_BIRDGE_CLASS = "ATJSBridge";

      _export("ATiOSTS", ATiOSTS = {
        initSDK: function (appid, appkey) {
          this.printJsLog("ATiOSJS::initSDK(" + appid + "," + appkey + ")");
          native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "startWithAppID:appKey:", appid, appkey);
        },
        initCustomMap: function (customMap) {
          this.printJsLog("ATiOSJS::initCustomMap(" + customMap + ")");
          native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:", customMap);
        },
        setPlacementCustomMap: function (placmentId, customMap) {
          this.printJsLog("ATiOSJS::setPlacementCustomMap(" + placmentId + ", " + customMap + ")");
          native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:forPlacementID:", customMap, placmentId);
        },
        setGDPRLevel: function (level) {
          this.printJsLog("ATiOSJS::setGDPRLevel(" + level + ")");
          native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDataConsent:", level);
        },
        getGDPRLevel: function () {
          this.printJsLog("ATiOSJS::getGDPRLevel()");
          return native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "dataConsent", "()I");
        },
        getUserLocation: function (callbackMethod) {
          this.printJsLog("ATiOSJS::getUserLocation(" + callbackMethod + ")");
          native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "getUserLocationWithCallback:", callbackMethod);
        },
        showGDPRAuth: function () {
          this.printJsLog("ATiOSJS::showGDPRAuth()");
          native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "presentDataConsentDialog", "()I");
        },
        setLogDebug: function (debug) {
          this.printJsLog("ATiOSJS::setLogDebug(" + debug + ")");
          native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDebugLog:", debug);
        },
        printJsLog: function (msg) {
          console.log(msg);

          if (undefined != msg && msg != null) {
            native.reflection.callStaticMethod(OC_BIRDGE_CLASS, "log:", msg);
          }
        },
        deniedUploadDeviceInfo: function (deniedInfo) {
          this.printJsLog("ATiOSJS::deniedUploadDeviceInfo(" + deniedInfo + ")");
          native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "deniedUploadDeviceInfo:", deniedInfo);
        },
        showGDPRConsent: function (callbackMethod) {// native.reflection.callStaticMethod(classJavaName, "showGDPRConsentDialog", "(Ljava/lang/String;)V", callbackMethod);
        },
        showDebuggerUI: function (debugKey) {
          native.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "showDebuggerUIWithDebugKey:", debugKey);
        },
        setChannel: function (channel) {// native.reflection.callStaticMethod(classJavaName, "setChannel", "(I)V", channel);
        },
        setSubChannel: function (subChannel) {// native.reflection.callStaticMethod(classJavaName, "setSubChannel", "(I)V", subChannel);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e3dc4056fd19b61f99e3dbd2de82b58690c221e.js.map