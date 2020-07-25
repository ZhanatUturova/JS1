"use strict";

    let accountSize = prompt('Введите количество рублей, которые вы хотите положить на счет');
    let rubles = '';
    let lastsAccountSizeSymbols = '';

    function getLastsAccountSizeSymbols() {
        let a = accountSize.charAt(accountSize.length - 2);
        let b = accountSize.charAt(accountSize.length - 1);
        lastsAccountSizeSymbols = a + b;
    }
    getLastsAccountSizeSymbols()

    switch(lastsAccountSizeSymbols) {
        case '00':
        case '05':
        case '06':
        case '07':
        case '08':
        case '09':
        case '10':
        case '11':
        case '12':
        case '13':
        case '14':
        case '15':
        case '16':
        case '17':
        case '18':
        case '19':
        case '20':
        case '25':
        case '26':
        case '27':
        case '28':
        case '29':
        case '30':
        case '35':
        case '36':
        case '37':
        case '38':
        case '39':
        case '40':
        case '45':
        case '46':
        case '47':
        case '48':
        case '49':
        case '50':
        case '55':
        case '56':
        case '57':
        case '58':
        case '59':
        case '60':
        case '65':
        case '66':
        case '67':
        case '68':
        case '69':
        case '70':
        case '75':
        case '76':
        case '77':
        case '78':
        case '79':
        case '80':
        case '85':
        case '86':
        case '87':
        case '88':
        case '89':
        case '90':
        case '95':
        case '96':
        case '97':
        case '98':
        case '99':
            rubles = 'рублей';
            break;

        case '01':
        case '21':
        case '31':
        case '41':
        case '51':
        case '61':
        case '71':
        case '81':
        case '91':
            rubles = 'рубль';
            break;

        case '02':
        case '03':
        case '04':
        case '22':
        case '23':
        case '24':
        case '32':
        case '33':
        case '34':
        case '42':
        case '43':
        case '44':
        case '52':
        case '53':
        case '54':
        case '62':
        case '63':
        case '64':
        case '72':
        case '73':
        case '74':
        case '82':
        case '83':
        case '84':
        case '92':
        case '93':
        case '94':
            rubles = 'рубля';
            break;
    };

    function showAccountSize() {
        alert(`Ваша сумма в ${accountSize} ${rubles} успешно зачислена`);
    };

    showAccountSize();