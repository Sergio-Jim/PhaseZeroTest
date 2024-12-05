
(function ($) {

    "use strict";

    $('.slick-slideshow').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        fade: true,
    });

    $('.slick-testimonial').slick({
        arrows: false,
    });

    $(document).ready(function () {
        // Array of content, button actions, logo images, titles, and AJAX file paths
        const data = [
            {
                buttonAction: () => console.log("A"),
                logo: "./images/icons/location.svg",
                title: "Location",
                content: "Welcome to our ice cream shop! Come take a tour.",
                ajaxFile: "./ajaxhtml/ajaxlocations.html" // Updated to an HTML file
            },
            {
                buttonAction: () => console.log("B"),
                logo: "./images/icons/times.svg",
                title: "Schedule",
                content: "Visit us at any of the times below",
                ajaxFile: "./ajaxhtml/ajaxtime.html" // Updated to an HTML file
            },
            {
                buttonAction: () => console.log("C"),
                logo: "./images/icons/ice-cream-chocolate.svg",
                title: "Flavors Galore",
                content: "Enjoy a variety of flavors tailored to your taste.",
                ajaxFile: "./ajaxhtml/ajaxflavors.html" // Updated to an HTML file
            }
        ];

        let currentIndex = 0;

        // Function to update the main walkthrough content
        function updateContent() {
            const currentData = data[currentIndex];
            $(".text-section .content").text(currentData.content); // Update paragraph text
            $(".logo").attr("src", currentData.logo); // Update logo
            $(".title").text(currentData.title); // Update title
            $(".dot").removeClass("active"); // Update active dot
            $(".dot").eq(currentIndex).addClass("active");

            // Update button action
            $(".more-button").off("click").on("click", function () {
                loadAjaxContent(currentData.ajaxFile); // Load content from file
                currentData.buttonAction(); // Execute button-specific action
            });
        }

        // Function to load AJAX content from an HTML file
        function loadAjaxContent(filePath) {
            $.ajax({
                url: filePath,
                method: "GET",
                cache: false, // Disable caching
                dataType: "html", // Indicate we are loading HTML content
                success: function (response) {
                    // Only update the dynamic part of the content
                    $(".ajax-content").find(".dynamic-content").html(response);
                    $(".ajax-content-section").fadeIn(); // Show the content section
                },
                error: function () {
                    $(".ajax-content").find(".dynamic-content").html("<p>Failed to load content. Please try again later.</p>");
                    $(".ajax-content-section").fadeIn();
                }
            });
        }

        // Close button click event for AJAX content
        $(".close-button").click(function () {
            $(".ajax-content-section").fadeOut(); // Hide the content section
        });

        // Navigation event handlers
        $(".right-arrow").click(function () {
            if (currentIndex < data.length - 1) {
                currentIndex++;
                updateContent();
            }
        });

        $(".left-arrow").click(function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateContent();
            }
        });

        // Initialize the walkthrough with the first content
        updateContent();
    });


})(window.jQuery);
