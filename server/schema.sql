create database movielist;
use movielist;

create table movies(
  id int not null primary key auto_increment,
  title varchar(50),
  isWatched int not null
)

/*
*  mysql -u root < server/schema.sql
*/