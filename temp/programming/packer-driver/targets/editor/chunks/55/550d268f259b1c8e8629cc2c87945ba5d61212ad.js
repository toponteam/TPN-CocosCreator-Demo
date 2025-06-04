System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATRewardedVideoAutoAdSDK, ATInterstitialAutoAdSDK, Constant, _cc, _decorator, Button, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, cc, ccclass, property, AutoLoadAdsSceneScript;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfATRewardedVideoAutoAdSDK(extras) {
    _reporterNs.report("ATRewardedVideoAutoAdSDK", "db://assets/script/AnyThinkAds/ATRewardedAutoVideo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATInterstitialAutoAdSDK(extras) {
    _reporterNs.report("ATInterstitialAutoAdSDK", "db://assets/script/AnyThinkAds/ATInterstitialAuto", _context.meta, extras);
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
      ATRewardedVideoAutoAdSDK = _unresolved_2.ATRewardedVideoAutoAdSDK;
    }, function (_unresolved_3) {
      ATInterstitialAutoAdSDK = _unresolved_3.ATInterstitialAutoAdSDK;
    }, function (_unresolved_4) {
      Constant = _unresolved_4.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5f57ABjABHE4DZDsMjnxkP", "AutoLoadAdsSceneScript", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      __checkObsolete__(['_decorator', 'Button', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoLoadAdsSceneScript", AutoLoadAdsSceneScript = (_dec = ccclass('AutoLoadAdsSceneScript'), _dec2 = property(Button), _dec3 = property(Button), _dec(_class = (_class2 = class AutoLoadAdsSceneScript extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnRewarded", _descriptor, this);

          _initializerDefineProperty(this, "btnInter", _descriptor2, this);

          this.TAG = "anythink++++++++++ ";
          this.AutoRewardedVideoListener = {
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
          this.AutoInterstitialListener = {
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
        }

        start() {
          console.log("auto start");
          this.initListener();
          this.loadAd();
        }

        gotoMain() {
          this.onDestroy();
          cc.director.loadScene("Main");
        }

        onDestroy() {
          (_crd && ATRewardedVideoAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoAutoAdSDK({
            error: Error()
          }), ATRewardedVideoAutoAdSDK) : ATRewardedVideoAutoAdSDK).removePlacementId((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).AutoRewardedPlacementId);
          (_crd && ATInterstitialAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialAutoAdSDK({
            error: Error()
          }), ATInterstitialAutoAdSDK) : ATInterstitialAutoAdSDK).removePlacementId((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).AutoInterPlacementId);
        }

        showAutoRewardedAds() {
          (_crd && ATRewardedVideoAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoAutoAdSDK({
            error: Error()
          }), ATRewardedVideoAutoAdSDK) : ATRewardedVideoAutoAdSDK).entryAdScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).AutoRewardedPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).YourScenarioId);

          if ((_crd && ATRewardedVideoAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoAutoAdSDK({
            error: Error()
          }), ATRewardedVideoAutoAdSDK) : ATRewardedVideoAutoAdSDK).hasAdReady((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).AutoRewardedPlacementId)) {
            (_crd && ATRewardedVideoAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoAutoAdSDK({
              error: Error()
            }), ATRewardedVideoAutoAdSDK) : ATRewardedVideoAutoAdSDK).showAdInScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).AutoRewardedPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).YourScenarioId);
          }
        }

        showAutoInterstitialAds() {
          (_crd && ATInterstitialAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialAutoAdSDK({
            error: Error()
          }), ATInterstitialAutoAdSDK) : ATInterstitialAutoAdSDK).entryAdScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).AutoInterPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).YourScenarioId);

          if ((_crd && ATInterstitialAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialAutoAdSDK({
            error: Error()
          }), ATInterstitialAutoAdSDK) : ATInterstitialAutoAdSDK).hasAdReady((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).AutoInterPlacementId)) {
            (_crd && ATInterstitialAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialAutoAdSDK({
              error: Error()
            }), ATInterstitialAutoAdSDK) : ATInterstitialAutoAdSDK).showAdInScenario((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).AutoInterPlacementId, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).YourScenarioId);
          }
        }

        initListener() {
          console.log("auto initListener");
          (_crd && ATRewardedVideoAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoAutoAdSDK({
            error: Error()
          }), ATRewardedVideoAutoAdSDK) : ATRewardedVideoAutoAdSDK).setAdListener(this.AutoRewardedVideoListener);
          (_crd && ATInterstitialAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialAutoAdSDK({
            error: Error()
          }), ATInterstitialAutoAdSDK) : ATInterstitialAutoAdSDK).setAdListener(this.AutoInterstitialListener);
        }

        loadAd() {
          console.log("auto loadAd");
          let rewardedIds = [(_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).AutoRewardedPlacementId];
          let InterstitialIds = [(_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).AutoInterPlacementId];
          (_crd && ATRewardedVideoAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATRewardedVideoAutoAdSDK({
            error: Error()
          }), ATRewardedVideoAutoAdSDK) : ATRewardedVideoAutoAdSDK).addPlacementIds(rewardedIds);
          (_crd && ATInterstitialAutoAdSDK === void 0 ? (_reportPossibleCrUseOfATInterstitialAutoAdSDK({
            error: Error()
          }), ATInterstitialAutoAdSDK) : ATInterstitialAutoAdSDK).addPlacementIds(InterstitialIds);
        }

        setAdStatusText(btn, text) {
          let label = btn.node.getChildByName("Label-status").getComponent(cc.Label);

          if (label) {
            label.string = text;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnRewarded", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnInter", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=550d268f259b1c8e8629cc2c87945ba5d61212ad.js.map