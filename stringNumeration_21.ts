/*
Ключами могут быть не только числа, но и строки:

    enum Season {
	    Winter = 'season 1',
	    Spring = 'season 2',
	    Summer = 'season 3',
	    Autumn = 'season 4'
    };
Проверим:

    let current: Season = Season.Summer;
    console.log(current); // 'season 3'
 */

enum  Week {
    Monday = 'day1',
    Tuesday = 'day2',
    Wednesday = 'day3',
    Thursday = 'day4',
    Friday = 'day5',
    Saturday = 'day6',
    Sunday = 'day7'
}

enum Months {
    Januar = 'month1',
    February = 'month2',
    March = 'month3',
    April = 'month4',
    Mayy = 'month5',
    June = 'month6',
    Julyy = 'month7',
    August = 'month8',
    September = 'month9',
    October = 'month10',
    November = 'month11',
    December = 'month12'
}