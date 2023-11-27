drop table if exists player;
drop table if exists match;
drop table if exists participant;


create table player(
    id serial primary key,
    puuid text,
    role text,
    riotid text
);
create table match(
    id serial primary key,
    matchid text,
    started integer,
    duration integer,
    winner integer
);
create table participant(
    id serial primary key,
    match integer references match(id),
    player integer references player(id),
    champion text,
    level integer,
    position text,
    gold integer,
    kill integer,
    death integer,
    assist integer,
    dealt integer,
    taken integer,
    cc integer,
    cs integer,
    vision integer,
    item1 integer,
    item2 integer,
    item3 integer,
    item4 integer,
    item5 integer,
    item6 integer,
    item7 integer,
    rune1 integer,
    rune2 integer,
    rune3 integer,
    rune4 integer,
    rune5 integer,
    rune6 integer,
    rune7 integer,
    rune8 integer,
    rune9 integer,
    summ1 integer,
    summ2 integer
);

