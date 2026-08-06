/*!
 * @intercom/messenger-js-sdk — browser bundle (manually built from dist files)
 * Exposes `window.Intercom` (init fn) + `window.Intercom.boot|update|hide|show|...` methods.
 * Build: when Node is available run `npm run build` (esbuild).
 */
(function () {
  'use strict';

  // ---- constants.js ----
  var regionAPIs = new Map([
    ["us", "https://api-iam.intercom.io"],
    ["eu", "https://api-iam.eu.intercom.io"],
    ["ap", "https://api-iam.au.intercom.io"]
  ]);

  // ---- instance-manager.js ----
  var SCRIPT_ELEMENT_ID = "_intercom_npm_loader";
  var widgetScriptInserted = false;

  // Queue so callers (boot/update/show...) never lose commands while the widget loads.
  var queueHolder = function () {
    queueHolder.loaderQueue(arguments);
  };
  queueHolder.q = [];
  queueHolder.loaderQueue = function (args) {
    queueHolder.q.push(args);
  };

  var addWidgetToPage = function (widgetUrl) {
    var d = document;
    if (d.getElementById(SCRIPT_ELEMENT_ID)) {
      return; // script already in DOM
    }
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.id = SCRIPT_ELEMENT_ID;
    s.src = widgetUrl ||
      "https://widget.intercom.io/widget/" + (window.intercomSettings && window.intercomSettings.app_id);
    var x = d.getElementsByTagName("script")[0];
    if (x && x.parentNode) {
      x.parentNode.insertBefore(s, x);
    }
  };

  var isDocumentReady = function () {
    return document.readyState === "complete" || document.readyState === "interactive";
  };

  var init = function (config) {
    config = config || {};
    var w = window;
    if (w.intercomSettings) {
      w.intercomSettings.installation_type = "npm-package";
    }
    if (widgetScriptInserted) {
      // Widget script already queued — re-attach to preserve commands
      if (typeof w.Intercom === "function") {
        w.Intercom("reattach_activator");
        w.Intercom("update", w.intercomSettings);
      }
    } else {
      widgetScriptInserted = true;
      // Replace window.Intercom with the queueHolder so method calls
      // (boot/update/show...) are queued until the real widget loads.
      w.Intercom = queueHolder;
      if (isDocumentReady()) {
        addWidgetToPage(config.widgetUrl);
      } else {
        document.addEventListener("readystatechange", function () {
          if (isDocumentReady()) {
            addWidgetToPage(config.widgetUrl);
          }
        });
        if (w.attachEvent) {
          w.attachEvent("onload", function () { addWidgetToPage(config.widgetUrl); });
        } else {
          w.addEventListener("load", function () { addWidgetToPage(config.widgetUrl); }, false);
        }
      }
    }
  };

  // ---- index.js ----
  var callIntercomMethod = function (method) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (typeof window !== "undefined" && window.Intercom) {
      return window.Intercom.apply(window.Intercom, [method].concat(args));
    } else {
      console.warn("Please ensure Intercom is setup and running on client-side!");
    }
  };

  var hasBooted = false;

  // The public init: Intercom({ app_id, user_id, name, email, created_at, ... })
  var Intercom = function (props) {
    if (typeof props !== "object" || props === null) {
      console.warn("Intercom initialiser called with invalid parameters.");
      return;
    }

    var region = props.region; if (region === undefined) region = "us";
    var widgetUrl = props.widgetUrl;
    var args = {};
    Object.keys(props).forEach(function (k) {
      if (k !== "region" && k !== "widgetUrl") args[k] = props[k];
    });

    if (typeof window !== "undefined" && !hasBooted) {
      hasBooted = true;
      window.__softixIntercomBooted = true;
      window.intercomSettings = Object.assign({}, args, {
        api_base: regionAPIs.get(region)
      });
      init({ widgetUrl: widgetUrl });
    }
  };

  // Expose the init function as window.Intercom.
  // After the first Intercom({...}) boot call, init() replaces
  // window.Intercom with the queueHolder (and later the real widget API).
  window.Intercom = Intercom;

  // ---- Helper methods (mirror exports of the npm package) ----
  var boot = function (arg) { callIntercomMethod("boot", arg); };
  var shutdown = function () { callIntercomMethod("shutdown"); };
  var update = function (arg) { callIntercomMethod("update", arg); };
  var hide = function () { callIntercomMethod("hide"); };
  var show = function () { callIntercomMethod("show"); };
  var showSpace = function (spaceName) { callIntercomMethod("showSpace", spaceName); };
  var showMessages = function () { callIntercomMethod("showMessages"); };
  var showNewMessage = function (prePopulatedContent) { callIntercomMethod("showNewMessage", prePopulatedContent); };
  var onHide = function (callback) { callIntercomMethod("onHide", callback); };
  var onShow = function (callback) { callIntercomMethod("onShow", callback); };
  var onUnreadCountChange = function (callback) { callIntercomMethod("onUnreadCountChange", callback); };
  var trackEvent = function () { callIntercomMethod.apply(void 0, ["trackEvent"].concat([].slice.call(arguments))); };
  var getVisitorId = function () { return callIntercomMethod("getVisitorId"); };
  var whoami = function () { return callIntercomMethod("whoami"); };
  var startTour = function (tourId) { callIntercomMethod("startTour", tourId); };
  var showArticle = function (articleId) { callIntercomMethod("showArticle", articleId); };
  var showNews = function (newsItemId) { callIntercomMethod("showNews", newsItemId); };
  var startSurvey = function (surveyId) { callIntercomMethod("startSurvey", surveyId); };
  var startChecklist = function (checklistId) { callIntercomMethod("startChecklist", checklistId); };
  var showTicket = function (ticketId) { callIntercomMethod("showTicket", ticketId); };
  var showConversation = function (conversationId) { callIntercomMethod("showConversation", conversationId); };
  var onUserEmailSupplied = function (callback) { callIntercomMethod("onUserEmailSupplied", callback); };
  var hideNotifications = function (hidden) { callIntercomMethod("hideNotifications", hidden); };
  var startConversation = function (message) { callIntercomMethod("startConversation", message); };

  // Expose named helpers on window for convenience.
  window.SoftixIntercomSDK = {
    Intercom: Intercom,
    boot: boot,
    shutdown: shutdown,
    update: update,
    hide: hide,
    show: show,
    showSpace: showSpace,
    showMessages: showMessages,
    showNewMessage: showNewMessage,
    onHide: onHide,
    onShow: onShow,
    onUnreadCountChange: onUnreadCountChange,
    trackEvent: trackEvent,
    getVisitorId: getVisitorId,
    whoami: whoami,
    startTour: startTour,
    showArticle: showArticle,
    showNews: showNews,
    startSurvey: startSurvey,
    startChecklist: startChecklist,
    showTicket: showTicket,
    showConversation: showConversation,
    onUserEmailSupplied: onUserEmailSupplied,
    hideNotifications: hideNotifications,
    startConversation: startConversation
  };

  // Signal readiness so other scripts can react (e.g. for runtime user boot)
  if (typeof window.dispatchEvent === "function") {
    window.dispatchEvent(new CustomEvent("intercom:ready"));
  }
})();
