let daily_button = document.querySelector(".daily-button");
let weekly_button = document.querySelector(".weekly-button");
let monthly_button = document.querySelector(".monthly-button");
let times = document.querySelectorAll(".time");
let periods = document.querySelectorAll(".period");
let last_times = document.querySelectorAll(".last-time");

fetch("/data.json")
.then(response => response.json())
.then(data_stock => {

    daily_button.addEventListener("click", () => {
        daily_button.style.color = "white";
        weekly_button.style.color = "rgb(189, 193, 255)";
        monthly_button.style.color = "rgb(189, 193, 255)";

        for(let i = 0; i < 6; i++) {
            times[i].textContent = data_stock[i].timeframes.daily.current + "hrs";
            periods[i].textContent = "Day";
            last_times[i].textContent = data_stock[i].timeframes.daily.previous + "hrs";
        }         
    });

    weekly_button.addEventListener("click", () => {
        weekly_button.style.color = "white";
        daily_button.style.color = "rgb(189, 193, 255)";
        monthly_button.style.color = "rgb(189, 193, 255)";

        for(let i = 0; i < 6; i++) {
            times[i].textContent = data_stock[i].timeframes.weekly.current + "hrs";
            periods[i].textContent = "Week";
            last_times[i].textContent = data_stock[i].timeframes.weekly.previous + "hrs";
        }
    });

    monthly_button.addEventListener("click", () => {
        monthly_button.style.color = "white";
        daily_button.style.color = "rgb(189, 193, 255)";
        weekly_button.style.color = "rgb(189, 193, 255)";

        for(let i = 0; i < 6; i++) {
            times[i].textContent = data_stock[i].timeframes.monthly.current + "hrs";
            periods[i].textContent = "Month";
            last_times[i].textContent = data_stock[i].timeframes.monthly.previous + "hrs";
        }
    });
});









