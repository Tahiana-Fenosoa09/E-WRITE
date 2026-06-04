export default function communityData() {
    const leaderboardUsers = [
        {
            pseudo: "SpeedMaster",
            rank: 1,
            speed: "150 WPM"
        },
        {
            pseudo: "FlashKeys",
            rank: 2,
            speed: "145 WPM"
        },
        {
            pseudo: "RapidTyper",
            rank: 3,
            speed: "142 WPM"
        },
        {
            pseudo: "KeyboardNinja",
            rank: 4,
            speed: "138 WPM"
        },
        {
            pseudo: "TypeStorm",
            rank: 5,
            speed: "135 WPM"
        },
        {
            pseudo: "WordRunner",
            rank: 6,
            speed: "131 WPM"
        },
        {
            pseudo: "HyperFingers",
            rank: 7,
            speed: "128 WPM"
        },
        {
            pseudo: "SilentWriter",
            rank: 8,
            speed: "125 WPM"
        },
        {
            pseudo: "QuickInk",
            rank: 9,
            speed: "122 WPM"
        },
        {
            pseudo: "TypeRocket",
            rank: 10,
            speed: "120 WPM"
        },
        {
            pseudo: "FastTrack",
            rank: 11,
            speed: "117 WPM"
        },
        {
            pseudo: "VelocityKeys",
            rank: 12,
            speed: "115 WPM"
        },
        {
            pseudo: "LightningHands",
            rank: 13,
            speed: "112 WPM"
        },
        {
            pseudo: "CodeTyper",
            rank: 14,
            speed: "110 WPM"
        },
        {
            pseudo: "SwiftWriter",
            rank: 15,
            speed: "107 WPM"
        },
        {
            pseudo: "FingerSprint",
            rank: 16,
            speed: "104 WPM"
        },
        {
            pseudo: "TypeWizard",
            rank: 17,
            speed: "101 WPM"
        },
        {
            pseudo: "AlphaKeys",
            rank: 18,
            speed: "98 WPM"
        },
        {
            pseudo: "BlueKeyboard",
            rank: 19,
            speed: "95 WPM"
        },
        {
            pseudo: "FocusTyper",
            rank: 20,
            speed: "92 WPM"
        },
        {
            pseudo: "PracticeDaily",
            rank: 21,
            speed: "88 WPM"
        },
        {
            pseudo: "FastLearner",
            rank: 22,
            speed: "85 WPM"
        },
        {
            pseudo: "TouchTypingPro",
            rank: 23,
            speed: "82 WPM"
        },
        {
            pseudo: "CleanWriter",
            rank: 24,
            speed: "79 WPM"
        },
        {
            pseudo: "AccurateAce",
            rank: 25,
            speed: "75 WPM"
        },
        {
            pseudo: "DailyPractice",
            rank: 26,
            speed: "72 WPM"
        },
        {
            pseudo: "KeyboardHero",
            rank: 27,
            speed: "68 WPM"
        },
        {
            pseudo: "FuturePro",
            rank: 28,
            speed: "65 WPM"
        },
        {
            pseudo: "StudentTyper",
            rank: 29,
            speed: "60 WPM"
        },
        {
            pseudo: "BeginnerBoost",
            rank: 30,
            speed: "55 WPM"
        }
    ];

    const typingNews = [
        {
            title: "Global Typing Championship Announced for July",
            date: "2026-07-15"
        },
        {
            title: "New Weekly Accuracy Challenge Now Available",
            date: "2026-06-10"
        },
        {
            title: "Player SpeedMaster Breaks 160 WPM Barrier",
            date: "2026-06-08"
        },
        {
            title: "Double XP Weekend Starts This Friday",
            date: "2026-06-06"
        },
        {
            title: "Community Event: Race Against the Clock",
            date: "2026-06-20"
        },
        {
            title: "New Hard Mode Word Pack Released",
            date: "2026-06-12"
        },
        {
            title: "Typing Marathon Challenge Reaches 10,000 Participants",
            date: "2026-06-05"
        },
        {
            title: "Top 100 Players Receive Exclusive Badges",
            date: "2026-06-25"
        },
        {
            title: "Practice Streak Rewards Expanded",
            date: "2026-06-18"
        },
        {
            title: "Monthly Tournament Registration Now Open",
            date: "2026-06-22"
        },
        {
            title: "New Achievement: 100 Tests Without Missing a Day",
            date: "2026-06-14"
        },
        {
            title: "Community Milestone: One Million Tests Completed",
            date: "2026-06-11"
        },
        {
            title: "Elite Typists Invited to Invitational Cup",
            date: "2026-07-01"
        },
        {
            title: "Beginner Bootcamp Event Starts Next Week",
            date: "2026-06-16"
        },
        {
            title: "Accuracy League Season 3 Officially Begins",
            date: "2026-06-30"
        },
        {
            title: "Typing Relay Competition Returns",
            date: "2026-07-08"
        },
        {
            title: "Community Votes for New Language Pack",
            date: "2026-06-27"
        },
        {
            title: "Special Night Challenge Offers Bonus Rewards",
            date: "2026-06-19"
        },
        {
            title: "Top Racer Reaches 500 Consecutive Wins",
            date: "2026-06-13"
        },
        {
            title: "New Keyboard Theme Collection Released",
            date: "2026-06-24"
        },
        {
            title: "Developers Tease Upcoming Team Battle Mode",
            date: "2026-07-05"
        },
        {
            title: "Community Charity Typing Event Scheduled",
            date: "2026-07-12"
        },
        {
            title: "Fast Fingers Cup Prize Pool Increased",
            date: "2026-06-29"
        },
        {
            title: "Weekend Sprint Challenge Features Rare Rewards",
            date: "2026-06-21"
        },
        {
            title: "Top Accuracy Record Stands Unbroken for 3 Months",
            date: "2026-06-17"
        }
    ];

    function displayLeaderboard() {
        const container =
            document.querySelector(".game-community-rank-grid");

        leaderboardUsers.forEach(user => {
            const card = document.createElement("div");

            card.className = "game-community-rank-cards";

            card.innerHTML = `
            <h3>${user.rank}</h3>
            <h3>${user.pseudo}</h3>
            <h3>${user.speed}</h3>
        `;

            container.appendChild(card);
        });
    }

    function displayNews() {
        const newsList =
            document.querySelector(".game-community-news-list");

        newsList.innerHTML = "";

        typingNews.forEach(news => {
            const li = document.createElement("li");

            li.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.date}</p>
        `;

            newsList.appendChild(li);
        });
    }

    displayNews();
    displayLeaderboard();
}