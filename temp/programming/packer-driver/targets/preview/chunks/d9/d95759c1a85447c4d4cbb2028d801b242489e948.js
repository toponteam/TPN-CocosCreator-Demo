System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, _crd, classJavaName, ATAndroidTS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4060FJ3XFIoJWKT8/UOUjd", "ATAndroidTS", undefined);

      __checkObsolete__(['native']);

      classJavaName = "com/thinkup/cocosjs/TUJSBridge";

      _export("ATAndroidTS", ATAndroidTS = {
        printJsLog: function printJsLog(msg) {
          if (undefined != msg) {
            native.reflection.callStaticMethod("android/util/Log", "i", "(Ljava/lang/String;Ljava/lang/String;)I", "TU-Cocos-JS", msg);
          }
        },
        initSDK: function initSDK(appid, appkey) {
          native.reflection.callStaticMethod(classJavaName, "initSDK", "(Ljava/lang/String;Ljava/lang/String;)V", appid, appkey);
        },
        initCustomMap: function initCustomMap(customMap) {
          native.reflection.callStaticMethod(classJavaName, "initCustomMap", "(Ljava/lang/String;)V", customMap);
        },
        setPlacementCustomMap: function setPlacementCustomMap(placmentId, customMap) {
          native.reflection.callStaticMethod(classJavaName, "setPlacementCustomMap", "(Ljava/lang/String;Ljava/lang/String;)V", placmentId, customMap);
        },
        setGDPRLevel: function setGDPRLevel(level) {
          native.reflection.callStaticMethod(classJavaName, "setGDPRLevel", "(I)V", level);
        },
        getGDPRLevel: function getGDPRLevel() {
          return native.reflection.callStaticMethod(classJavaName, "getGDPRLevel", "()I");
        },
        getUserLocation: function getUserLocation(callbackMethod) {
          native.reflection.callStaticMethod(classJavaName, "getUserLocation", "(Ljava/lang/String;)V", callbackMethod);
        },
        showGDPRAuth: function showGDPRAuth() {
          native.reflection.callStaticMethod(classJavaName, "showGDPRAuth", "()V");
        },
        setLogDebug: function setLogDebug(debug) {
          native.reflection.callStaticMethod(classJavaName, "setLogDebug", "(Z)V", debug);
        },
        deniedUploadDeviceInfo: function deniedUploadDeviceInfo(deniedInfo) {
          native.reflection.callStaticMethod(classJavaName, "deniedUploadDeviceInfo", "(Ljava/lang/String;)V", deniedInfo);
        },
        setChannel: function setChannel(channel) {
          native.reflection.callStaticMethod(classJavaName, "setChannel", "(Ljava/lang/String;)V", channel);
        },
        setSubChannel: function setSubChannel(subChannel) {
          native.reflection.callStaticMethod(classJavaName, "setSubChannel", "(Ljava/lang/String;)V", subChannel);
        },
        showGDPRConsent: function showGDPRConsent(callbackMethod) {
          native.reflection.callStaticMethod(classJavaName, "showGDPRConsent", "(Ljava/lang/String;)V", callbackMethod);
        },
        showDebuggerUI: function showDebuggerUI(debugKey) {
          try {
            native.reflection.callStaticMethod(classJavaName, "showDebuggerUI", "(Ljava/lang/String;)V", debugKey);
          } catch (error) {
            if (error instanceof Error) {
              console.error(error.message);
            } else {
              console.error('unknown error', error);
            }
          }
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d95759c1a85447c4d4cbb2028d801b242489e948.js.map