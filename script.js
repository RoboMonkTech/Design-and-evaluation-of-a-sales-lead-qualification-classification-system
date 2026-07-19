function predictLead() {

    let customer = document.getElementById("customer").value;
    let visits = parseInt(document.getElementById("visits").value);
    let time = parseInt(document.getElementById("time").value);
    let pages = parseInt(document.getElementById("pages").value);

    if (
        customer.trim() === "" ||
        isNaN(visits) ||
        isNaN(time) ||
        isNaN(pages)
    ) {
        alert("Please enter all customer details.");
        return;
    }

    let score = 0;

    if (visits >= 8) score++;
    if (time >= 15) score++;
    if (pages >= 5) score++;

    const emoji = document.getElementById("emoji");
    const result = document.getElementById("result");
    const confidence = document.getElementById("confidence");
    const status = document.getElementById("status");
    const recommendation = document.getElementById("recommendation");

    if (score >= 2) {

        emoji.innerHTML = "🟢";

        result.innerHTML = "QUALIFIED LEAD";
        result.style.color = "green";

        confidence.innerHTML = "Confidence : 96.48%";

        status.innerHTML = "Lead Status : Qualified";

        recommendation.innerHTML =
        "This customer has a high probability of conversion. The sales team should contact the lead immediately and prioritize follow-up.";

    }

    else {

        emoji.innerHTML = "🔴";

        result.innerHTML = "NOT QUALIFIED LEAD";
        result.style.color = "#d32f2f";

        confidence.innerHTML = "Confidence : 92.15%";

        status.innerHTML = "Lead Status : Not Qualified";

        recommendation.innerHTML =
        "This customer currently has a low probability of conversion. Continue nurturing the lead through email campaigns, offers, and future marketing activities.";

    }

}
