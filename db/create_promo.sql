insert into promotion (
    promotion_title,
    description,
    ex_date
) values (
    $1, 
    $2,
    $3
);

select * from promotion
order by promotion_id desc;