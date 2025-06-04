System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATAndroidTS, ATiOSTS, sys, _crd, isDebugLog, initPlatformBridge, platformBridge, ATSDK, GetUserLocationJsCallback, GetGDPRCallback;

  function _reportPossibleCrUseOfATAndroidTS(extras) {
    _reporterNs.report("ATAndroidTS", "./Android/ATAndroidTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATiOSTS(extras) {
    _reporterNs.report("ATiOSTS", "./iOS/ATiOSTS", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ATAndroidTS = _unresolved_2.ATAndroidTS;
    }, function (_unresolved_3) {
      ATiOSTS = _unresolved_3.ATiOSTS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ed0b9a4JdMXqs+2CC72I+8", "ATSDK", undefined);

      __checkObsolete__(['sys']);

      isDebugLog = false;

      initPlatformBridge = function () {
        if (sys.os === sys.OS.IOS) {
          return _crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS;
        } else if (sys.os === sys.OS.ANDROID) {
          return _crd && ATAndroidTS === void 0 ? (_reportPossibleCrUseOfATAndroidTS({
            error: Error()
          }), ATAndroidTS) : ATAndroidTS;
        }
      };

      platformBridge = initPlatformBridge();

      _export("ATSDK", ATSDK = {
        kATUserLocationUnknown: 0,
        kATUserLocationInEU: 1,
        kATUserLocationOutOfEU: 2,
        PERSONALIZED: 0,
        NONPERSONALIZED: 1,
        UNKNOWN: 2,
        //for android and ios
        OS_VERSION_NAME: "os_vn",
        OS_VERSION_CODE: "os_vc",
        APP_PACKAGE_NAME: "package_name",
        APP_VERSION_NAME: "app_vn",
        APP_VERSION_CODE: "app_vc",
        BRAND: "brand",
        MODEL: "model",
        DEVICE_SCREEN_SIZE: "screen",
        MNC: "mnc",
        MCC: "mcc",
        LANGUAGE: "language",
        TIMEZONE: "timezone",
        USER_AGENT: "ua",
        ORIENTATION: "orient",
        NETWORK_TYPE: "network_type",
        //for android
        INSTALLER: "it_src",
        ANDROID_ID: "android_id",
        GAID: "gaid",
        MAC: "mac",
        IMEI: "imei",
        OAID: "oaid",
        //for ios
        IDFA: "idfa",
        IDFV: "idfv",
        ATSDKListener: {
          userLocationCallback: null,
          getUserLocationCallback: function (userLocation) {
            if (undefined != this.userLocationCallback) {
              this.userLocationCallback(userLocation);
            }
          },
          gdprCallback: null,
          getGDPRCallback: function () {
            if (undefined != this.gdprCallback) {
              this.gdprCallback();
            }
          }
        },
        initSDK: function (appId, appKey) {
          if (undefined != platformBridge) {
            platformBridge.initSDK(appId, appKey);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        initCustomMap: function (customMap) {
          if (undefined != platformBridge) {
            if (undefined != customMap) {
              platformBridge.initCustomMap(JSON.stringify(customMap));
            }
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        setPlacementCustomMap: function (placmentId, customMap) {
          if (undefined != platformBridge) {
            if (undefined != customMap) {
              platformBridge.setPlacementCustomMap(placmentId, JSON.stringify(customMap));
            }
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        setGDPRLevel: function (level) {
          if (undefined != platformBridge) {
            platformBridge.setGDPRLevel(level);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        getGDPRLevel: function () {
          if (undefined != platformBridge) {
            return platformBridge.getGDPRLevel();
          } else {
            console.log("You must run on Android or iOS.");
          }

          return this.UNKNOWN;
        },
        getUserLocation: function (userLocationCallback) {
          this.ATSDKListener.userLocationCallback = userLocationCallback;

          if (undefined != platformBridge) {
            platformBridge.getUserLocation(GetUserLocationJsCallback);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        showGDPRAuth: function () {
          if (undefined != platformBridge) {
            platformBridge.showGDPRAuth();
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        setLogDebug: function (debug) {
          isDebugLog = debug;

          if (undefined != platformBridge) {
            platformBridge.setLogDebug(debug);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        printLog: function (msg) {
          if (undefined != msg && isDebugLog) {
            if (undefined != platformBridge) {
              platformBridge.printJsLog(msg);
            } else {
              console.log("You must run on Android or iOS.");
            }
          }
        },
        printLogWithParams: function (tag, methodName, placementId, callbackInfo, errorInfo) {
          this.printLog(tag + "::" + methodName + "()" + "\nplacementId=" + placementId + "\ncallbackInfo=" + callbackInfo + "\nerrorInfo=" + errorInfo);
        },
        deniedUploadDeviceInfo: function (deniedInfo) {
          if (undefined != platformBridge) {
            if (deniedInfo != null) {
              const length = deniedInfo.length;
              let deniedInfoString = "";

              for (let i = 0; i < length; i++) {
                const info = deniedInfo[i];

                if (i == 0) {
                  deniedInfoString = info;
                } else {
                  deniedInfoString = deniedInfoString + "," + info;
                }
              }

              console.log("test__" + deniedInfoString);
              platformBridge.deniedUploadDeviceInfo(deniedInfoString);
            }
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        setChannel: function (channel) {
          if (undefined != platformBridge) {
            platformBridge.setChannel(channel);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        setSubChannel: function (subChannel) {
          if (undefined != platformBridge) {
            platformBridge.setSubChannel(subChannel);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        showGDPRConsent: function (getGDPRCallback) {
          this.ATSDKListener.gdprCallback = getGDPRCallback;

          if (undefined != platformBridge) {
            platformBridge.showGDPRConsent(GetGDPRCallback);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        showDebuggerUI: function (debugKey) {
          if (undefined != platformBridge) {
            platformBridge.showDebuggerUI(debugKey);
          }
        }
      });

      GetUserLocationJsCallback = "ATSDK.ATSDKListener.getUserLocationCallback";
      GetGDPRCallback = "ATSDK.ATSDKListener.getGDPRCallback";
      window["ATSDK"] = ATSDK;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa296db6998fc6afbf0af173eac9f04a877adabc.js.map