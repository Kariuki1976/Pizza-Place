//Form validation

$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#subject").val();
        if (name && email) {
            alert(name + ", we have received your message. Thank you for shopping with us. We shall get back soon");
        } else {
            alert("Please enter your name and email!");
        }

    });

});
//functionality



var price, crust_price, topping_price;
let total = 0;

function getPizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}


// order btn
$(document).ready(function(submit()) {
    $("button#btn").click(function(event) {
        let pname = $("name").val();
        let psize = $("#size").val();
        let pcrust = $("#crust").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function() {
            ptopping.push($(this).val());
        });


        switch (psize) {
            case "0":
                price = 0;
                break;
            case "large":
                price = 1500;

                break;
            case "medium":
                price = 900;

                break;
            case "small":
                price = 700;

            default:

        }
        switch (pcrust) {
            case "0":
                crust_price = 0;
                break;
            case "Crispy":
                crust_price = 200;
                break;
            case "Stuffed":
                crust_price = 150;
                break;
            case "Gluten-free":
                crust_price = 200;
                break;
            default:

        }
        let topping_value = ptopping.length * 50;


        if ((psize == "0") && (pcrust == "0")) {
            $("#btn").show();
            $("#information").show();
            $("div.choise").hide();
            alert("Please select pizza size and crust");
        } else {
            $("#add").show();
            $("#check").show();
            $(".detail").hide();
            $("#orders.choice").show();
            $("#orders").show();
        }

        total = price + crust_price + topping_value;
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzaname").html($("#name option:selected").val());
        $("#pizzasize").html($("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatopping").html(ptopping.join(", "));
        $("#total").html(total);

        // pizza
        $("#add").click(function() {
            let pname = $(".name option:selected").val();
            let psize = $("#size option:selected").val();
            let pcrust = $("#crust option:selected").val();
            let ptopping = [];
            $.each($("input[name='toppings']:checked"), function() {
                ptopping.push($(this).val());
            });

            switch (psize) {
                case "0":
                    price = 0;
                    break;
                case "large":
                    price = 1500;

                    break;
                case "medium":
                    price = 900;

                    break;
                case "small":
                    price = 700;

                default:

            }
            switch (pcrust) {
                case "0":
                    crust_price = 0;
                    break;
                case "Crispy":
                    crust_price = 250;
                    break;
                case "Stuffed":
                    crust_price = 150;
                    break;
                case "Gluten-free":
                    crust_price = 200;
                    break;
                default:

            }
            let topping_value = ptopping.length * 50;
            total = price + crust_price + topping_value;

            checkoutTotal = checkoutTotal + total;

            // function
            var newOrder = new getPizza(pname, psize, pcrust, ptopping, total);

            $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');

        });
        // Check btn
        $("button#check").click(function() {
            $("button#check").hide();
            $("button#add").hide();
            $("button.delivery").show();
            $("#delivery").slideDown(1000);
            $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
        });

        // delivery btn
        $("button#delivery").click(function() {
            $("#piz").hide();
            $("#orders .h5").hide();
            $(".delivery").slideDown(1000);
            $("#addedprice").hide();
            $("button#deliver").hide();
            $("#pizzatotal").hide();
            $("#delivery").hide();
            let deliceryamount = checkoutTotal + 150;
            $("#totalbill").append("Your bill plus delivery fee is: " + deliceryamount);
        });

        // submit btn
        $("button#sub").click(function(event) {
            event.preventDefault();

            $("#pizzatotal").hide();
            $("#delivery").hide();
            $("button#sub").hide();
            $(".delivery").hide();
            let deliceryamount = checkoutTotal + 150;
            let person = $("input#name").val();
            let phone = $("input#phone").val();
            let location = $("input#location").val();

            if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

                $("#finalmessage").append(person + ", We have received your order and it will be delivered to you at " + location + ". Prepare sh. " + deliceryamount);
                $("#totalbill").hide();
                $("#finalmessage").slideDown(1200);
            } else {
                alert("Please fill in the details for delivery!");
                $(".delivery").show();
                $("button#delivery").show();
            }
        });
        event.preventDefault();
    });
});