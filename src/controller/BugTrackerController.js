const bugTrackSerevice = require("../service/BugTrackService");

module.exports = {

    loadForm(request, response) {
        const notification = (request.query.notification || null );
        const typeNotification = (request.query.typeNotification || null );
        response.render("bugTrack.ejs", { notification, typeNotification })
    },

    async reportBug(request, response) {
        try {
            const newBug = request.body;
            await bugTrackSerevice.report(newBug);
            return response.redirect("/?notification=Bug report with success!&typeNotification=success");
        } catch(error) {
            return response.redirect("/?notification=Occour some error! Can't complete operation.&typeNotification=danger");
        }
    }
}