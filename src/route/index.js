const bugTrackController = require("../controller/BugTrackerController");


module.exports = (app) => {

    /**
     * @description Route render form of bug.
     */
    app.get("/", bugTrackController.loadForm);

    /**
     * Route report bug.
     */
    app.post("/report-bug", bugTrackController.reportBug);
} 