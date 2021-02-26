const { Client, MessageAttachment } = require('discord.js');
const client = new Client();
const attachment = new MessageAttachment('https://i.imgflip.com/4q4j5i.png');

class Weekly{
    constructor(name, first, second, third, fourth, fifth, sixth, seventh, eigth, ninth, tenth){
        this.name = name;
        this.hours = [first, second, third, fourth, fifth, sixth, seventh, eigth, ninth, tenth];
    }
    print(){
        return this.name;
    }
}

var mo = new Weekly('montag', 'Englisch', 'Englisch', 'Wirtschaftslehre', 'Wirtschaftslehre', 'I, Sp', 'I, Sp', 'Ch, Ph', 'Ch, Ph', 'Französisch', 'Französisch');
var di = new Weekly('dienstag', 'Physik', 'Physik', 'Mathe', 'Mathe', 'Informatik', 'Informatik', 'I, Fr, Sp', 'I, Fr, Sp', '', '');
var mi = new Weekly('mittwoch', 'CTIT', 'CTIT', 'Ethik', 'Ethik', 'Deutsch', 'Deutsch', 'Informatik', 'Informatik', '', '');
var don = new Weekly('donnerstag', 'GGK', 'GGK', 'Mathe', 'Mathe', 'Informatik', 'Informatik', 'CHEMIE IHR OPFER', 'CHEMIE IHR OPFER', '', '');
var fr = new Weekly('freitag', 'Englisch', 'Englisch', 'Sport', 'Sport', 'Deutsch', 'Deutsch', 'SK Aischa SK!!!!!', 'SK Aischa SK!!!!!', '', '');
var days = [mo, di, mi, don, fr];

function dailySender(){
    try{
        var date = new Date().getDay();
        message.channel.send(printDay(date));
    }catch {
        console.error();
    }
    setInterval(dailySender ,360000);
}

dailySender();


function functionGet(input){
    if(input.includes('Stunde')){
        return 'Stunde';
    }
    return input;
}
function getLesson(){
    var hour = new Date().getHours();
    switch(hour){
        case 7: 
            if(new Date().getMinutes>25) return 0;
            break;
        case 8: 
            if(new Date().getMinutes<10) return 0;
            else if(new Date().getMinutes>55) return 1;
            else return 2;
            break;
        case 9: 
            if(new Date().getMinutes>10) return 2;
            else if(new Date().getMinutes>55) return 3;
            break;
        case 10: 
            if(new Date().getMinutes<40) return 4;
            else return 5;
            break;
        case 11: 
            if(new Date().getMinutes<40) return 4;
            else if(new Date().getMinutes>=40) return 5;
            break;
        case 12: return 6;
            break;
        case 13: return 6;
            break;
        case 14: 
            if(new Date().getMinutes<5) return 6;
            else if(new Date().getMinutes>=5) return 7;
            break;
        case 15:
            if(new Date().getMinutes<45) return 8;
            else if(new Date().getMinutes>45) return 9;
            break;
        case 16:
            if(new Date().getMinutes<30) return 9;
            else if(new Date().getMinutes>=30) return 0;
            break;        
        default: 
            return 0;
            break;
    }
}

client.on('ready', () =>{
    console.log('Ich bin ein Bot hol mich hier raus!');
});
client.on('message', message => {
   // message.channel.send('Justin stinkt ;D');
    var date = new Date().getDay();
    var hour = new Date().getTime();
    var res = functionGet(message.content)
    switch(message.content){
        case '?help':
            message.channel.send(':exclamation: Du kannst folgende Befehle nutzen: :exclamation:\n :white_small_square: ?help  -  Zeigt alle Befehle \n :white_small_square: ?<Wochentag>  -  Gibt den Plan des eingegebenen Tages aus \n :white_small_square: ?heute  -  Gibt den heutigen Plan aus \n :white_small_square: ?später  -  Gibt die restlichen Fächer des Tages aus \n :white_small_square: ?morgen  -  Gibt den morgigen Plan aus');
            break;
        case '?nächste':
            message.channel.send(days[date-1].hours[getLesson()+1]);
            break;
        case '?jetzt':
            message.channel.send('coming soon')
            break;
        break;
        case '?heute':
            if(date <= 5){message.channel.send(printDay(date-1))};
            break;
        case '?später':
            var nachricht = 'Du hast heute noch folgende Fächer!';

            for(var i = getLesson(); i<11; i++){
                console.log(i);
                if(days[date-1].hours[i-1] != '') {nachricht +=  '\n' +  i + ': ' + days[date-1].hours[i-1];}
            }
            nachricht += '\n:partying_face: FEIERABEND :partying_face:';
            message.channel.send(nachricht)
            break;
        case '?morgen':
            if(date < 5){
                message.channel.send(printDay(date));
            }
            else{
                message.channel.send(printDay(0))
            }
            break;
        case '?montag':
            console.log('montag case');
            message.channel.send(printDay(0));
            break;
        case '?dienstag':
            message.channel.send(printDay(1));
            break;
        case '?mittwoch':
            message.channel.send(attachment);
            message.channel.send(printDay(2));
            break;
        case '?donnerstag':
            message.channel.send(printDay(3));
            break;
        case '?freitag':
            message.channel.send(printDay(4));
            break;
        case '?samstag': message.channel.send("Du :cookie:"); break;
        case '?sonntag': message.channel.send("Du :cookie:"); break;
        case '?nevergonnagiveyouup': 
            message.channel.send('NEVER GONNA LET YOU DOWN');
            //const botkanal = client.channels.cache.find(ch => ch.name === 'botchannel');
            //botkanal.send('!play https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        case 'test':
            const botkanal = client.channels.cache.find(ch => ch.name === 'botchannel');
            const voice = client.channels.cache.find(ch => ch.name === 'Lobby');
            voice.join().then(connection => {
                botkanal.send('!join');
                botkanal.send('!play https://www.youtube.com/watch?v=YgGzAKP_HuM');
                setTimeout(function(){
                    voice.leave();
                }, 5000);
            })
    }
});

function getDateName(date) {
    switch(date) {
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

function printDay(day){
    var nachricht = 'Du hast am ' + getDateName(day+1) + ' folgende Fächer!';
    for(var i = 1; i<11; i++){
        if(days[day].hours[i-1] != '') {nachricht +=  '\n' +  i + ': ' + days[day].hours[i-1];}
    }
    nachricht += '\n:partying_face: FEIERABEND :partying_face:';
    return nachricht;
}

client.login(''); //insert token