const GoogleSpreadSheet = require("google-spreadsheet");
const ID_SPREAD_SHEET = process.env.ID_SPREAD_SHEET;

module.exports = {

    /**
     * @param {object} credentials 
     */
    authenticate(credentials) {
        const document = new GoogleSpreadSheet(ID_SPREAD_SHEET);
        return new Promise((resolve, reject) => {
            document.useServiceAccountAuth(credentials, (error) => {
                if (error) reject(error);
                resolve(document);
            });
        });
    },

    /**
     * @param {objet} document 
     */
    getWorkSheet(document) {
        return new Promise((resolve, reject) => {
            document.getInfo(function (error, info) {
                if (error) return reject(error);
                resolve(info.worksheets[0]);
            });  
        });
    },

    /**
     * @param {object} worksheet 
     * @param {object} newRow 
     */
    addRow(worksheet, newRow) {
        return new Promise((resolve, reject) => {
            worksheet.addRow(newRow, (error) => {
                if (error) reject(err);
                resolve();
            });
        });
    }
}