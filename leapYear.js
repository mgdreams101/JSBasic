function leapYear(year){
    let leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    console.log(leap ? `Year ${year} IS a lear year!` : `Year ${year} is NOT a lear year!`);
}

leapYear(2024);