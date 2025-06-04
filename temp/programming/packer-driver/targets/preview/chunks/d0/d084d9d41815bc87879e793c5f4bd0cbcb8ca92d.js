System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATSDK, ATBannerSDK, ATRewardedVideoSDK, AdViewProperty, ATNativeSDK, ATInterstitialSDK, ATSplashSDK, Constant, _cc, _decorator, Button, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, cc, ccclass, property, MainSceneScript;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfATSDK(extras) {
    _reporterNs.report("ATSDK", "db://assets/script/AnyThinkAds/ATSDK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATBannerSDK(extras) {
    _reporterNs.report("ATBannerSDK", "db://assets/script/AnyThinkAds/ATBanner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATRewardedVideoSDK(extras) {
    _reporterNs.report("ATRewardedVideoSDK", "db://assets/script/AnyThinkAds/ATRewardedVideo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdViewProperty(extras) {
    _reporterNs.report("AdViewProperty", "db://assets/script/AnyThinkAds/ATNative", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATNativeSDK(extras) {
    _reporterNs.report("ATNativeSDK", "db://assets/script/AnyThinkAds/ATNative", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATInterstitialSDK(extras) {
    _reporterNs.report("ATInterstitialSDK", "db://assets/script/AnyThinkAds/ATInterstitial", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATSplashSDK(extras) {
    _reporterNs.report("ATSplashSDK", "db://assets/script/AnyThinkAds/ATSplash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "db://assets/script/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
      _decorator = _cc2._decorator;
      Button = _cc2.Button;
      Component = _cc2.Component;
    }, function (_unresolved_2) {
      ATSDK = _unresolved_2.ATSDK;
    }, function (_unresolved_3) {
      ATBannerSDK = _unresolved_3.ATBannerSDK;
    }, function (_unresolved_4) {
      ATRewardedVideoSDK = _unresolved_4.ATRewardedVideoSDK;
    }, function (_unresolved_5) {
      AdViewProperty = _unresolved_5.AdViewProperty;
      ATNativeSDK = _unresolved_5.ATNativeSDK;
    }, function (_unresolved_6) {
      ATInterstitialSDK = _unresolved_6.ATInterstitialSDK;
    }, function (_unresolved_7) {
      ATSplashSDK = _unresolved_7.ATSplashSDK;
    }, function (_unresolved_8) {
      Constant = _unresolved_8.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bacc9BjKm5NsK+biP6J9/Pn", "MainSceneScript", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      __checkObsolete__(['_decorator', 'Button', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainSceneScript", MainSceneScript = (_dec = ccclass('MainSceneScript'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec(_class = (_class2 = class MainSceneScript extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnRewarded", _descriptor, this);

          _initializerDefineProperty(this, "btnInter", _descriptor2, this);

          _initializerDefineProperty(this, "btnBanner", _descriptor3, this);

          _initializerDefineProperty(this, "btnNative", _descriptor4, this);

          _initializerDefineProperty(this, "btnSplash", _descriptor5, this);

          this.isBannerShow = true;
          this.TAG = "anythink++++++++++ ";
          this.SplashAdListener = {
            onSplashAdLoaded: placementId => {
              console.log("onSplashAdLoaded", placementId);
              this.setAdStatusText(this.btnSplash, "Ad is loaded");
              (_crd && ATSplashSDK === void 0 ? (_reportPossibleCrUseOfATSplashSDK({
                error: Error()
              }), ATSplashSDK) : ATSplashSDK).showAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).SplashPlacementId);
            },
            onSplashAdLoadFail: (placementId, errorInfo) => {
              console.log("onSplashAdLoadFail", placementId, errorInfo);
              this.setAdStatusText(this.btnSplash, "Load failed");
            },
            onSplashAdShow: (placementId, callbackInfo) => {
              console.log("onSplashAdShow", placementId, callbackInfo);
            },
            onSplashAdClick: (placementId, callbackInfo) => {
              console.log("onSplashAdClick", placementId, callbackInfo);
            },
            onSplashAdClose: placementId => {
              console.log("onSplashAdClose", placementId);
            }
          };
          this.NativeAdListener = {
            onNativeAdLoaded: placementId => {
              console.log("onNativeAdLoaded", placementId);
              this.setAdStatusText(this.btnNative, "Ad is loaded");
            },
            onNativeAdLoadFail: (placementId, errorInfo) => {
              console.log("onNativeAdLoadFail", placementId, errorInfo);
              this.setAdStatusText(this.btnNative, "Load failed");
            },
            onNativeAdShow: (placementId, callbackInfo) => {
              console.log("onNativeAdShow", placementId, callbackInfo);
            },
            onNativeAdClick: (placementId, callbackInfo) => {
              console.log("onNativeAdClick", placementId, callbackInfo);
            },
            onNativeAdVideoStart: placementId => {
              console.log("onNativeAdVideoStart", placementId);
            },
            onNativeAdVideoEnd: placementId => {
              console.log("onNativeAdVideoEnd", placementId);
            },
            onNativeAdCloseButtonTapped: (placementId, callbackInfo) => {
              console.log("onNativeAdCloseButtonTapped", placementId, callbackInfo);
              (_crd && ATNativeSDK === void 0 ? (_reportPossibleCrUseOfATNativeSDK({
                error: Error()
              }), ATNativeSDK) : ATNativeSDK).removeAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).NativePlacementId);
            }
          };
          this.BannerAdListener = {
            onBannerAdLoaded: placementId => {
              console.log("onBannerAdLoaded", placementId);
              this.setAdStatusText(this.btnBanner, "Ad is loaded");
            },
            onBannerAdLoadFail: (placementId, errorInfo) => {
              console.log("onBannerAdLoadFail", placementId, errorInfo);
              this.setAdStatusText(this.btnBanner, "Load failed");
            },
            onBannerAdShow: (placementId, callbackInfo) => {
              console.log("onBannerAdShow", placementId, callbackInfo);
            },
            onBannerAdClick: (placementId, callbackInfo) => {
              console.log("onBannerAdClick", placementId, callbackInfo);
            },
            onBannerAdAutoRefresh: (placementId, callbackInfo) => {
              console.log("onBannerAdAutoRefresh", placementId, callbackInfo);
            },
            onBannerAdAutoRefreshFail: (placementId, errorInfo) => {
              console.log("onBannerAdAutoRefreshFail", placementId, errorInfo);
            },
            onBannerAdCloseButtonTapped: (placementId, callbackInfo) => {
              console.log("onBannerAdCloseButtonTapped", placementId, callbackInfo);
            }
          };
          this.RewardedVideoListener = {
            onRewardedVideoAdLoaded: placementId => {
              console.log("onRewardedVideoAdLoaded", placementId);
              this.setAdStatusText(this.btnRewarded, "Ad is loaded");
            },
            onRewardedVideoAdFailed: (placementId, errorInfo) => {
              console.log("onRewardedVideoAdFailed", placementId, errorInfo);
              this.setAdStatusText(this.btnRewarded, "Load failed");
            },
            onRewardedVideoAdPlayStart: (placementId, callbackInfo) => {
              console.log("onRewardedVideoAdPlayStart", placementId, callbackInfo);
            },
            onRewardedVideoAdPlayEnd: (placementId, callbackInfo) => {
              console.log("onRewardedVideoAdPlayEnd", placementId, callbackInfo);
            },
            onRewardedVideoAdPlayFailed: (placementId, errorInfo, callbackInfo) => {
              console.log("onRewardedVideoAdPlayFailed", placementId, callbackInfo, errorInfo);
            },
            onRewardedVideoAdClosed: (placementId, callbackInfo) => {
              console.log("onRewardedVideoAdClosed", placementId, callbackInfo);
            },
            onRewardedVideoAdPlayClicked: (placementId, callbackInfo) => {
              console.log("onRewardedVideoAdPlayClicked", placementId);
            },
            onReward: (placementId, callbackInfo) => {
              console.log("onReward", placementId, callbackInfo);
            }
          };
          this.InterstitialListener = {
            onInterstitialAdLoaded: placementId => {
              console.log("onInterstitialAdLoaded", placementId);
              this.setAdStatusText(this.btnInter, "Ad is loaded");
            },
            onInterstitialAdLoadFail: (placementId, errorInfo) => {
              console.log("onInterstitialAdLoadFail", placementId, errorInfo);
              this.setAdStatusText(this.btnInter, "Load failed");
            },
            onInterstitialAdShow: (placementId, callbackInfo) => {
              console.log("onInterstitialAdShow", placementId, callbackInfo);
            },
            onInterstitialAdStartPlayingVideo: (placementId, callbackInfo) => {
              console.log("onInterstitialAdStartPlayingVideo", placementId, callbackInfo);
            },
            onInterstitialAdEndPlayingVideo: (placementId, callbackInfo) => {
              console.log("onInterstitialAdEndPlayingVideo", placementId, callbackInfo);
            },
            onInterstitialAdFailedToPlayVideo: (placementId, errorInfo) => {
              console.log("onInterstitialAdFailedToPlayVideo", placementId, errorInfo);
            },
            onInterstitialAdFailedToShow: (placementId, errorInfo, callbackInfo) => {
              console.log("onInterstitialAdFailedToShow", placementId, callbackInfo, errorInfo);
            },
            onInterstitialAdClose: (placementId, callbackInfo) => {
              console.log("onInterstitialAdClose", placementId, callbackInfo);
            },
            onInterstitialAdClick: (placementId, callbackInfo) => {
              console.log("onInterstitialAdClick", placementId, callbackInfo);
            }
          };

          this.initListener = () => {
            (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).setAdListener(this.BannerAdListener);
            (_crd && ATNativeSDK === void 0 ? (_reportPossibleCrUseOfATNativeSDK({
              error: Error()
            }), ATNativeSDK) : ATNativeSDK).setAdListener(this.NativeAdListener);
            (_crd && ATRewardedVideoSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoSDK({
              error: Error()
            }), ATRewardedVideoSDK) : ATRewardedVideoSDK).setAdListener(this.RewardedVideoListener);
            (_crd && ATInterstitialSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialSDK({
              error: Error()
            }), ATInterstitialSDK) : ATInterstitialSDK).setAdListener(this.InterstitialListener);
            (_crd && ATSplashSDK === void 0 ? (_reportPossibleCrUseOfATSplashSDK({
              error: Error()
            }), ATSplashSDK) : ATSplashSDK).setAdListener(this.SplashAdListener);
          };
        }

        start() {
          (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).init();
          this.initSDK();
          this.initListener();
          this.initAD();
        }

        showRewardedAd() {
          (_crd && ATRewardedVideoSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoSDK({
            error: Error()
          }), ATRewardedVideoSDK) : ATRewardedVideoSDK).entryAdScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).RewardedPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).YourScenarioId);

          if ((_crd && ATRewardedVideoSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoSDK({
            error: Error()
          }), ATRewardedVideoSDK) : ATRewardedVideoSDK).hasAdReady((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).RewardedPlacementId)) {
            (_crd && ATRewardedVideoSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoSDK({
              error: Error()
            }), ATRewardedVideoSDK) : ATRewardedVideoSDK).showAdInScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).RewardedPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).YourScenarioId);
          } else {
            (_crd && ATRewardedVideoSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoSDK({
              error: Error()
            }), ATRewardedVideoSDK) : ATRewardedVideoSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).RewardedPlacementId);
            this.setAdStatusText(this.btnRewarded, "Ad is loading...");
          }
        }

        showInterstitialAd() {
          (_crd && ATInterstitialSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialSDK({
            error: Error()
          }), ATInterstitialSDK) : ATInterstitialSDK).entryAdScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).InterPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).YourScenarioId);

          if ((_crd && ATInterstitialSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialSDK({
            error: Error()
          }), ATInterstitialSDK) : ATInterstitialSDK).hasAdReady((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).InterPlacementId)) {
            (_crd && ATInterstitialSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialSDK({
              error: Error()
            }), ATInterstitialSDK) : ATInterstitialSDK).showAdInScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).InterPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).YourScenarioId);
          } else {
            (_crd && ATInterstitialSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialSDK({
              error: Error()
            }), ATInterstitialSDK) : ATInterstitialSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).InterPlacementId);
            this.setAdStatusText(this.btnInter, "Ad is loading...");
          }
        }

        showBannerAd() {
          var label = this.btnBanner.node.getChildByName("Label").getComponent(cc.Label);
          (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
            error: Error()
          }), ATBannerSDK) : ATBannerSDK).entryAdScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BannerPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).YourScenarioId);

          if (this.isBannerShow && (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
            error: Error()
          }), ATBannerSDK) : ATBannerSDK).hasAdReady((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BannerPlacementId)) {
            (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).showAdInPositionAndScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BannerPlacementId, (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).kATBannerAdShowingPositionBottom, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).YourScenarioId);
            this.isBannerShow = false;
            label.string = "Remove Banner Ad";
          } else {
            this.isBannerShow = true;
            label.string = "Show Banner Ad";
            (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).removeAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BannerPlacementId);
            var setting = {};
            setting[(_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).kATBannerAdLoadingExtraBannerAdSizeStruct] = (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).createLoadAdSize(cc.screen.windowSize.width, 300);
            setting[(_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).kATBannerAdAdaptiveWidth] = cc.screen.windowSize.width;
            setting[(_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).kATBannerAdAdaptiveOrientation] = (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).kATBannerAdAdaptiveOrientationPortrait;
            (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
              error: Error()
            }), ATBannerSDK) : ATBannerSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BannerPlacementId, setting);
            this.setAdStatusText(this.btnBanner, "Ad is loading...");
          }
        }

        showNativeAd() {
          (_crd && ATNativeSDK === void 0 ? (_reportPossibleCrUseOfATNativeSDK({
            error: Error()
          }), ATNativeSDK) : ATNativeSDK).entryAdScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).NativePlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).YourScenarioId);

          if ((_crd && ATNativeSDK === void 0 ? (_reportPossibleCrUseOfATNativeSDK({
            error: Error()
          }), ATNativeSDK) : ATNativeSDK).hasAdReady((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).NativePlacementId)) {
            var windowSize = cc.screen.windowSize;
            var windowWidth = windowSize.width;
            var windowHeight = windowSize.height;
            var padding = windowSize.width / 35;
            var parentWidth = windowWidth;
            var parentHeight = windowWidth * 4 / 5;
            var appIconSize = windowWidth / 7;
            var nativeAdViewProperty = new (_crd && AdViewProperty === void 0 ? (_reportPossibleCrUseOfAdViewProperty({
              error: Error()
            }), AdViewProperty) : AdViewProperty)();
            nativeAdViewProperty.parent = nativeAdViewProperty.createItemViewProperty(0, windowHeight - parentHeight, parentWidth, parentHeight, "#ffffff", "", 0);
            nativeAdViewProperty.appIcon = nativeAdViewProperty.createItemViewProperty(0, parentHeight - appIconSize, appIconSize, appIconSize, "", "", 0);
            nativeAdViewProperty.cta = nativeAdViewProperty.createItemViewProperty(parentWidth - appIconSize * 2, parentHeight - appIconSize, appIconSize * 2, appIconSize, "#2095F1", "#ffffff", appIconSize / 3);
            nativeAdViewProperty.mainImage = nativeAdViewProperty.createItemViewProperty(padding, padding, parentWidth - 2 * padding, parentHeight - appIconSize - 2 * padding, "#ffffff", "#ffffff", 14);
            nativeAdViewProperty.title = nativeAdViewProperty.createItemViewProperty(appIconSize + padding, parentHeight - appIconSize, parentWidth - 3 * appIconSize - 2 * padding, appIconSize / 2, "", "#000000", appIconSize / 3);
            nativeAdViewProperty.desc = nativeAdViewProperty.createItemViewProperty(appIconSize + padding, parentHeight - appIconSize / 2, parentWidth - 3 * appIconSize - 2 * padding, appIconSize / 2, "#ffffff", "#000000", appIconSize / 4); // nativeAdViewProperty.adLogo = nativeAdViewProperty.createItemViewProperty(0,0,0,0,"#ffffff","#ffffff",14);
            // nativeAdViewProperty.rating = nativeAdViewProperty.createItemViewProperty(0,0,0,0,"#ffffff","#ffffff",14);

            nativeAdViewProperty.dislike = nativeAdViewProperty.createItemViewProperty(parentWidth - appIconSize / 2, 0, appIconSize / 2, appIconSize / 2, "#00ffffff", "#ffffff", 14);
            nativeAdViewProperty.elements = nativeAdViewProperty.createItemViewProperty(0, parentHeight - appIconSize / 2, parentWidth, appIconSize / 2, "#7f000000", "#ffffff", 14);
            (_crd && ATNativeSDK === void 0 ? (_reportPossibleCrUseOfATNativeSDK({
              error: Error()
            }), ATNativeSDK) : ATNativeSDK).showAdInScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).NativePlacementId, nativeAdViewProperty, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).YourScenarioId);
          } else {
            (_crd && ATNativeSDK === void 0 ? (_reportPossibleCrUseOfATNativeSDK({
              error: Error()
            }), ATNativeSDK) : ATNativeSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).NativePlacementId);
            this.setAdStatusText(this.btnNative, "Ad is loading...");
          }
        }

        showSplashAd() {
          (_crd && ATSplashSDK === void 0 ? (_reportPossibleCrUseOfATSplashSDK({
            error: Error()
          }), ATSplashSDK) : ATSplashSDK).entryAdScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SplashPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).YourScenarioId);

          if ((_crd && ATSplashSDK === void 0 ? (_reportPossibleCrUseOfATSplashSDK({
            error: Error()
          }), ATSplashSDK) : ATSplashSDK).hasAdReady((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SplashPlacementId)) {
            (_crd && ATSplashSDK === void 0 ? (_reportPossibleCrUseOfATSplashSDK({
              error: Error()
            }), ATSplashSDK) : ATSplashSDK).showAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).SplashPlacementId);
          } else {
            (_crd && ATSplashSDK === void 0 ? (_reportPossibleCrUseOfATSplashSDK({
              error: Error()
            }), ATSplashSDK) : ATSplashSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).SplashPlacementId);
            this.setAdStatusText(this.btnSplash, "Ad is loading...");
          }
        }

        showDebuggerUI() {
          (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
            error: Error()
          }), ATSDK) : ATSDK).showDebuggerUI("");
        }

        gotoAutoLoad() {
          cc.director.loadScene("AutoLoadAds");
        }

        initSDK() {
          (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
            error: Error()
          }), ATSDK) : ATSDK).setChannel("Cocos_test_channel");
          (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
            error: Error()
          }), ATSDK) : ATSDK).setSubChannel("Cocos_test_subChannel");
          var customMap = {
            "appCustomKey1": "appCustomValue1",
            "appCustomKey2": "appCustomValue2"
          };
          (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
            error: Error()
          }), ATSDK) : ATSDK).initCustomMap(customMap);
          var customPlacementId = "";
          var placementCustomMap = {
            "placementCustomKey1": "placementCustomValue1",
            "placementCustomKey2": "placementCustomValue2"
          };
          (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
            error: Error()
          }), ATSDK) : ATSDK).setPlacementCustomMap(customPlacementId, placementCustomMap);
          (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
            error: Error()
          }), ATSDK) : ATSDK).setLogDebug(true); // ----------------------- GDPR start------------------------------

          /*ATSDK.getUserLocation(function (userLocation: string | number) {
               if (userLocation === ATSDK.kATUserLocationInEU) {
                  if (ATSDK.getGDPRLevel() === ATSDK.UNKNOWN) {
                      ATSDK.showGDPRConsent(function () {
                          console.log("initSDK:  " + Constant.APPID + "     " + Constant.APPKEY);
                          ATSDK.initSDK(Constant.APPID, Constant.APPKEY);
                      });
                  }
              }
          });*/
          // ----------------------- GDPR end------------------------------

          console.log("initSDK:  " + (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).APPID + "     " + (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).APPKEY);
          (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
            error: Error()
          }), ATSDK) : ATSDK).initSDK((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).APPID, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).APPKEY);
        }

        initAD() {
          (_crd && ATInterstitialSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialSDK({
            error: Error()
          }), ATInterstitialSDK) : ATInterstitialSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).InterPlacementId);
          var setting = {};
          setting[(_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
            error: Error()
          }), ATBannerSDK) : ATBannerSDK).kATBannerAdLoadingExtraBannerAdSizeStruct] = (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
            error: Error()
          }), ATBannerSDK) : ATBannerSDK).createLoadAdSize(cc.screen.windowSize.width, 300);
          setting[(_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
            error: Error()
          }), ATBannerSDK) : ATBannerSDK).kATBannerAdAdaptiveWidth] = cc.screen.windowSize.width;
          setting[(_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
            error: Error()
          }), ATBannerSDK) : ATBannerSDK).kATBannerAdAdaptiveOrientation] = (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
            error: Error()
          }), ATBannerSDK) : ATBannerSDK).kATBannerAdAdaptiveOrientationPortrait;
          (_crd && ATBannerSDK === void 0 ? (_reportPossibleCrUseOfATBannerSDK({
            error: Error()
          }), ATBannerSDK) : ATBannerSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BannerPlacementId, setting);
          (_crd && ATRewardedVideoSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoSDK({
            error: Error()
          }), ATRewardedVideoSDK) : ATRewardedVideoSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).RewardedPlacementId); // 加载原生广告时需要传入广告展示的宽高
          // 特别说明：如果是原生模板广告，传入的size跟后面展示的 nativeAdViewProperty.parent = size最好要一致，不然可能出现裁剪或显示不全的问题。

          (_crd && ATNativeSDK === void 0 ? (_reportPossibleCrUseOfATNativeSDK({
            error: Error()
          }), ATNativeSDK) : ATNativeSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).NativePlacementId, (_crd && ATNativeSDK === void 0 ? (_reportPossibleCrUseOfATNativeSDK({
            error: Error()
          }), ATNativeSDK) : ATNativeSDK).createLoadAdSize(cc.screen.windowSize.width, cc.screen.windowSize.width * 4 / 5));
          (_crd && ATSplashSDK === void 0 ? (_reportPossibleCrUseOfATSplashSDK({
            error: Error()
          }), ATSplashSDK) : ATSplashSDK).loadAd((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SplashPlacementId);
        }

        setAdStatusText(btn, text) {
          var label = btn.node.getChildByName("Label-status").getComponent(cc.Label);

          if (label) {
            label.string = text;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnRewarded", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnInter", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnBanner", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnNative", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnSplash", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d084d9d41815bc87879e793c5f4bd0cbcb8ca92d.js.map