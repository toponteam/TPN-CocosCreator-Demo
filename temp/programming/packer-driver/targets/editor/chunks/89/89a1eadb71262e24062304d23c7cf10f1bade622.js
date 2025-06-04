System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATiOSNativeTS, ATAndroidNativeTS, Component, sys, AdViewProperty, _crd, initPlatformBridge, platformBridge, ATNativeSDK, LoadedCallbackKey, LoadFailCallbackKey, CloseCallbackKey, ClickCallbackKey, ShowCallbackKey, VideoStartKey, VideoEndKey, BiddingAttempt, BiddingFilled, BiddingFail, Attemp, LoadFilled, LoadFail;

  function _reportPossibleCrUseOfATiOSNativeTS(extras) {
    _reporterNs.report("ATiOSNativeTS", "./iOS/ATiOSNativeTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATAndroidNativeTS(extras) {
    _reporterNs.report("ATAndroidNativeTS", "./Android/ATAndroidNativeTS", _context.meta, extras);
  }

  _export("AdViewProperty", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ATiOSNativeTS = _unresolved_2.ATiOSNativeTS;
    }, function (_unresolved_3) {
      ATAndroidNativeTS = _unresolved_3.ATAndroidNativeTS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c999fscpZFH6IfGH4cbp1fU", "ATNative", undefined);

      __checkObsolete__(['Component', 'sys']);

      initPlatformBridge = function () {
        if (sys.os === sys.OS.IOS) {
          return _crd && ATiOSNativeTS === void 0 ? (_reportPossibleCrUseOfATiOSNativeTS({
            error: Error()
          }), ATiOSNativeTS) : ATiOSNativeTS;
        } else if (sys.os === sys.OS.ANDROID) {
          return _crd && ATAndroidNativeTS === void 0 ? (_reportPossibleCrUseOfATAndroidNativeTS({
            error: Error()
          }), ATAndroidNativeTS) : ATAndroidNativeTS;
        }
      };

      platformBridge = initPlatformBridge();

      _export("ATNativeSDK", ATNativeSDK = {
        ATNativeListener: {
          developerCallback: null,
          onNativeAdLoaded: function (placementId) {
            if (this.developerCallback != null && this.developerCallback.onNativeAdLoaded != null) {
              this.developerCallback.onNativeAdLoaded(placementId);
            }
          },
          onNativeAdLoadFail: function (placementId, errorInfo) {
            if (this.developerCallback != null && this.developerCallback.onNativeAdLoadFail != null) {
              this.developerCallback.onNativeAdLoadFail(placementId, errorInfo);
            }
          },
          onNativeAdShow: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onNativeAdShow != null) {
              this.developerCallback.onNativeAdShow(placementId, callbackInfo);
            }
          },
          onNativeAdClick: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onNativeAdClick != null) {
              this.developerCallback.onNativeAdClick(placementId, callbackInfo);
            }
          },
          onNativeAdVideoStart: function (placementId) {
            if (this.developerCallback != null && this.developerCallback.onNativeAdVideoStart != null) {
              this.developerCallback.onNativeAdVideoStart(placementId);
            }
          },
          onNativeAdVideoEnd: function (placementId) {
            if (this.developerCallback != null && this.developerCallback.onNativeAdVideoEnd != null) {
              this.developerCallback.onNativeAdVideoEnd(placementId);
            }
          },
          onNativeAdCloseButtonTapped: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onNativeAdCloseButtonTapped != null) {
              this.developerCallback.onNativeAdCloseButtonTapped(placementId, callbackInfo);
            }
          },
          //added v5.8.10
          onAdSourceBiddingAttempt: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingAttempt != null) {
              this.developerCallback.onAdSourceBiddingAttempt(placementId, callbackInfo);
            }
          },
          onAdSourceBiddingFilled: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingFilled != null) {
              this.developerCallback.onAdSourceBiddingFilled(placementId, callbackInfo);
            }
          },
          onAdSourceBiddingFail: function (placementId, errorInfo, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingFail != null) {
              this.developerCallback.onAdSourceBiddingFail(placementId, errorInfo, callbackInfo);
            }
          },
          onAdSourceAttemp: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceAttemp != null) {
              this.developerCallback.onAdSourceAttemp(placementId, callbackInfo);
            }
          },
          onAdSourceLoadFilled: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceLoadFilled != null) {
              this.developerCallback.onAdSourceLoadFilled(placementId, callbackInfo);
            }
          },
          onAdSourceLoadFail: function (placementId, errorInfo, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceLoadFail != null) {
              this.developerCallback.onAdSourceLoadFail(placementId, errorInfo, callbackInfo);
            }
          }
        },
        loadAd: function (placementId, settings = {}) {
          if (undefined != platformBridge) {
            platformBridge.loadNative(placementId, JSON.stringify(settings));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        setAdListener: function (listener) {
          const eventJSON = {};
          eventJSON[LoadedCallbackKey] = "ATNative.ATNativeListener.onNativeAdLoaded", eventJSON[LoadFailCallbackKey] = "ATNative.ATNativeListener.onNativeAdLoadFail", eventJSON[CloseCallbackKey] = "ATNative.ATNativeListener.onNativeAdCloseButtonTapped", eventJSON[ClickCallbackKey] = "ATNative.ATNativeListener.onNativeAdClick", eventJSON[ShowCallbackKey] = "ATNative.ATNativeListener.onNativeAdShow", eventJSON[VideoStartKey] = "ATNative.ATNativeListener.onNativeAdVideoStart", eventJSON[VideoEndKey] = "ATNative.ATNativeListener.onNativeAdVideoEnd", //added v5.8.10
          eventJSON[BiddingAttempt] = "ATNative.ATNativeListener.onAdSourceBiddingAttempt", eventJSON[BiddingFilled] = "ATNative.ATNativeListener.onAdSourceBiddingFilled", eventJSON[BiddingFail] = "ATNative.ATNativeListener.onAdSourceBiddingFail", eventJSON[Attemp] = "ATNative.ATNativeListener.onAdSourceAttemp", eventJSON[LoadFilled] = "ATNative.ATNativeListener.onAdSourceLoadFilled", eventJSON[LoadFail] = "ATNative.ATNativeListener.onAdSourceLoadFail";

          if (undefined != platformBridge) {
            platformBridge.setAdListener(JSON.stringify(eventJSON));
          } else {
            console.log("You must run on Android or iOS.");
          }

          this.ATNativeListener.developerCallback = listener;
        },
        hasAdReady: function (placementId) {
          if (undefined != platformBridge) {
            return platformBridge.hasAdReady(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }

          return false;
        },
        checkAdStatus: function (placementId) {
          if (undefined != platformBridge) {
            return platformBridge.checkAdStatus(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }

          return "";
        },
        showAd: function (placementId, adViewProperty) {
          if (undefined != platformBridge) {
            platformBridge.showAd(placementId, JSON.stringify(adViewProperty.getAdViewProperty()));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        showAdInScenario: function (placementId, adViewProperty, scenario) {
          if (undefined != platformBridge) {
            platformBridge.showAdInScenario(placementId, JSON.stringify(adViewProperty.getAdViewProperty()), scenario);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        entryAdScenario: function (placementId, scenario) {
          if (undefined != platformBridge) {
            platformBridge.entryAdScenario(placementId, scenario);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        removeAd: function (placementId) {
          if (undefined != platformBridge) {
            platformBridge.removeAd(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        createLoadAdSize: function (width, height) {
          const loadAdSize = {};
          loadAdSize["width"] = width;
          loadAdSize["height"] = height;
          return loadAdSize;
        }
      });

      _export("AdViewProperty", AdViewProperty = class AdViewProperty extends Component {
        constructor(...args) {
          super(...args);
          this.parent = null;
          this.appIcon = null;
          this.mainImage = null;
          this.title = null;
          this.desc = null;
          this.adLogo = null;
          this.cta = null;
          this.rating = null;
          this.dislike = null;
          this.elements = null;
        }

        createItemViewProperty(x, y, width, height, backgroundColor, textColor, textSize, isCustomClick = false) {
          const itemProperty = {};
          itemProperty["x"] = x;
          itemProperty["y"] = y;
          itemProperty["width"] = width;
          itemProperty["height"] = height;
          itemProperty["backgroundColor"] = backgroundColor;
          itemProperty["textColor"] = textColor;
          itemProperty["textSize"] = textSize;
          itemProperty["isCustomClick"] = isCustomClick;
          return itemProperty;
        }

        getAdViewProperty() {
          const nativeViewProperty = {};

          if (this.parent != null) {
            nativeViewProperty["parent"] = this.parent;
          }

          if (this.appIcon != null) {
            nativeViewProperty["icon"] = this.appIcon;
          }

          if (this.mainImage != null) {
            nativeViewProperty["mainImage"] = this.mainImage;
          }

          if (this.title != null) {
            nativeViewProperty["title"] = this.title;
          }

          if (this.desc != null) {
            nativeViewProperty["desc"] = this.desc;
          }

          if (this.adLogo != null) {
            nativeViewProperty["adLogo"] = this.adLogo;
          }

          if (this.cta != null) {
            nativeViewProperty["cta"] = this.cta;
          }

          if (this.rating != null) {
            nativeViewProperty["rating"] = this.rating;
          }

          if (this.dislike != null) {
            nativeViewProperty["dislike"] = this.dislike;
          }

          if (this.elements != null) {
            nativeViewProperty["elements"] = this.elements;
          }

          return nativeViewProperty;
        }

      });

      LoadedCallbackKey = "NativeLoaded";
      LoadFailCallbackKey = "NativeLoadFail";
      CloseCallbackKey = "NativeCloseButtonTapped";
      ClickCallbackKey = "NativeClick";
      ShowCallbackKey = "NativeShow";
      VideoStartKey = "NativeVideoStart";
      VideoEndKey = "NativeVideoEnd";
      BiddingAttempt = "NativeBiddingAttempt";
      BiddingFilled = "NativeBiddingFilled";
      BiddingFail = "NativeBiddingFail";
      Attemp = "NativeAttemp";
      LoadFilled = "NativeLoadFilled";
      LoadFail = "NativeLoadFail";
      window["ATNative"] = ATNativeSDK;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89a1eadb71262e24062304d23c7cf10f1bade622.js.map