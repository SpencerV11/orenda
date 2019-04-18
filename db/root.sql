-- create table client (
--     client_id serial primary key,
--     first_name varchar(30),
--     last_name varchar(30),
--     email varchar(40),
--      password text,
--     phone_number int,
--     is_admin boolean default false
-- );

-- insert into client (
--     first_name,
--     last_name,
--     email,
--     password,
--     phone_number,
--     is_admin
-- ) values (
--     'Carlee',
--     'Voorhees',
--     'asdf@gmail.com',
--     'asdf',
--     80183645,
--     true
-- )
-- select * from client;

-- create table product (
--     product_id serial primary key,
--     product_client_id int references client(client_id),
--     product_line
--     product_name varchar(30),
--     description text,
--     product_img text
-- )

-- create table promotion (
--     promotion_id serial primary key,
--     client_promotion_id int REFERENCES client(client_id),
--     promotion_title varchar(40),
--     description text
-- );

-- create table gallery (
--     gallery_id serial primary key,
--     client_picture_id int references client(client_id),
--     before_image text,
--     after_image text,
--     description text,
--     time TIMESTAMP,
--     date date
-- );

-- -- select * from client;

-- insert into review (
--     review_client_id,
--     description,
--     rating
-- ) values (
--     16,
--     'LOL I NEED THIS TO TEST SOMETHING',
--     5
-- );
-- -- (
-- --     21,
-- --     'She helped me with my needs and I was able to come out knowing alot more about my skin',
-- --     7
-- -- );
-- -- -- select * from review;

-- SELECT *
--     FROM client INNER JOIN review ON (client.client_id = review.review_client_id);

-- select * from review;