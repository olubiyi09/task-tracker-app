const currentDate = document.querySelector(".current-date");
const currentTime = document.querySelector(".current-time");
const today = new Date();

//display date function
    const getDate = (today) => {
        let months = ["Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ];

        const days = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];

    
        const day = days[today.getDay()];
        const date = today.getDate();
        const month = months[today.getMonth()];
        const year = today.getFullYear();

        return `${day}, ${date}, ${month}, ${year}`;
    };

    currentDate.innerHTML = getDate(today);

    //display time
    function displayTime() {
        const date = new Date();
        currentTime.innerHTML = date.toLocaleTimeString();
    }

    setInterval(displayTime, 1000);