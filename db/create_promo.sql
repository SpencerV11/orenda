insert into promotion (
    promo_title,
    promo_desc,
    promo_exp
) values (
    $1, 
    $2,
    $3
);

select * from promotion
order by promotion_id desc;