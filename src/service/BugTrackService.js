const GoogleSpreadSheet = require("./../googleSpreadSheet/GoogleSpreadSheet");
const Email = require("./../email/Email");
const credentials = require("../../bug-tracker.json");

module.exports = {

    async report(newBug) {
        const {
            name, email, classification, how_generate_error,
            output_waited, output_receiped
        } = newBug;

        const newRow = {
            nome: name,
            email,
            classificacao: classification,
            como_reproduzir_erro: how_generate_error,
            saida_esperada: output_waited,
            saida_recebida: output_receiped
        };

        const document = await GoogleSpreadSheet.authenticate(credentials);
        const worksheet = await GoogleSpreadSheet.getWorkSheet(document);
        await GoogleSpreadSheet.addRow(worksheet, newRow);

        $isTriggerNotificationEmail = newRow.classificacao == "Urgente";
        if ($isTriggerNotificationEmail) {
            return new Email()
                .withTo(process.env.EMAIL_FROM)
                .withHtml("Exist bug with classification Urgent!")
                .withSubject("Bug Urgent!")
                .send();
        }
    }
}