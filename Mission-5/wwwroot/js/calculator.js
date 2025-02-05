$(document).ready(function () {
    console.log("calculator.js is connected!"); // Debugging message

    $("#calculate").click(function () {
        console.log("Calculate button clicked!");

        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());

        console.log("User Input - Hours:", hours); // Debugging message
        console.log("Hourly Rate:", rate); // Debugging message

        if (isNaN(hours) || hours <= 0) {
            console.log("Invalid input detected.");
            $("#error").show();
            $("#hours").addClass("is-invalid"); // Adds red border on invalid input
            $("#total").text("$0").removeClass("text-success").addClass("text-danger");
        } else {
            $("#error").hide();
            $("#hours").removeClass("is-invalid"); // Removes red highlight when fixed
            let total = hours * rate;
            $("#total").text("$" + total.toFixed(2)).removeClass("text-danger").addClass("text-success");
            console.log("Total Cost Calculated:", total);
        }
    });

    // Remove error message when user starts typing
    $("#hours").on("input", function () {
        $("#error").hide();
        $("#hours").removeClass("is-invalid");
        console.log("User is entering a new value.");
    });
});
