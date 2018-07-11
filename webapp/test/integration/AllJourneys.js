/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/hettich/dit/tutorial/worklistAppOdata/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/hettich/dit/tutorial/worklistAppOdata/test/integration/pages/Worklist",
	"com/hettich/dit/tutorial/worklistAppOdata/test/integration/pages/Object",
	"com/hettich/dit/tutorial/worklistAppOdata/test/integration/pages/NotFound",
	"com/hettich/dit/tutorial/worklistAppOdata/test/integration/pages/Browser",
	"com/hettich/dit/tutorial/worklistAppOdata/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.hettich.dit.tutorial.worklistAppOdata.view."
	});

	sap.ui.require([
		"com/hettich/dit/tutorial/worklistAppOdata/test/integration/WorklistJourney",
		"com/hettich/dit/tutorial/worklistAppOdata/test/integration/ObjectJourney",
		"com/hettich/dit/tutorial/worklistAppOdata/test/integration/NavigationJourney",
		"com/hettich/dit/tutorial/worklistAppOdata/test/integration/NotFoundJourney",
		"com/hettich/dit/tutorial/worklistAppOdata/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});