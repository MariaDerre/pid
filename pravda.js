function genQuote() {
    var randNum = Math.floor(Math.random() * 39) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
    var tweetQuote = quotes[randNum].split(' ').join('%20');
    tweetQuote = tweetQuote.split('<br>').join('');
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
    $('.twitter-share-button').attr('href', tweetQuote);
    }
    var quotes = [ "Blank",
    "Кто из игроков больше всего похож на идеал?",
    "Хотел (хотела) бы иметь раба? Кто это был бы из этой комнаты?",
    "О чем обычно врешь другим людям?",
    "С кем из присутствующих хочешь пойти на свидание?",
    "Как бы ты потратил (потратила) миллион долларов?",
    "Какие безумные поступки совершал (совершала)?",
    "Чего больше всего боишься в жизни?",
    "Что больше всего боишься потерять?",
"Что больше всего мешает в жизни?",
"Самый странный сон, случившийся с тобой?",
"Сколько селфи делаешь в день?",
 "Если срочно надо выйти замуж/жениться, то кто это будет среди игроков?",
 "Какой настораживающий факт можешь рассказать о себе?",
 "Ночевал (ночевала) ли на улице?",
 "Что не получается сделать, хотя пытаешься?",
"Самая последняя «стыдная» история?",
 "Какое имя противоположного пола тебе нравится?",
 "Кто из присутствующих тебя восхищает и чем именно?",
"Что сразу убьет твое желание?",
"Можешь провести месяц наедине с собой одним?",
"Самая обидная вещь, что слышал про себя?",
"Начал (начала) бы встречаться с миллионером из-за его денег?",
"Влюблялся ли в человека твоего же пола?",
"Нарушал (нарушала) закон хоть раз в жизни и как это было?",
"Кем и где видишь себя через 10 лет?",
"Нюхаешь свою одежду перед тем, как ее надеть?",
"Когда-нибудь писал (писала) в бассейн или море?",
"За что больше всего стыдно в жизни?",
"Что делал (делала), если стал девушкой (стала парнем) на один день?",
"Что ты последний раз искал/а на телефоне?",
"У тебя есть какое-нибудь постыдное удовольствие?",
"Какая твоя самая плохая привычка?",
"Ты считаешь …(имя) симпатичным(ой)?",
"Как выглядит мужчина или женщина твоей мечты?",
"Какое сообщение ты последний раз отправлял/а?",
"Ты когда-нибудь публиковал/а в социальные сети что-то, о чем потом сожалел?",
"Ты когда-нибудь стучал в чью-то дверь и потом убегал?",
"Как далеко ты готов был бы поехать за женщиной или мужчиной своей мечты?",
"Ты когда-нибудь притворялся больным, чтобы не идти в школу или на работу?",
"Если бы ты был/а дома сам весь день, что бы ты делал/а?"];