class Weekly{
    constructor(name, first, second, third, fourth, fifth, sixth, seventh, eigth, ninth, tenth){
        this.name = name;
        this.hours = [first, second, third, fourth, fifth, sixth, seventh, eigth, ninth, tenth];
    }
    print(){
        return this.name;
    }
}
const Discord = require('discord.js');
var mo = new Weekly('montag', 'En', 'En', 'Wl', 'Wl', 'I, Sp', 'I, Sp', 'Ch, Ph', 'Ch, Ph', 'Fr', 'Fr');
var di = new Weekly('dienstag', 'Ph', 'Ph', 'M', 'M', 'It', 'It', 'I, Fr, Sp', 'FREI', 'FREI');
var mi = new Weekly('mittwoch', 'CT', 'CT', 'Eth', 'Eth', 'De', 'De', 'IT', 'IT');
var don = new Weekly('donnerstag', 'GGK', 'GGK', 'M', 'M', 'IT', 'IT', 'CHEMIE IHR OPFER', 'CHEMIE IHR OPFER', '', '');
var fr = new Weekly('freitag', 'En', 'En', 'S', 'S', 'De', 'De', 'SK Aischa SK!!!!!', 'SK Aischa SK!!!!!', '', '');

var days = [mo, di, mi, don, fr];
console.log(days[1].print());

//console.log(test.print());
const client = new Discord.Client();


function functionGet(input){
    if(input.includes('Stunde')){
        return 'Stunde';
    }
    return input;
}

client.on('ready', () =>{
    console.log('I am ready!');
});

client.on('message', message => {
   // message.channel.send('Justin stinkt ;D');
    var date = new Date().getDay();
    var res = functionGet(message.content)
    switch(message.content){
        case '!help':
            message.channel.send('Du kannst folgende Befehle nutzen:');
            message.channel.send('!help  -  Zeigt alle Befehle');
            message.channel.send('!<Wochentag>  -  Gibt den Plan des eingegebenen Tages aus');
            message.channel.send('!heute  -  Gibt den heutigen Plan aus');
            message.channel.send('!morgen  -  Gibt den morgigen Plan aus');
            break;
        case 'nächste Stunde':
            //message.channel.send();
            break;
        case 'Stunde': 
        break;
        case 'endlos lul':
            //message.channel.send('endlos lul')
        break;
        case '!heute':
            message.channel.send("Du hast heute folgende Fächer")
            var nachricht = '';
            for(var i = 0; i<10; i++){
                nachricht = (i+1) + ': ' + days[date-1].hours[i] + '\n';
            }
            break;
        case '!morgen':
            var nachricht = '';
            message.channel.send("Du hast morgen folgende Fächer")
            for(var i = 1; i<=10; i++){
                message.channel.send(i + ': ' + days[date].hours[i])
            }
            break;
        case '!montag':
            message.channel.send(printDay(getDateName(1), 0));
            break;
        case '!dienstag':
            message.channel.send(printDay(getDateName(2), 1));
            break;
        case '!mittwoch':
            message.channel.send(printDay(getDateName(3), 2));
            break;
        case '!donnerstag':
            message.channel.send(printDay(getDateName(4), 3));
            break;
        case '!freitag':
            message.channel.send(printDay(getDateName(5), 4));
            break;
        case '!samstag': message.channel.send("Du :cookie:"); break;
        case '!sonntag': message.channel.send("Du :cookie:"); break;
    }
});

function getDateName() {
    var date = new Date();
    var input = date.getDay()
    switch(input) {
        case 1:
            return 'Montag';
            break;
        case 2:
            return 'Dienstag';
            break;
        case 3:
            return 'Mittwoch';
            break;
        case 4:
            return 'Donnerstag';
            break;
        case 5:
            return 'Freitag';
            break;
        default:
            return 'Montag'
    }
}

function printDay(tag, day){
    var nachricht = 'Du hast am ' + tag + ' folgende Fächer!';
    for(var i = 1; i<11; i++){
        nachricht +=  '\n' +  i + ': ' + days[day].hours[i];
    }
    return nachricht;
}

client.login('');